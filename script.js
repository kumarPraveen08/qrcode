let form = document.getElementById("form");
let input = document.getElementById("input");
let guide = document.querySelector("p");
let size = 360;
let bgColor = "#ffffff";
let lineColor = "#000000";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  inputText = input.value;

  document.querySelector("#qrcode").innerHTML = "";

  if (inputText) {
    var qrcode = new QRCode("qrcode", {
      text: inputText,
      width: size,
      height: size,
      colorDark: lineColor,
      colorLight: bgColor,
      correctLevel: QRCode.CorrectLevel.H,
    });
  }

  input.value = "";
  guide.classList.remove("disable");
});

function generateQR() {
  document.querySelector("#qrcode").innerHTML = "";

  let inputText = input.value;

  if (inputText) {
    var qrcode = new QRCode("qrcode", {
      text: inputText,
      width: size,
      height: size,
      colorDark: lineColor,
      colorLight: bgColor,
      correctLevel: QRCode.CorrectLevel.H,
    });
  }

  input.value = "";
  guide.classList.remove("disable");
}
