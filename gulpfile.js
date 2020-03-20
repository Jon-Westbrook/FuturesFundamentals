var autoprefixer = require('autoprefixer');
var gulp = require('gulp');
var debug = require('gulp-debug');
var responsive = require('gulp-responsive');
var metalsmith = require('metalsmith');
var cleanCss = require('metalsmith-clean-css');
var helpers = require('metalsmith-discover-helpers');
var partials = require('metalsmith-discover-partials');
var env = require('metalsmith-env');
var ignore = require('metalsmith-ignore');
var imagemin = require('metalsmith-imagemin');
var inlineSource = require('metalsmith-inline-source');
var jstransformer = require('metalsmith-jstransformer');
var frontmatter = require('metalsmith-matters');
var redirect = require('metalsmith-redirect');
var sass = require('metalsmith-sass');
var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');
var webpackMs = require('metalsmith-webpack');
var minimatch = require('minimatch');
var path = require('path');
var postcss = require('postcss');
var sassSyntax = require('postcss-scss');
var webpack = require('webpack');

var sassAutoprefixer = function sassAutoprefixer() {
  return function(files, _metalsmith, done) {
    var processor = postcss([autoprefixer]);
    var targetFiles = Object.keys(files).filter(minimatch.filter('*.scss', { matchBase: true }));

    targetFiles.forEach(file => {
      var prefixedContents = processor.process(files[file].contents.toString(), {
        syntax: sassSyntax
      }).css;
      files[file].contents = new Buffer.from(prefixedContents);
    });
    done();
  };
};

var imageDir = './src/assets/images/';

gulp.task('responsive-images', () =>
  gulp
    .src(`${imageDir}**/*@2x*.{png,jpg}`)
    .pipe(
      responsive({
        '**/*': {
          width: '50%',
          height: '50%',
          quality: 100,
          rename(name) {
            name.basename = name.basename.replace('@2x', '@1x');
            return name;
          }
        }
      })
    )
    .pipe(gulp.dest(imageDir))
);

gulp.task('webp-images', ['responsive-images'], () =>
  gulp
    .src(`${imageDir}**/*.{png,jpg}`)
    .pipe(
      responsive({
        '**/*': {
          format: 'webp',
          rename(name) {
            name.extname = '.webp';
            return name;
          }
        }
      })
    )
    .pipe(gulp.dest(imageDir))
);

var imageminOpts = {
  optimizationLevel: 3,
  jpegrecompress: null,
  mozjpeg: {
    progressive: true,
    quality: 100
  }
};

var envs = ['prod', 'dev'];

envs.forEach(type => {
  gulp.task(type, () => {
    var buildProcess = metalsmith(__dirname)
      .frontmatter(false)
      .use(
        frontmatter({
          namespace: 'data'
        })
      )
      .use(env())
      .source('./src')
      .destination('./build')
      .clean(true)
      .use(
        helpers({
          directory: `./src/helpers`
        })
      )
      .use(ignore('helpers/**'))
      .use(
        partials({
          directory: `./src/partials`
        })
      )
      .use(ignore('partials/**'))
      .use(sassAutoprefixer())
      .use(
        sass({
          includePaths: ['./node_modules'],
          outputDir: '2019/css/',
          sourceMap: type !== 'prod',
          sourceMapContents: type !== 'prod'
        })
      )
      .use(ignore(['scss/**', 'scss/.*', 'scss/**/.*']))
      .use(
        webpackMs({
          context: path.resolve(__dirname),
          entry: './src/js/index.js',
          output: {
            path: path.resolve(__dirname, 'build/js'),
            filename: 'bundle.js'
          },
          module: {
            loaders: [{ test: /\.js$/, loaders: type === 'dev' ? ['babel', 'eslint'] : ['babel'] }]
          }
        })
      )
      .use(ignore('js/**'))
      .use(ignore('data/**'))
      .use(
        jstransformer({
          pattern: '**.html.hbs',
          layoutPattern: 'layouts/**',
          defaultLayout: 'layouts/default.hbs'
        })
      )
      .use(inlineSource())
      .use(
        cleanCss({
          files: '**/*.css',
          cleanCSS: {
            rebase: false
          }
        })
      )
      .use(
        imagemin({
          verbose: true
        })
      );

    if (type === 'dev') {
      buildProcess = buildProcess
        .use(
          serve({
            port: 8080
          })
        )
        .use(
          watch({
            paths: {
              '${source}/**/*.hbs': '**/*.hbs', // eslint-disable-line no-template-curly-in-string
              '${source}/*.hbs': '*.hbs', // eslint-disable-line no-template-curly-in-string
              '${source}/assets/**/*': true, // eslint-disable-line no-template-curly-in-string
              '${source}/scss/**/*': 'scss/**/*', // eslint-disable-line no-template-curly-in-string
              '${source}/js/**/*': 'js/index.js' // eslint-disable-line no-template-curly-in-string
            },
            livereload: true
          })
        );
    }

    buildProcess.build(err => {
      if (err) {
        throw err;
      }
    });
  });
});
