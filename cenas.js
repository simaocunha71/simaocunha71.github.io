const fs = require('fs');

const convertImageToBase64 = (filePath) => {
    const file = fs.readFileSync(filePath);
    return `data:image/svg+xml;base64,${file.toString('base64')}`;
};

const ptFlagBase64 = convertImageToBase64('src/assets/icons/pt.svg');
const gbFlagBase64 = convertImageToBase64('src/assets/icons/gb.svg');

console.log('PT Flag Base64:', ptFlagBase64);
console.log('GB Flag Base64:', gbFlagBase64);
