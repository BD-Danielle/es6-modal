
# Modal 1.1.3

## Overview
`Modal` is a lightweight JavaScript class for creating modal dialog boxes/popup windows that overlay on top of the current page. It's designed for flexibility and ease of use, making it suitable for a wide range of applications.

### Author
YILING CHEN

### License
MIT License, 2022.

## Installation

To use the `Modal` class, simply include the JavaScript file in your project.

```html
<script src="est.modal.bundle.1.1.3.js"></script>
```

## Usage

To create a modal, instantiate the `Modal` class with an event. The modal behavior is managed automatically.

```javascript
window.addEventListener("DOMContentLoaded", function(){
  let targets = document.querySelectorAll("[data-modal]");
  let modal;
  targets.forEach(c=>{
    c.addEventListener("click", function(event){
      modal = new Modal(event);
      // it's allowed to custom css style
      modal.styles = {
        zIndex: 1000,
        backgroundColor: "rgba(0,0,0,0.1)",
      }
    }, false)
  });
})
```

### Features

- **Responsive:** Works on both desktop and mobile browsers.
- **Customizable:** Easily apply your own styles.
- **Simple API:** Easy to understand and integrate into existing projects.

## API Reference

### Constructor: `Modal(event)`

- `event`: The event that triggers the modal.

### Properties

- `modalElement`: The element targeted by the modal.
- `isModalSelfClicked`: Checks if the modal itself was clicked.
- `targetElement`: The modal DOM element.
- `action`: Data attribute for modal action.
- `isMobile`: Detects if the user is on a mobile device.

### Methods

- `showModal()`: Displays the modal.
- `hideModal()`: Hides the modal.
- `handleModalDisplay()`: Handles the display state of the modal based on user interaction.
- `applyStyles(element, styles)`: Applies custom styles to elements.

## Example

Include a simple implementation example here to help users get started.

```html
<!-- Your example HTML goes here -->
  <div class="btn" data-modal="modal-box" data-bool="false" onclick="(()=>{console.log(this)})();">點我出現屏障</div>
  <div id="modal-box" style="display: block;" data-modal="modal-box" data-bool="true">
    <div id="modal-content" data-modal="modal-content" data-bool="true">
      <div><button type="button" data-modal="modal-box" data-bool="null">Cancel</button></div>
    </div>
  </div>
```

```javascript
// Your example JavaScript goes here
```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](link-to-your-issues).
