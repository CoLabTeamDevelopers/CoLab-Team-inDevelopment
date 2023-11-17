import React, { useImperativeHandle, useState } from "react";
import { Box, Slider } from "@mui/material";
import Cropper from "react-easy-crop";

import CroppedImagePreview from "./CroppedImagePreview";
import getCroppedImg from "@/utils/cropImage";

interface ImageCropperProps {
  image: any;
  forwardedRef?: any;
}

const ImageCropper = ({ image, forwardedRef }: ImageCropperProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedArea, setCroppedArea] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
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
    } catch (e) {
      console.error(e);
    }
  };

  useImperativeHandle(forwardedRef, () => ({
    cropProfileImage,
  }));

  return (
    <React.Fragment>
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
            <React.Fragment>
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
            </React.Fragment>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ImageCropper;
