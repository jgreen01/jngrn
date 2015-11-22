/** gulp build tools **/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var copy = require('copy');
var mkdirp = require('mkdirp');

/** Source location **/
var src_location = 'src/';
var node_modules = 'node_modules/'
var styles_src = src_location + 'sass/**/*.s[ac]ss';
var jscripts_src = src_location + 'js/**/*.js';
var images_src = src_location + 'img/**/*';

/** Destination location **/
var dest_location = 'public/';
var styles_dest = dest_location + 'stylesheets';
var jscripts_dest = dest_location + 'javascripts';
var images_dest = dest_location + 'images';

/***  Build Tasks  ***/

gulp.task('default', ['scripts','styles','images']);

/** Scripts task - All things done to the JavaScript files
 *    - Uglifies
 */
gulp.task('scripts', function() {
  gulp.src(jscripts_src)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(jscripts_dest));
});

/** Styles task - All things done to the style files
 */
gulp.task('styles', function() {
  gulp.src(styles_src)
    .pipe(plumber())
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minifyCss())
    .pipe(gulp.dest(styles_dest));
});

/** Images task - All things done to the style files
 */
gulp.task('images', function() {
  gulp.src(images_src)
    .pipe(imagemin())
    .pipe(gulp.dest(images_dest));
});

/***  Watch Tasks  ***/

/** Watch scripts task
 *    - watches js
 */
gulp.task('watch:scripts', function() {
  gulp.watch(jscript_location, ['scripts']);
});

/** Watch styles task
 *    - watches styl
 */
gulp.task('watch:styles', function() {
  gulp.watch(styles_src, ['styles']);
});

/** Watch all task
 *    watches js and styl
 */
gulp.task('watch:all', function() {
  gulp.watch(styles_src, ['styles']);
  gulp.watch(jscripts_src, ['scripts']);
});

/***  Setup Tasks  ***/

gulp.task('setup:styles', function() {
  mkdirp('src/sass/flexboxgrid/', function (err) {
    if (err) console.error(err);
  });
  copy('node_modules/flexboxgrid-sass/source/sass/*', 'src/sass/flexboxgrid/');
});
