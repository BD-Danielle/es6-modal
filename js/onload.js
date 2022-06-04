/**
  Taken from: http://stackoverflow.com/questions/588040/window-onload-vs-document-onload
  According to Parsing HTML documents - The end,
  The browser parses the HTML source and runs deferred scripts.
  A DOMContentLoaded is dispatched at the document when all the HTML has been parsed and have run. The event bubbles to the window.
  The browser loads resources (like images) that delay the load event.
  A load event is dispatched at the window.
  Therefore, the order of execution will be
  DOMContentLoaded event listeners of window in the capture phase
  DOMContentLoaded event listeners of document
  DOMContentLoaded event listeners of window in the bubble phase
  load event listeners (including onload event handler) of window
  A load event listener (including onload event handler) in document should never be invoked.
*/

window.addEventListener('DOMContentLoaded', function() {
  console.log('window - DOMContentLoaded - capture'); // 1st
}, true);

document.addEventListener('DOMContentLoaded', function() {
  console.log('document - DOMContentLoaded - capture'); // 2nd
}, true);

document.addEventListener('DOMContentLoaded', function() {
  console.log('document - DOMContentLoaded - bubble'); // 2nd
});

window.addEventListener('DOMContentLoaded', function() {
  console.log('window - DOMContentLoaded - bubble'); // 3rd
});

window.addEventListener('load', function() {
  console.log('window - load - capture'); // 4th
}, true);

document.addEventListener('load', function() {
  console.log('document - load - capture'); // DOES NOT HAPPEN
}, true);

document.addEventListener('load', function() {
  console.log('document - load - bubble'); // DOES NOT HAPPEN
});

window.addEventListener('load', function() {
  console.log('window - load - bubble'); // 4th
});

window.onload = function() {
  console.log('window - onload'); // 4th
};

document.onload = function() {
  console.log('document - onload'); // DOES NOT HAPPEN
};