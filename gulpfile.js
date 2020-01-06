var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("scss", function() {
  return gulp
    .src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"));
});

// gulp.task("watch", function() {
//   gulp.watch("app/scss/*.scss", ["scss"]);
// });

// var gulp = require("gulp");
// var browserSync = require("browser-sync").create();
// var sass = require("gulp-sass");

// // Compile sass into CSS & auto-inject into browsers
// gulp.task("sass", function() {
//   return gulp
//     .src(["node_modules/bootstrap/scss/bootstrap.scss", "app/scss/*.scss"])
//     .pipe(sass())
//     .pipe(gulp.dest("app/css"))
//     .pipe(browserSync.stream());
// });

// // Move the javascript files into our /src/js folder
// gulp.task("js", function() {
//   return gulp
//     .src([
//       "node_modules/bootstrap/dist/js/bootstrap.min.js",
//       "node_modules/jquery/dist/jquery.min.js",
//       "node_modules/popper.js/dist/umd/popper.min.js"
//     ])
//     .pipe(gulp.dest("app/js"))
//     .pipe(browserSync.stream());
// });

// // Static Server + watching scss/html files
// gulp.task("serve", ["sass"], function() {
//   browserSync.init({
//     server: "./app"
//   });

//   gulp.watch(
//     ["node_modules/bootstrap/scss/bootstrap.scss", "app/scss/*.scss"],
//     ["sass"]
//   );
//   gulp.watch("app/*.html").on("change", browserSync.reload);
// });

// gulp.task("default", ["js", "serve"]);
