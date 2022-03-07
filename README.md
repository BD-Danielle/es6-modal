 #  js-modal
 ###  LAYOUT
 ```html
  <outside-element data-modal-box>
    <inside-element-optional data-modal-content></inside-element-optional>
  </outside-element>
 ```
  ### USAGE
 * In JavaScript, using the addEventListener() method:
 ```javascript
  selector.addEventListener('click', function(){ 
    new Modal(id); 
  });
 ```
 * In JavaScript:
 ```javascript
  selector.onclick = function() {
    new Modal(id);
  }
 ```
 * In HTML; Inline JavaScript onclick function:
 ```html
  <element onclick="(function(){ return new Modal(id, boolean)})(); return false;">
  </element>
 ```
 * In HTML and JavaScript:
```javascript
  var id, bool(optional, default type is boolean), callback(optional, default type is function)

  function yourFnName(id, bool, callback) {
     return new Modal(id, bool, callback)
  }
```
```html
<element onclick="yourFnName(id, bool, callback);"></element>
```
### LOGIC
1. args[0] as target.
2. args[1] is boolean that leads to display(true, null) block, none(false or blank) (optional).
3. args[2] is for extra work (optional).