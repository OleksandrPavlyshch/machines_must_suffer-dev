"use strict";
var gulp = require('gulp')
	, mainBowerFiles = require('main-bower-files')
	, plumber = require('gulp-plumber')
	, uglify = require('gulp-uglify')
	, runSequence = require('run-sequence')
	, cleanCSS = require('gulp-clean-css')
	, configs = require('./configs');

gulp.task('bower', function() {
	runSequence( 'vendor-js', 'vendor-css');
});



// vendor-js
gulp.task('vendor-js', function() {
	return gulp.src(configs.source.vendorJs)
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest(configs.build.vendorJs));

});

// vendor-js
gulp.task('vendor-css', function() {
	return gulp.src(configs.source.vendorCss)
	.pipe(plumber())
	.pipe(gulp.dest(configs.build.vendorCss));
});