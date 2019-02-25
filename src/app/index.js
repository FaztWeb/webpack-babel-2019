import Photos from './photos';

import "./index.css";

const photos = new Photos();

async function main() {
    console.log(await photos.getPhotos())
}

function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

console.log(isValidJSON('test'))

main();
