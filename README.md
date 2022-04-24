 #  js-modal
 ###  LAYOUT
 ```html
  <btn-element onclick="modalTrigger('#modal-box', false);"></btn-element>
  <outside-element id="modal-box" style="display: none;">
    <inside-element-optional onclick="modalTrigger('#modal-content', true);">
      <btn-close onclick="modalTrigger(null, false, '#modal-box')"></btn-close>
    </inside-element-optional>
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
  function yourFnName(id, bool, callback) {
     return new Modal(id, bool, callback)
  }
```
```html
<element onclick="yourFnName(id, bool, callback);"></element>
```
### LOGIC
1. args[0] as target.
2. args[1] is type boolean that is keeping display block (true, null) and vice versa (false or blank) (optional).
3. args[2] is for extra work (optional).