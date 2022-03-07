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
    this.styles_;
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
  stylize() {
    if (this.callback) return;
    if (this.onoff && typeof (this.onoff) == "boolean") return;
    for (var key in this.styles) {
      this.selector.style[key] = this.styles[key];
    }
  }
  onclick() {
    if (self_modal.callback) self_modal.callback();
    if (!this.selector) return;
    this.selector.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      if (typeof (self_modal.onoff) !== "boolean") return;
      if (self_modal.onoff) {
        console.log("74 self_modal.selector: ", self_modal.selector);
        console.log("75 event.target: ", event.target);
        event.target.parentNode.style.display = self_modal.onoff ? "block" : "none";
        self_modal.onoff = !self_modal.onoff;
        return;
      }
      if (self_modal.selector == event.target && self_modal.onoff) {
        event.target.style.display = "none";
        return;
      }
      console.log("82: ", self_modal.onoff);
      event.target.style.display = self_modal.onoff ? "block" : "none";
    }, false)
  }
  onInit() {
    this.stylize();
    this.onclick();
  }
}