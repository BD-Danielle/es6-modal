/**
 * Modal 1.1.2
 * A modal is a dialog box/popup window that is displayed on top of the current page.
 * YILING CHEN.
 * Copyright 2022, MIT License.
 * How to use it:
 * see README.md
 */

class Modal {
  constructor(event) {
    this.event = event;
    this.initModal();
  }

  get modalElement() {
    return this.event.target.dataset.modal;
  }

  get isModalSelfClicked() {
    return this.event.target.id === this.event.target.dataset.modal;
  }
  get targetElement() {
    return document.querySelector(`#${this.modalElement}`);
  }
  get action() {
    return this.event.target.dataset.bool;
  }

  get isMobile() {
    return /Mobi/i.test(window.navigator.userAgent);
  }

  applyStyles(element, styles) {
    Object.keys(styles).forEach(key => {
      element.style[key] = styles[key];
    });
  }

  showModal() {
    const modalStyles = {
      position: "fixed",
      zIndex: 99,
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      overflow: "auto",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "block"
    };
    this.applyStyles(this.targetElement, modalStyles);
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    if (this.isMobile) {
      document.body.style.height = `${window.innerHeight}px`;
    }
  }

  hideModal() {
    if (this.targetElement) {
      this.targetElement.style.display = "none";
    }
    document.body.style.overflow = "auto";
    document.body.style.touchAction = "auto";
    if (this.isMobile) {
      document.body.style.height = "auto";
    }
  }

  handleModalDisplay() {
    if (this.isModalSelfClicked) {
      this.hideModal();
    } else {
      this.showModal();
    }
    if (this.action === "true") {
      this.showModal();
    } else if (this.action === "null") {
      this.hideModal();
    }
  }

  initModal() {
    this.event.stopImmediatePropagation();
    this.event.preventDefault()
    this.handleModalDisplay();
  }
}

// Attach Modal to the window object if needed
window.Modal = Modal;