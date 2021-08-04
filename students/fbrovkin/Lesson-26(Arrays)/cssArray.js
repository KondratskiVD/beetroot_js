const arr = [
  { color: "purple" },
  { "font-size": "24px" },
  { "text-align": "center" },
  { "text-decoration": "underline dotted" },
  { border: "5px red solid" },
  { display: "inline" },
];

function styleText(stylesArr, text) {
  let strStyle = "";
  for (obj of stylesArr) {
    for ([key, value] of Object.entries(obj)) {
      strStyle += `${key}:${value};`;
    }
  }
  document.write(`<p style="${strStyle}">${text}</p>`);
}

styleText(arr, "Quick brown fox jumps over the lazy dog");
