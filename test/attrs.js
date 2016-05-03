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

tape('set object as style attribute', function(assert) {
  assert.plan(1);
  var btn = document.createElement('button');
  attrs(btn, {
    style: {
      top: 100 + 'px',
      bottom: 200 + 'px'
    }
  });
  assert.equal(btn.outerHTML, '<button style="top:100px;bottom:200px;"></button>');
});

tape('set array as attribute', function(assert) {
  assert.plan(1);
  var btn = document.createElement('button');
  attrs(btn, {
    class: ['hello', 'world']
  });
  assert.equal(btn.outerHTML, '<button class="hello world"></button>');
});
