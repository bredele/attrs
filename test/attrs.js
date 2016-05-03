/**
 * Test depenencies.
 */

var tape = require('tape');
var attrs = require('..');

tape('create attributes', function(assert) {
  assert.plan(1);
  var btn = document.createElement('button');
  attrs(btn, {
    id: 'element',
    class: 'btn'
  });
  assert.equal(btn.outerHTML, '<button id="element" class="btn"></button>')
});
