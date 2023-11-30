import { Box, Slider } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";

import getCroppedImg from "~utils/cropImage";

import CroppedImagePreview from "./CroppedImagePreview";

interface ImageCropperProps {
  image?: string;
}

const ImageCropper = forwardRef(
  ({ image }: ImageCropperProps, forwardedRef) => {
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [croppedArea, setCroppedArea] = useState<Area>();
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
    const [croppedImage, setCroppedImage] = useState(image);
    const [rotation, setRotation] = useState<number>();
    const [zoom, setZoom] = useState(1);

    useImperativeHandle(forwardedRef, async () => {
      try {
        const img = await getCroppedImg({
          imageSource: croppedImage,
          pixelCrop: croppedAreaPixels,
          rotation,
        });
        console.log(img);
        setCroppedImage(img);
      } catch (error) {
        console.error(error);
      }
    });

    return (
      <>
        <Box
          component="div"
          sx={{
            position: "relative",
            height: image ? "30vh" : "0",
          }}
        >
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            cropShape="round"
            aspect={1}
            minZoom={1}
            maxZoom={2}
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onZoomChange={setZoom}
            onCropComplete={(_croppedArea, croppedAreaPixels) =>
              setCroppedAreaPixels(croppedAreaPixels)
            }
            onCropAreaChange={setCroppedArea}
          />
        </Box>
        <Box
          component="div"
          sx={{
            height: image ? "30vh" : "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "200px",
          }}
        >
          <Box component="div">
            {croppedArea && (
              <>
                <Slider
                  value={rotation}
                  min={0}
                  max={360}
                  step={1}
                  onChange={(_event, rotation) =>
                    setRotation(rotation as number)
                  }
                  size="small"
                  defaultValue={70}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  sx={{ "@media(max-width:1024px)": { marginTop: "40px" } }}
                />
                <CroppedImagePreview
                  rotation={rotation!}
                  croppedArea={croppedArea}
                  image={image}
                />
              </>
            )}
          </Box>
        </Box>
      </>
    );
  }
);

export default ImageCropper;
