import React from "react";
import { Avatar, Box } from "@mui/material";

interface CropImageProps {
  croppedArea: any;
  image: any;
}

export default function CroppedImage({ croppedArea, image }: CropImageProps) {
  const scale = 100 / croppedArea.width;

  const transform = {
    x: `${-croppedArea.x * scale}%`,
    y: `${-croppedArea.y * scale}%`,
    scale,
    width: "calc(100% + 0.5px)",
    height: "auto",
  };

  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    transformOrigin: "top left",
    transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)`,
    width: transform.width,
    height: transform.height,
    borderRadius: 0,
  };

  return (
    <Box
      component="div"
      sx={{
        marginTop: "10px",
        position: "relative",
        width: "200px",
        overflow: "hidden",
        borderRadius: "100px",
        paddingBottom: "100%",
      }}
    >
      <Avatar src={image} sx={imageStyle} alt="User Image" />
    </Box>
  );
}
