var gulp             = require('gulp');
var browser_sync     = require('browser-sync');    // przetwarzanie plików
var gulp_plumber     = require('gulp-plumber');    // de bug
var gulp_uglify      = require('gulp-uglify');     // min files
var gulp_rename      = require('gulp-rename');     // add min at end
var gulp_concat      = require('gulp-concat');     // lonczenie plików
var gulp_sass        = require('gulp-sass');       // Sass
var gulp_cssmin      = require('gulp-cssmin');     // css-min
var gulp_typescript  = require('gulp-typescript'); // typescript



gulp.task('Test', function(){
  console.log('Gulp Works');
});

gulp.task('typescript', function() {
  gulp.src(['sorce/typescript/*.ts'])
        .pipe(gulp_typescript({
             noImplicitAny: true,
             out: 'output.js'
         }))
        .pipe(gulp_concat('scripts.js'))
        .pipe(gulp.dest('project/scripts')) // for testing
        .pipe(gulp_uglify())
        .pipe(gulp_rename({suffix: '.min'}))
        .pipe(gulp.dest('project/scripts'));
});

gulp.task('watch_typescript', function(){
gulp.watch(['sorce/typescript/*.ts'],['typescript']);
});



gulp.task('scss', function() {
    gulp.src('sorce/scss/style.scss')
        .pipe(gulp_sass().on('error', gulp_sass.logError))
        .pipe(gulp.dest('project/css'))
        .pipe(gulp_cssmin())
        .pipe(gulp_rename({suffix: '.min'}))
        .pipe(gulp.dest('project/css'));
});

gulp.task('watch_scss', function(){
gulp.watch(['sorce/scss/*.scss'],['scss']);
});



gulp.task('default', ['watch_typescript','watch_scss']);
