/*
 * ========================================================================
 * Modal 1.0
 * A modal is a dialog box/popup window that is displayed on top of the current page.
 * YILING CHEN.
 * Copyright 2022, MIT License.
 * How to use it:
 * see README.md
 * ========================================================================
 */

// Defined "self_modal" in Global
let self_modal;
// Create a ES6 Class
class Modal {
  // constructor
  constructor(box, onoff = false, callback) {
    self_modal = this;
    this.box = box;
    this.onoff = onoff;
    this.callback = callback;
    this.onInit();
  }
  get selector() {
    return document.querySelector(this.box);
  }
  set selector(value) {
    if (value) {
      for (var key in value) {
        this.selector.style[key] = value[key];
      }
    }
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
  set styles(value) {
    if (value && !this.onoff && this.selector) {
      for (var key in value) {
        this.selector.style[key] = value[key];
      }
    }
  }
  getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }
  stylize() {
    if (this.onoff && this.getType(this.onoff) == "boolean") return;
    if (this.selector) {
      for (var key in this.styles) {
        this.selector.style[key] = this.styles[key];
      }
    }
  }
  onclick() {
    if (!this.selector && this.getType(this.callback) == "string") {
      document.querySelector(this.callback).style.display = "none";
      return;
    }
    if (this.getType(this.callback) == "function") this.callback();
    this.selector.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      if (self_modal.getType(self_modal.callback) == "function") self_modal.callback();
      if (self_modal.getType(self_modal.onoff) !== "boolean") return;
      if (self_modal.onoff) return;
      if (self_modal.selector == event.target) self_modal.selector.style.display = "none";
    }, false)
  }
  onInit() {
    this.onclick();
    this.stylize();
  }
}
window.addEventListener("DOMContentLoaded", function(){
  window.modalTrigger = function(id, bool, callback){
    fn = new Modal(id, bool, callback);
    return fn;
  }
})