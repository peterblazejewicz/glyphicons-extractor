'use strict';
//
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var wiredep = require('wiredep');
//
var processSelector = function(selector) {
  console.log(selector);
}
//
var bootstrap = function(css, options) {
  css.eachRule(function(rule) {
    if(rule.selector.match(/^\.glyphicon([a-zA-Z-])+:before/)){
      rule.selectors.forEach(processSelector);
    }
  });
};
//
var fontAwesome = function(css, options) {
  css.eachRule(function(rule) {
    if(rule.selector.match(/^\.([a-z\-0-9])+:before/)) {
      rule.selectors.forEach(processSelector);
    }
  });
};
var foundation = function(css, options) {
  css.eachRule(function(rule) {
    rule.selectors.forEach(processSelector);
  });
};
var icomoon = function(css, options) {
  css.eachRule(function(rule) {
    rule.selectors.forEach(processSelector);
  });
}
var ionicons = function(css, options) {
  css.eachRule(function(rule) {
    rule.selectors.forEach(processSelector);
  });
};
var octicons = function(css, options) {
  css.eachRule(function(rule) {
    rule.selectors.forEach(processSelector);
  });
};
//
gulp.task('bootstrap', function() {
  var paths = wiredep().css.filter(function(path) {
    return path.match(/bootstrap\.css/);
  });
  return gulp.src(paths)
    .pipe(postcss([bootstrap]));
});
//
gulp.task('font-awesome', function() {
  var paths = wiredep().css.filter(function(path) {
    return path.match(/font-awesome\.css/);
  });
  return gulp.src(paths)
    .pipe(postcss([fontAwesome]));
});
//
gulp.task('foundation', function() {
  var paths = wiredep().css.filter(function(path) {
    return path.match(/foundation-icons\.css/);
  });
  return gulp.src(paths)
    .pipe(postcss([foundation]));
});
//
gulp.task('icomoon', function() {
  var path = wiredep().css.filter(function(path) {
    return path.match(/style\.css/);
  })
  return gulp.src(path)
    .pipe(postcss([icomoon]));
});
//
gulp.task('ionicons', function() {
  var path = wiredep().css.filter(function(path) {
    return path.match(/ionicons\.css/);
  });
  return gulp.src(path)
    .pipe(postcss([ionicons]));
});
//
gulp.task('octicons', function() {
  var path = wiredep().css.filter(function(path) {
    return path.match(/octicons\.css/);
  });
  return gulp.src(path)
    .pipe(postcss([octicons]));
});
