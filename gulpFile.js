var gulp = require('gulp');
var sass = require('gulp-sass');
<<<<<<< HEAD
var htmlhint = require("gulp-htmlhint");
var csslint = require('gulp-csslint');
var gulpStylelint = require('gulp-stylelint');

gulp.task('nav',function(){
	
	console.log('hello nav');
	return gulp.src('project/sass/style.scss')
	  .on('error',sass.logError)
		.pipe(sass())
		.pipe(gulp.dest('project/css')
		)

  });

gulp.task('htmlhint',function(){
  
  console.log('hello htmlint');
  return gulp.src("./*.html")
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter())

  });

gulp.task('csslint', function() {
  console.log('hello csslint');
   return gulp.src('./project/css/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
});

gulp.task('lint-css', function lintCssTask() {

  return gulp
    .src('./project/css/*.css')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});
=======
gulp.task('nav',function(){
	console.log('hello nav');
	return gulp.src('project/sass/style.scss')
	    .on('error',sass.logError)
		.pipe(sass())
		.pipe(gulp.dest('project/css'))
	});
gulp.watch('project/sass/style.scss', ['A']);
>>>>>>> 3dc56b74454e14080709d20c9c761bedf39d8a5a
