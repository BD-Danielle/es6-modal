 #  js-modal
 ###  LAYOUT
 ```html
  <btn-element data-modal="modal-box" data-bool="false"></btn-element>
  <outside-element id="modal-box" data-modal="modal-box" data-bool="true" style="display: none;">
    <inside-element-optional id="modal-content" data-modal="modal-content" data-bool="true">
      <btn-close data-modal="modal-box" data-bool="null"></btn-close>
    </inside-element-optional>
  </outside-element>
 ```
  ### USAGE
 * In JavaScript, using the addEventListener() method:
 ```javascript
  selector.addEventListener('click', function(event){ 
    new Modal(event); 
  });
 ```
### LOGIC
1. args[0] as event
2. data-modal as target
3. data-bool is decided that target is display block or none