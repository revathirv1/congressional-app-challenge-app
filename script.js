function generateQR() {
  const text = document.getElementById("text").value;

  if (!text) {
    alert("Please enter text or URL or both");
    return;
  }

  document.getElementById("qrcode").innerHTML = "";
  
  new QRCode(document.getElementById("qrcode"), {
    text: text,
    width: 200,
    height: 200
  });
}
