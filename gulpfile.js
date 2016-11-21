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
	gulp.watch('./*.js', reload);
	gulp.watch('./*.json', reload);
	gulp.watch('webapp/*.html', reload);
	gulp.watch('webapp/*.js', reload);
	gulp.watch('webapp/*.json', reload);
	gulp.watch('webapp/model/*.json', reload);
	gulp.watch('webapp/model/*.xml', reload);
	gulp.watch('webapp/view/*.xml', reload);
	gulp.watch('webapp/style/*.css', reload);
	gulp.watch('webapp/controller/*.js', reload);
	gulp.watch('webapp/i18n/*.properties', reload);
	gulp.watch('webapp/control/**/*.js', reload);
	gulp.watch('webapp/control/**/*.xml', reload);
	gulp.watch('webapp/control/**/*.less', ['less']);
});


gulp.task('less', function() {
    return gulp.src('./webapp/control/**/*.less')
	    .pipe(sourcemaps.init())
	    .pipe(less())
	    .pipe(concat('bundle.css'))
	    .pipe(sourcemaps.write('.'))
	    .pipe(gulp.dest('./webapp/style/'));
});

gulp.task('serve', ['less'], function(){
	browserSync({
		notify: false,
		server:{
			baseDir: './webapp/',
		    routes : {
		    	'/bower_components' : 'bower_components',
		    	'/resources' : 'resources'
		    }
		}
	});
  gulp.start('watch');
});

gulp.task('default', ['serve', 'less']);

