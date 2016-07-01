const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');


var location = {
  sass: './scss/**/*.scss',
  css: './css'
};

gulp.task('default', ['sass']);
gulp.task('sass', function(){
  var stream =
    gulp.src( location.sass )
    .pipe( sass() )
    .pipe( prefix() )
    .pipe( gulp.dest( location.css ));
    return stream;
});

gulp.task('watch', function(){
  gulp.watch( location.sass, ['sass'] );
});
