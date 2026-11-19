// Step 1: Get all the elements from the HTML
var textInput = document.getElementById("textInput");
var sizeSelect = document.getElementById("sizeSelect");
var colorInput = document.getElementById("colorInput");
var generateBtn = document.getElementById("generateBtn");
var downloadBtn = document.getElementById("downloadBtn");
var clearBtn = document.getElementById("clearBtn");
var qrcodeDiv = document.getElementById("qrcode");
var actionButtons = document.getElementById("actionButtons");
var message = document.getElementById("message");


// Step 2: Function to generate the QR code
function generateQR() {
  var text = textInput.value.trim();   // trim() removes extra spaces

  // Check if the input is empty
  if (text === "") {
    message.textContent = "Please enter some text or URL!";
    return;
  }

  message.textContent = "";      // clear old message
  qrcodeDiv.innerHTML = "";      // remove old QR code

  var size = parseInt(sizeSelect.value);   // convert "250" to number 250

  // Create the QR code using the library
  new QRCode(qrcodeDiv, {
    text: text,
    width: size,
    height: size,
    colorDark: colorInput.value,
    colorLight: "#ffffff"
  });

  // Show the Download and Clear buttons
  actionButtons.classList.remove("hidden");
}


// Step 3: Function to download the QR code as PNG
function downloadQR() {
  var canvas = qrcodeDiv.querySelector("canvas");   // library draws QR on a canvas

  var link = document.createElement("a");           // create a temporary link
  link.href = canvas.toDataURL("image/png");        // canvas -> image data
  link.download = "qrcode.png";                     // file name
  link.click();                                     // click it to download
}


// Step 4: Function to clear everything
function clearAll() {
  textInput.value = "";
  qrcodeDiv.innerHTML = "";
  message.textContent = "";
  actionButtons.classList.add("hidden");
}


// Step 5: Connect buttons to functions
generateBtn.addEventListener("click", generateQR);
downloadBtn.addEventListener("click", downloadQR);
clearBtn.addEventListener("click", clearAll);
