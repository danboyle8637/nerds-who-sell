import { NextApiRequest, NextApiResponse } from "next";
import { encode } from "blurhash";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.end();
  }

  const imageUrl = req.body.imageUrl;

  const loadImage = async (src: string) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      console.log("Before creating image");
      const img = new Image();
      img.src = src;
      img.setAttribute("crossOrigin", "");
      img.onload = () => resolve(img);
      img.onerror = (...args) => reject(args);
    });
  };

  // @ts-ignore
  const getImageData = (image) => {
    console.log(image);
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context?.drawImage(image, 0, 0);
    return context?.getImageData(0, 0, image.width, image.height);
  };

  const encodeImageToBlurhash = async (imageUrl: string) => {
    const image = await loadImage(imageUrl);
    const imageData = getImageData(image);
    return encode(imageData!.data, imageData!.width, imageData!.height, 4, 4);
  };

  try {
    const blurHash = await encodeImageToBlurhash(imageUrl);

    return res.status(200).json({
      message: "success",
      blurHash,
    });
  } catch (error) {
    return res.status(500).json({
      message: "There was an error.",
      error,
    });
  }
};
