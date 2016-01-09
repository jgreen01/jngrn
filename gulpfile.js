/** gulp build tools **/
var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		sass = require('gulp-sass'),
		plumber = require('gulp-plumber'),
		imagemin = require('gulp-imagemin'),
		prefix = require('gulp-autoprefixer'),
		minifyCss = require('gulp-minify-css'),
		connect = require('gulp-connect'),
		jshint = require('gulp-jshint'),
		stylish = require('jshint-stylish'),
		htmlmin = require('gulp-htmlmin'),
		jade = require('gulp-jade');

/** Source location **/
var src_location = 'source/';
var bower_src = 'bower_components/'
var styles_src = src_location + 'sass/**/*.s[ac]ss';
var jscripts_src = src_location + 'javascript/**/*.js';
var images_src = src_location + 'images/**/*';
var templates_src = src_location + '*.jade';

/** Destination location **/
var dest_location = 'www/';
var styles_dest = dest_location + 'css';
var jscripts_dest = dest_location + 'js';
var images_dest = dest_location + 'img';
var templates_dest = dest_location;

/***  Build Tasks  ***/

gulp.task('build', ['scripts','styles','templates','images']);
gulp.task('default', ['build','watch','connect']);

gulp.task('scripts', function() {
	return gulp.src(jscripts_src)
			.pipe(plumber())
			.pipe(jshint())
			.pipe(jshint.reporter())
			.pipe(uglify())
			.pipe(gulp.dest(jscripts_dest))
			.pipe(connect.reload());
});

gulp.task('styles', function() {
	return gulp.src(styles_src)
			.pipe(plumber())
			.pipe(sass())
			.pipe(prefix('last 2 versions'))
			.pipe(minifyCss())
			.pipe(gulp.dest(styles_dest))
			.pipe(connect.reload());
});

gulp.task('templates', function() {
	return gulp.src(templates_src)
			.pipe(plumber())
			.pipe(jade({
				locals: {}
			}))
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest(templates_dest))
			.pipe(connect.reload());
});

gulp.task('images', function() {
	return gulp.src(images_src)
			.pipe(imagemin())
			.pipe(gulp.dest(images_dest))
			.pipe(connect.reload());
});

/** Watch task */
gulp.task('watch', function() {
  gulp.watch(styles_src, ['styles']);
  gulp.watch(jscripts_src, ['scripts']);
	gulp.watch(templates_src, ['templates']);
	gulp.watch(images_src, ['images']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'www',
    livereload: true
  });
});

/***  Setup Tasks  ***/

/*
gulp.task('setup:styles', function() {
  copy('node_modules/flexboxgrid-sass/source/sass/', 'src/sass/flexboxgrid/', function(err) {
    if (err) console.error('Copy failed: ' + err);
    else console.info('Flexboxgrid is ready');
  });

  copy('node_modules/materialize-css/sass/', 'src/sass/materialize/', function(err) {
    if (err) console.error('Copy failed: ' + err);
    else console.info('Materialize is ready');
  });
});
*/
