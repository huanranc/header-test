var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('header',function(){
	console.log('hello');
	return gulp.src('header/sass/style.scss')
	    .on('error',sass.logError)
		.pipe(sass())
		.pipe(gulp.dest('header/css'))
	});