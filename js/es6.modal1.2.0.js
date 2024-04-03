/**
 * Modal 1.2.0
 * A modal is a dialog box/popup window that is displayed on top of the current page.
 * YILING CHEN.
 * Copyright 2022, MIT License.
 * How to use it:
 * see README.md
 */

class Modal {
  static version = "1.2.0";
  constructor(event, customStyles = {}) {
    this.event = event;
    // 确保 modalElementId 存在
    if (!this.modalElementId) {
      // console.error("Modal element is undefined, event:", event);
      return; // 早期返回，避免进一步执行
    }
    this.customStyles = customStyles;
    this.initModal();
  }
  get modalElementId() {
    return this.event.target.dataset.modal;
  }

  get isModalSelfClicked() {
    return this.event.target.id === this.event.target.dataset.modal;
  }

  get targetElement() {
    return document.querySelector(`#${this.modalElementId}`);
  }
  get action() {
    return this.event.target.dataset.action;
  }

  get isMobile() {
    return window.navigator.userAgent.includes('Mobi');
  }

  applyStyles(element) {
    const styles = { ...this.defaultStyles(), ...this.customStyles};
    Object.entries(styles).forEach(([key, value]) => {
      element.style[key] = value;
    });
  }
  defaultStyles() {
    return {
      position: "fixed",
      zIndex: "99",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      overflow: "auto",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "block"
    };
  }
  showModal() {
    this.applyStyles(this.targetElement);
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    if (this.isMobile) {
      document.body.style.height = `${window.innerHeight}px`;
    }
  }

  hideModal() {
    if (this.targetElement) {
      this.targetElement.style.display = "none";
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
      if (this.isMobile) {
        document.body.style.height = "auto";
      }
    }
  }

  handleModalDisplay() {
    const isCurrentlyShown = this.targetElement.style.display !== "none";
  
    if (this.action === "trigger") {
      // 如果当前已显示，则隐藏；如果已隐藏，则显示
      if (isCurrentlyShown) {
        this.hideModal();
      } else {
        this.showModal();
      }
    } else if (this.action === "show") {
      this.showModal();
    } else if (this.action === "hide") {
      this.hideModal();
    }
  }

  initModal() {
    // this.event.stopImmediatePropagation();
    this.event.preventDefault();
    // 默认隐藏模态窗口，除非明确指定要显示
    if (!this.targetElement) {
      // console.error("Target element does not exist for modal:", this.modalElementId);
      return; // Prevent further execution
    }
    this.handleModalDisplay();
  }
}

// Attach Modal to the window object if needed
window.Modal = Modal;