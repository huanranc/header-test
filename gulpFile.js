var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('header',function(){
	console.log('hello');
	return gulp.src('header/sass/style.scss')
	    .on('error',sass.logError)
		.pipe(sass())
		.pipe(gulp.dest('header/css'))
	});

gulp.task('nav',function(){
	console.log('hello nav');
	return gulp.src('test/sass/style.scss')
	    .on('error',sass.logError)
		.pipe(sass())
		.pipe(gulp.dest('test/css'))
	});