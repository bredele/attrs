/**
 * Module dependencies.
 */

var styles = require('stylon');

module.exports = function(el, attrs) {
  for(var key in attrs) {
    var value = attrs[key];
    if(typeof value === 'function') value = value(el);
    if(value instanceof Array) value = value.join(' ');
    if(typeof value === 'object') value = styles(value);
    el.setAttribute(key, value);
  }
};
