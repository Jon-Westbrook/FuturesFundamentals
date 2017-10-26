//Gulp plugin
var gulp = require('gulp');
requireDir = require('require-dir'),
    uglify = require('gulp-uglify'),
    copy = require("gulp-copy"),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    zetzer = require('gulp-zetzer'),
    cleanCSS = require('gulp-clean-css'),
    glob = require('glob'),
    fs = require('fs'),
    clean = require('gulp-clean'),
    merge = require('merge'),
    git = require('gulp-git'),
    filter = require('gulp-filter'),
    runSequence = require('run-sequence'),
    gutil = require('gulp-util'),
    banner = require('gulp-banner'),
    pkg = require('./package.json'),

    // postcss       = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    ignore = require('gulp-ignore');

// var sassFiles = "./_sass/**/*.scss";

var jsBanner = "";

function concatUglifyMapOldSchool(js_files, cat_file, min_file, dest_folder, sort_flag) {
    var handle = gulp.src(js_files);
    // if(sort_flag)
    //  handle = handle.pipe(sort());

    return handle.pipe(sourcemaps.init())
        .pipe(concat(cat_file))
        .pipe(banner(jsBanner, {
            pkg: pkg
        }))
        .pipe(gulp.dest(dest_folder))
        .pipe(uglify())
        .pipe(rename(min_file))
        .pipe(banner(jsBanner, {
            pkg: pkg
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(dest_folder));
}
gulp.task('sass:client', function() {
    return gulp.src(['./_sass/vendor/bootstrap.scss', './_sass/main.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceComments: true
        }))
        .pipe(rename({
            extname: ".css"
        }))
        .pipe(banner(jsBanner, { pkg: pkg }))
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: ''
        }))
        .pipe(gulp.dest('css/'))
        // .pipe(ignore.include('**/*.css'))
        // .pipe(rename({
        //     suffix: ".min",
        // }))
        // .pipe(banner(jsBanner, { pkg: pkg }))
        // .pipe(sourcemaps.write('maps', {
        //     includeContent: false,
        //     sourceRoot: ''
        // }))
        // .pipe(gulp.dest('css/'));
});

gulp.task("watch", function() {
    log("Watching scss files for modifications");
    gulp.watch(sassFiles, ["sass"]);
});

gulp.task("default", ["sass:client"]);