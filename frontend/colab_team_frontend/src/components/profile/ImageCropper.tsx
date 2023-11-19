import { Box, Slider } from "@mui/material";
import { ForwardedRef, useImperativeHandle, useState } from "react";
import Cropper from "react-easy-crop";

import getCroppedImg from "@/utils/cropImage";

import CroppedImagePreview from "./CroppedImagePreview";

interface ImageCropperProps {
  image: string;
  forwardedRef?: ForwardedRef<unknown>;
}

const ImageCropper = ({ image, forwardedRef }: ImageCropperProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedArea, setCroppedArea] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(0);
  const [croppedImage, setCroppedImage] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const cropProfileImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );
      console.log(croppedImage);
      setCroppedImage(croppedImage);
    } catch (error) {
      console.error(error);
    }
  };

  useImperativeHandle(forwardedRef, () => ({
    cropProfileImage,
  }));

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
          onCropComplete={onCropComplete}
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
                onChange={(e, rotation) => setRotation(rotation)}
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ "@media(max-width:1024px)": { marginTop: "40px" } }}
              />
              <CroppedImagePreview
                rotation={rotation}
                croppedArea={croppedArea}
                image={image}
              />
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ImageCropper;
