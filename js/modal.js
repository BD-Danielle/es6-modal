/*
 * ========================================================================
 * Modal 1.0
 * A modal is a dialog box/popup window that is displayed on top of the current page.
 * YILING CHEN.
 * Copyright 2022, MIT License.
 * How to use it:
 * // <outside-element data-modal-box>
 * //   <inside-element data-modal-content></inside-element>
 * // </outside-element>
 * 
 * -----------------------------------or-----------------------------------
 * In JavaScript, using the addEventListener() method:
 * selector.addEventListener('click', function(){ 
 *    new Modal(id); 
 * });
 * -----------------------------------or-----------------------------------
 * In JavaScript:
 * selector.onclick = function() {
 *  new Modal(id);
 * }
 * -----------------------------------or-----------------------------------
 * In HTML; Inline JavaScript onclick function:
 * <element onclick="yourFnName()">
 * <element onclick="(function(){ return new Modal(id, true)})(); return false;">
 * <script>
 * function yourFnName() {
 *    return new Modal(id)
 * }
 * </script>
 * ========================================================================
 */

// Defined "self"
var self;
// Create a ES6 Class
class Modal {
  // constructor
  constructor(box, onoff = false) {
    self = this;
    this.box = box;
    this.onoff = onoff;
    this.onInit();
  }
  get selector() {
    return document.querySelector(this.box);
  }
  set selector(value) {
    this.selector.style.display = value;
  }
  get styles() {
    return {
      display: "block", //  Hidden by default
      position: "fixed", //  Stay in place
      zIndex: 1, //  Sit on top
      left: 0,
      top: 0,
      width: "100%", //  Full width
      height: "100%", //  Full height
      overflow: "auto", //  Enable scroll if needed
      backgroundColor: "rgb(0,0,0)", //  Fallback color
      backgroundColor: "rgba(0,0,0,0.7)" // Black w/ opacity
    }
  }

  // set styles() {

  // }
  stylize() {
    if (this.onoff) return;
    for (var key in this.styles) {
      this.selector.style[key] = this.styles[key];
    }
  }
  onclick() {
    console.log(this);

    this.selector.addEventListener("click", function (event) {
      console.log(self.onoff);
      console.log(self.selector);
      if (self.onoff) {
        event.stopImmediatePropagation();
        self.onoff = !self.onoff;
        console.log(self.selector)
        return;
      };
      event.stopImmediatePropagation();
      self.selector.style.display = self.onoff ? "block" : "none";
    }, false)
  }
  onInit() {
    this.stylize();
    this.onclick();
  }
}