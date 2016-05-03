

module.exports = function(el, attrs) {
  for(var key in attrs) {
    var value = attrs[key];
    if(typeof value === 'function') value = value(el);
    el.setAttribute(key, value);
  }
};
