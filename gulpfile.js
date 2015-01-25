'use strict';
//
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var wiredep = require('wiredep');
//
var processSelector = function(selector) {
  console.log(selector);
}

var foundation = function(css, options) {
  css.eachRule(function(rule) {
    if(rule.selector.match(/^\.([a-z\-0-9])+:before/)) {
      rule.selectors.forEach(processSelector);
    }
  });
};
//
var bootstrap = function(css, options) {
  css.eachRule(function(rule) {
    if(rule.selector.match(/^\.glyphicon([a-zA-Z-])+:before/)){
      rule.selectors.forEach(processSelector);
    }
  });
};
//
gulp.task('foundation', function() {
  var processors = [
  foundation
  ];
  var paths = wiredep().css.filter(function(path) {
    return path.match(/font-awesome\.css/);
  });
  return gulp.src(paths)
  .pipe(postcss(processors));
});
gulp.task('bootstrap', function() {
  var processors = [
  bootstrap
  ];
  var paths = wiredep().css.filter(function(path) {
    return path.match(/bootstrap\.css/);
  });
  return gulp.src(paths)
  .pipe(postcss(processors));
});
