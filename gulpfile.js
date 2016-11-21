var gulp = require('gulp'),
		jshint = require('gulp-jshint')
		stylish = require('jshint-stylish'),
		less = require('gulp-less'),
		concat = require('gulp-concat'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload;
		sourcemaps = require('gulp-sourcemaps');
/*
gulp.task('jshint', function(){
	return gulp.src('./src*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
}) ;*/

gulp.task('watch', function(){
	gulp.watch('./src/*.html', reload);
	gulp.watch('./src/*.js', reload);
	gulp.watch('./src/style/*.less', ['less']);
	gulp.watch('./src/style/*.css', reload);
});


gulp.task('less', function() {
    return gulp.src('./src/style/*.less')
	    .pipe(sourcemaps.init())
	    .pipe(less())
	    .pipe(concat('./src/style/bundle.css'))
	    .pipe(sourcemaps.write('.'))
	    .pipe(gulp.dest('./'));
});

gulp.task('serve', ['less'], function(){
	browserSync({
		notify: false,
		server:{
			baseDir: './src/',
		    routes : {
		    	'/bower_components' : 'bower_components'
		    }
		}
	});
  gulp.start('watch');
});

gulp.task('default', ['serve', 'less']);

