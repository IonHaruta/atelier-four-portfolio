const PSD = require("psd");
const path = require("path");

const psdPath = path.join(__dirname, "../src/assets/ATELIER FOUR LOGO WHITE.psd");
const outputPath = path.join(__dirname, "../src/assets/logo.png");

PSD.open(psdPath)
  .then((psd) => psd.image.saveAsPng(outputPath))
  .then(() => console.log("Logo converted to PNG:", outputPath))
  .catch((err) => {
    console.error("Conversion failed:", err);
    process.exit(1);
  });
