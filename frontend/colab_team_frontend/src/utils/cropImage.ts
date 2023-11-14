const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });

function getRadianAngle(degreeValue: number): number {
  return (degreeValue * Math.PI) / 180;
}

export default async function getCroppedImg(
  imageSource: string,
  pixelCrop: { width: number; height: number; x: number; y: number },
  rotation = 0
): Promise<HTMLCanvasElement> {
  const image = await createImage(imageSource);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  canvas.width = safeArea;
  canvas.height = safeArea;

  if (context) {
    context.translate(safeArea / 2, safeArea / 2);
    context.rotate(getRadianAngle(rotation));
    context.translate(-safeArea / 2, -safeArea / 2);

    context.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5
    );

    const data = context.getImageData(0, 0, safeArea, safeArea);

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    context.putImageData(
      data,
      0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
      0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
    );
  }

  return canvas;
}

export const generateDownload = async (
  imageSource: string,
  crop: { width: number; height: number; x: number; y: number }
): Promise<void> => {
  if (!crop || !imageSource) {
    return;
  }

  const canvas = await getCroppedImg(imageSource, crop);

  if (canvas) {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          const previewUrl = window.URL.createObjectURL(blob);

          const anchor = document.createElement("a");
          anchor.download = "image.jpeg";
          anchor.href = URL.createObjectURL(blob);
          anchor.click();

          window.URL.revokeObjectURL(previewUrl);
        }
      },
      "image/jpeg",
      0.66
    );
  }
};
