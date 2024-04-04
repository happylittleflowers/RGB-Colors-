// RGB Colors
// Event Listeners 
document.getElementById("preview-btn").addEventListener("click", rgbPreview);
// Variables to store HTML Elements
let previewBtnEl = document.getElementById("preview-btn");
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
let Black = document.getElementById("blackIn")
let White = document.getElementById("whiteIn")

// Event Listener
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);
change.addEventListener("input", widthIn);
change.addEventListener("input", heightIn);


// Event Function
function rgbPreview() {
  // Input : get red green blue values
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;
  // Validate Colours
  // Check rValue
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }
  // Check gValue
  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }


  // Check bValue
  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }


  // Process: build rgb string rgb (__, __, ___,)
  let rgbstring = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";


  // Output: display rgb string and update the color preview
  rgbStringOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}


