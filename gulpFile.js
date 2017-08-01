var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('nav',function(){
	console.log('hello nav');
	return gulp.src('project/sass/style.scss')
	    .on('error',sass.logError)
		.pipe(sass())
		.pipe(gulp.dest('project/css'))
	});
gulp.watch('project/sass/style.scss', ['A']);