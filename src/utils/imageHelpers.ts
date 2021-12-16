import imageCompression from "browser-image-compression";

const isInDev = process.env.NODE_ENV === "development";

export const MAX_FILE_SIZE = 3;
export const SUPPORTED_EXTENSIONS = ["jpg", "jpeg", "png", "pdf"];
export const callImageCompression = async (
  imageFile: any,
  options = {
    maxSizeMB: MAX_FILE_SIZE,
    useWebWorker: true,
  }
) => {
  try {
    const compressedFile = await imageCompression(imageFile, options);
    isInDev &&
      console.log(
        "compressedFile instanceof Blob",
        compressedFile instanceof Blob
      ); // true
    isInDev &&
      console.log(
        `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
      ); // smaller than maxSizeMB

    return compressedFile;
  } catch (error) {
    isInDev && console.log(error);
    return imageFile;
  }
};
