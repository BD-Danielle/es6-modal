(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,o(i.key),i)}}function o(e){var o=function(e,o){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(o)?o:String(o)}var n,i,r,l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.event=e,this.initModal()}var o,n;return o=t,(n=[{key:"modalElement",get:function(){return this.event.target.dataset.modal}},{key:"isModalSelfClicked",get:function(){return this.event.target.id===this.event.target.dataset.modal}},{key:"targetElement",get:function(){return document.querySelector("#".concat(this.modalElement))}},{key:"action",get:function(){return this.event.target.dataset.bool}},{key:"isMobile",get:function(){return/Mobi/i.test(window.navigator.userAgent)}},{key:"applyStyles",value:function(t,e){Object.keys(e).forEach((function(o){t.style[o]=e[o]}))}},{key:"showModal",value:function(){this.applyStyles(this.targetElement,{position:"fixed",zIndex:99,left:0,top:0,width:"100%",height:"100%",overflow:"auto",backgroundColor:"rgba(0,0,0,0.5)",display:"block"}),document.body.style.overflow="hidden",document.body.style.touchAction="none",this.isMobile&&(document.body.style.height="".concat(window.innerHeight,"px"))}},{key:"hideModal",value:function(){this.targetElement&&(this.targetElement.style.display="none"),document.body.style.overflow="auto",document.body.style.touchAction="auto",this.isMobile&&(document.body.style.height="auto")}},{key:"handleModalDisplay",value:function(){this.isModalSelfClicked?this.hideModal():this.showModal(),"true"===this.action?this.showModal():"null"===this.action&&this.hideModal()}},{key:"initModal",value:function(){this.event.stopImmediatePropagation(),this.event.preventDefault(),this.handleModalDisplay()}}])&&e(o.prototype,n),Object.defineProperty(o,"prototype",{writable:!1}),t}();n=l,r="1.1.3",(i=o(i="version"))in n?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,window.Modal=l})();