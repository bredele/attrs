# attrs

Object as DOM attributes.

## usage

```js
var attrs = require('attrs');
var bool = true;
var input = document.createElement('input');

attrs(input, {
  id: 'input',
  checked: true,
  class: ['hello', 'world'],
  style : {
    top: 100 + 'px',
    bottom: 200 + 'px'
  },
  type: function() {
    return bool ? 'radio' : 'checkbox';
  }
})
```
