'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	complexity = require('gulp-complexity'),
	karma = require('gulp-karma'),
	wrap = require('gulp-wrap-exports'),
	rename = require('gulp-rename'),
	esnext = require('gulp-esnext');

gulp.task('analysis', function(){
	return gulp.src(['index.js', 'spec.js'])
		.pipe(esnext())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(complexity());
});

gulp.task('test', function(){
	return gulp.src('spec.js')
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}));
});

gulp.task('wrap', function(){
	return gulp.src('index.js')
		.pipe(esnext())
		.pipe(wrap({ name: 'bind' }))
		.pipe(rename('binder.js'))
		.pipe(gulp.dest('.'));
});

gulp.task('default', ['analysis', 'test']);

gulp.task('watch', function(){
	gulp.watch('index.js', ['wrap']);
});
