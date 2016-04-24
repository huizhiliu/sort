var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	jshint = require("gulp-jshint");
gulp.task('default',function(){
	gulp.src('lib/*.js')
	 // .pipe(jshint())
  //   .pipe(jshint.reporter())
    .pipe(livereload());
})