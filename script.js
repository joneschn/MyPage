function generateKey() {
  const serial = document.getElementById("serial").value.trim();

  if (!serial) {
    alert("Please enter a PLC serial number");
    return;
  }

  let b = 0;

  for (let i = 0; i < serial.length; i++) {
    b += serial.charCodeAt(i); // same as Convert.ToInt32(char)
  }

  b = (b + 73 + 71 + 80) * 411005;

  document.getElementById("result").textContent = b.toString();

  // Copy to clipboard (modern browsers)
  navigator.clipboard.writeText(b.toString())
    .then(() => alert("Text copied to the Clipboard"))
    .catch(() => alert("Clipboard copy failed"));
}
