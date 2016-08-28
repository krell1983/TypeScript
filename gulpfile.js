var gulp             = require('gulp');
var browser_sync     = require('browser-sync');    // przetwarzanie plików
var gulp_plumber     = require('gulp-plumber');    // de bug
var gulp_uglify      = require('gulp-uglify');     // min files
var gulp_rename      = require('gulp-rename');     // add min at end
var gulp_concat      = require('gulp-concat');     // lonczenie plików
var gulp_sass        = require('gulp-sass');       // Sass
var gulp_cssmin      = require('gulp-cssmin');     // css-min
var gulp_typescript  = require('gulp-typescript'); // typescript


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

gulp.task('Test', function(){
  console.log('Gulp Works');
});

gulp.task('default', ['watch_typescript']);
