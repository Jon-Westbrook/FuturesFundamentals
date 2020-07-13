const autoprefixer = require('autoprefixer')
const gulp = require('gulp')
// const debug = require('gulp-debug')
const responsive = require('gulp-responsive')
const metalsmith = require('metalsmith')
const cleanCss = require('metalsmith-clean-css')
const helpers = require('metalsmith-discover-helpers')
const partials = require('metalsmith-discover-partials')
const msEnv = require('metalsmith-env')
const ignore = require('metalsmith-ignore')
const imagemin = require('metalsmith-imagemin')
// const inlineSource = require('metalsmith-inline-source')
const jstransformer = require('metalsmith-jstransformer')
const frontmatter = require('metalsmith-matters')
// const redirect = require('metalsmith-redirect')
const sass = require('metalsmith-sass')
const serve = require('metalsmith-serve')
const watch = require('metalsmith-watch')
const webpackMs = require('metalsmith-webpack')
const each = require('metalsmith-each')
const minimatch = require('minimatch')
const postcss = require('postcss')
const sassSyntax = require('postcss-scss')
// const webpack = require('webpack')

const webpackConfig = require('./webpack.config')
const siteMetadata = require('./src/_data/site')

const sassAutoprefixer = function sassAutoprefixer () {
  return function (files, _metalsmith, done) {
    const processor = postcss([autoprefixer])
    const targetFiles = Object.keys(files).filter(minimatch.filter('*.scss', { matchBase: true }))

    targetFiles.forEach(file => {
      const prefixedContents = processor.process(files[file].contents.toString(), {
        syntax: sassSyntax
      }).css
      files[file].contents = Buffer.from(prefixedContents)
    })
    done()
  }
}

const imageDir = './src/assets/images/'

gulp.task('responsive-images', () =>
  gulp
    .src(`${imageDir}**/*@2x*.{png,jpg}`)
    .pipe(
      responsive({
        '**/*': {
          width: '50%',
          height: '50%',
          quality: 100,
          rename (name) {
            name.basename = name.basename.replace('@2x', '@1x')
            return name
          }
        }
      })
    )
    .pipe(gulp.dest(imageDir))
)

gulp.task('webp-images', ['responsive-images'], () =>
  gulp
    .src(`${imageDir}**/*.{png,jpg}`)
    .pipe(
      responsive({
        '**/*': {
          format: 'webp',
          rename (name) {
            name.extname = '.webp'
            return name
          }
        }
      })
    )
    .pipe(gulp.dest(imageDir))
)

// const imageminOpts = {
//   optimizationLevel: 3,
//   jpegrecompress: null,
//   mozjpeg: {
//     progressive: true,
//     quality: 100
//   }
// }

const envs = ['prod', 'dev']

envs.forEach(env => {
  gulp.task(env, () => {
    let buildProcess = metalsmith(__dirname)
      .metadata({ site: siteMetadata })
      .frontmatter(false)
      .use(
        frontmatter({
          namespace: 'page'
        })
      )
      .use(msEnv())
      .source('./src')
      .destination('./build')
      .clean(true)
      .use(
        helpers({
          directory: './src/_helpers'
        })
      )
      .use(ignore('_helpers/**'))
      .use(
        partials({
          directory: './src/_partials'
        })
      )
      .use(ignore('_partials/**'))
      .use(sassAutoprefixer())
      .use(
        sass({
          includePaths: ['./node_modules'],
          outputDir: 'css/',
          sourceMap: env !== 'prod',
          sourceMapContents: env !== 'prod'
        })
      )
      .use(ignore(['_scss/**', '_scss/.*', '_scss/**/.*']))
      .use(webpackMs(webpackConfig(env)))
      .use(ignore('_js/**'))
      .use(ignore('_data/**'))
      .use(
        jstransformer({
          pattern: '**.html.hbs',
          layoutPattern: '_layouts/**',
          defaultLayout: '_layouts/default.hbs'
        })
      )
      // .use(inlineSource())
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
      )
      .use(each((file, filename) => {
        if (filename.indexOf('_assets') > -1) filename = filename.replace('_assets', 'assets')

        if (filename.indexOf('pages/') > -1) {
          filename = filename.replace('pages/', '')

          if (filename.indexOf('index.html') === -1) {
            filename = filename.replace('.html', '/index.html')
          }
        }

        return filename
      }))

    if (env === 'dev') {
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
              '${source}/_assets/**/*': true, // eslint-disable-line no-template-curly-in-string
              '${source}/_scss/**/*': '**/*.scss', // eslint-disable-line no-template-curly-in-string
              '${source}/_js/**/*': 'js/index.js' // eslint-disable-line no-template-curly-in-string
            },
            livereload: true
          })
        )
    }

    return new Promise((resolve, reject) => {
      buildProcess.build(err => {
        if (err) {
          reject(err)
        }

        resolve()
      })
    })
  })
})
