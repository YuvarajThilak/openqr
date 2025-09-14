let qr;

function generateQRCode() {
  const qrContainer = document.getElementById("qr-code");
  const input = document.getElementById("qr-input").value.trim();
  const downloadLink = document.getElementById("download-link");

  // Clear previous QR code
  qrContainer.innerHTML = "";
  downloadLink.style.display = "none";

  if (input === "") {
    alert("Please enter some text or URL");
    return;
  }

  // Generate new QR Code
  qr = new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200,
  });

  // Wait for QR code to be created and extract image
  setTimeout(() => {
    const img = qrContainer.querySelector("img");
    if (img) {
      downloadLink.href = img.src;
      downloadLink.style.display = "inline-block";
    }
  }, 500);
}
