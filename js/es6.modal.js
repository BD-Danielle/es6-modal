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
  // Static variables
  // constructor
  constructor(event) {
    self_modal = this;
    this.event = event;
    this.onInit();
  }
  get modal(){
    return this.event.srcElement.dataset.modal;
  }
  get boolStr(){
    return this.event.srcElement.dataset.bool;
  }
  get id(){
    return this.event.srcElement.id;
  }
  get target() {
    return document.querySelector(`#${this.modal}`);
  }
  get selfClicked(){
    return this.id == this.modal;
  }
  get styles() {
    return {
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
    if (value && this.target) {
      for (var key in value) {
        this.target.style[key] = value[key];
      }
    }
  }
  stylize() {
    if (this.target && this.boolStr=="false") {
      for (var key in this.styles) {
        this.target.style[key] = this.styles[key];
      }
    }
  }
  onclick() {
    this.event.stopImmediatePropagation();
    if(this.selfClicked && this.boolStr == "true") return; 
    if(this.selfClicked && this.boolStr == "false") {
      this.target.style.setProperty("display", "none", "important");
      document.body.style.overflow="auto";
      document.body.style.touchAction = "auto";
      document.body.style.position = "unset";

    }
    if(!this.selfClicked) {
      if(this.boolStr == "false") {
        this.target.style.setProperty("display", "block", "important");
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";
        document.body.style.position = "fixed";
      }
      if(this.boolStr == "null") {
        this.target.style.setProperty("display", "none", "important");
        document.body.style.overflow="auto";
        document.body.style.touchAction = "auto";
        document.body.style.position = "unset";
      }
    };
  }
  onInit() {
    this.onclick();
    this.stylize();
  }
}