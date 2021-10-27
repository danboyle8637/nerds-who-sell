import { useState, useEffect } from "react";
import { decode } from "blurhash";

// const pixels = decode("LEHV6nWB2yk8pyo0adR*.7kCMdnj", 32, 32);

// const canvas = document.createElement("canvas");
// const ctx = canvas.getContext("2d");
// const imageData = ctx.createImageData(width, height);
// imageData.data.set(pixels);
// ctx.putImageData(imageData, 0, 0);
// document.body.append(canvas);

export const useDecodeBlurHash = (
  hash: string,
  width: number,
  height: number
) => {
  const [imageDataUrl, setImageDataUrl] = useState<string>("");

  useEffect(() => {
    const smallHeight = (height * 20) / width;

    const pixels = decode(hash, 20, smallHeight);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const imageData = ctx!.createImageData(width, height);
    imageData.data.set(pixels);
    ctx?.putImageData(imageData, 0, 0);
    const dataUrl = canvas.toDataURL();
    setImageDataUrl(dataUrl);
  }, [hash, width, height]);

  return imageDataUrl;
};
