/**
 * Test depenencies.
 */

var tape = require('tape');
var attrs = require('..');

tape('set attributes', function(assert) {
  assert.plan(1);
  var btn = document.createElement('button');
  attrs(btn, {
    id: 'element',
    class: 'btn'
  });
  assert.equal(btn.outerHTML, '<button id="element" class="btn"></button>');
});

tape('set function as attribute', function(assert) {
  assert.plan(1);
  var btn = document.createElement('button');
  var bool = false;
  attrs(btn, {
    class: function() {
      return bool ? 'hello' : 'world';
    }
  });
  assert.equal(btn.outerHTML, '<button class="world"></button>');  
});
