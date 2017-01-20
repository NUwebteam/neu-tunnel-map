'use strict';

const gulp          = require('gulp');
const gulpPlugin    = require('gulp-load-plugins')();
const webpack       = require('webpack');
const webpackConfig = require('./webpack.config');
const sass          = require('gulp-sass');
const sourcemaps    = require('gulp-sourcemaps');
const autoprefixer  = require('autoprefixer');
const postcss       = require('gulp-postcss');
const minifyCss     = require('gulp-minify-css');
const rename        = require("gulp-rename");
// const runSequence   = require('run-sequence');
// const del           = require('del');

/**
*   Delete the assets build folder to clean out any old or useless code
*/
// gulp.task('del', function() {
//     return del('./assets/build');
// });

/**
*   Bundles JS
*/
gulp.task('scripts', function(cb) {
    webpack(webpackConfig, function(err, stats) {
        if (err) {
            throw new gulpPlugin.util.PluginError('webpack', err);
        }

        gulpPlugin.util.log('[webpack]', stats.toString({
            colors: true
        }));

        cb();
    });
});

/**
*   Compile css
*/
gulp.task('styles', function() {
    return gulp.src('./assets/scss/index.scss')
        .pipe(sass())
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(postcss([
            autoprefixer({
                browsers: ["Android 2.3",
                            "Android >= 4",
                            "Chrome >= 20",
                            "Firefox >= 24",
                            "Explorer >= 8",
                            "iOS >= 6",
                            "Opera >= 12",
                            "Safari >= 6"]
            })
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'));
        // .pipe(browserSync.stream());
});


/**
*   Build a custom modernizr file
*/
// gulp.task('modernizr', function() {
//     gulp.src(['./assets/scss/**/*.scss', './assets/js/**/*.js'])
//         .pipe(gulpPlugin.modernizr({
//             options: [
//                 "setClasses"
//             ]
//         }))
//         .pipe(gulpPlugin.uglify())
//         .pipe(gulp.dest('./assets/build/'));
// });

/**
*   Reload broswser on file changes
*/
// gulp.task('browser-sync', function() {
//     var files = [
//         './assets/scss/**/*.scss',
//         './assets/admin-scss/**/*.scss',
//         './assets/js/**/*.js',
//         './**/**/*.twig',
//         '*.php'
//     ];
//
//     browserSync.init(files, {
//         proxy: 'build.neu-news-wp-theme.dev',
//         notify: true,
//         server: false,
//         startPath: null,
//         open: false,
//         host: null,
//         ghostMode: false
//     });

    // gulp.watch('./assets/scss/**/*.scss', ['styles']);
    // gulp.watch('./assets/admin-scss/**/*.scss', ['admin-styles']);
    // gulp.watch('./assets/js/**/*.js', ['scripts']);
    // gulp.watch('./assets/assets/build/*.js').on('change', browserSync.reload);
// });

gulp.task('styles:watch', function () {
    gulp.watch('./assets/scss/**/*.scss', ['styles']);
});

gulp.task('scripts:watch', function () {
  gulp.watch('./assets/js/**/*.js', ['scripts']);
});
// gulp.watch('./assets/scss/*.scss', ['styles']);
// gulp.watch('./assets/js/**/*.js', ['scripts']);

/**
*   Gulp task for dev
*/
gulp.task('default', [ 'styles:watch', 'scripts:watch' ]);

/**
*   Gulp task for production
*/
// gulp.task('production', function() {
//     runSequence('del', 'styles-production', 'scripts', 'admin-styles', 'modernizr');
// });

/**
*   Set default to dev
*/
// gulp.task('default', [ 'dev' ]);
