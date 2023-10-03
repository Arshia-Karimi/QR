const generateBtn = document.querySelector("form button");
const qrCodeBox = document.querySelector(".qr-code");
const qrInput = document.querySelector("form input");
const qrImge = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let qrValue = qrInput.value;
  if (!qrValue) {
    return alert("لطفا یک ادرس یا یک متن را وارد کنید.");
  } else {
    qrCodeBox.classList.remove("hidden");
    qrImge.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  }
});
