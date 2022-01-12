import { ReelSymbolType } from "./slot_symbols";

// TODO: use this to replace mega function. 

// adds html images to body
export function addSymbolImagesToDOM(images: ReelSymbolType[]) {
  const htmlBody = document.getElementsByTagName("body")[0];
  images.forEach((image, index) => {
    const img = new Image();
    img.src = image.path;
    img.id = `symbol${index}`;
    img.classList.add("reel-symbol");
    img.classList.add("preload");
    htmlBody.appendChild(img);
  });
  return images;
}