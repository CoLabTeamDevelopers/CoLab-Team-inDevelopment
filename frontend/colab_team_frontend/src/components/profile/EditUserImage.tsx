import { useForm } from "react-hook-form";
import React, { useReducer, useCallback, useState, useRef } from "react";
import { Box, IconButton, Avatar } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Cropper from "react-easy-crop";
import { styled } from "@mui/material/styles";

import ContentDialog from "../ContentDialog";
import { dialogReducer } from "@/reducers/dialogReducer";
import { dialogInitialState } from "@/states/dialogState";
import FileField from "../form/FileField";
import { userProfileTypes } from "@/typings/userProfileTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { userProfile } from "@/schemas/profileSchema";
import ActionButton from "../form/ActionButton";
import CroppedImage from "./CroppedImage";

const CameraIconButton = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  border: `1px solid ${theme.palette.background.paper}`,
}));

export default function EditUserImage() {
  const { handleSubmit, control } = useForm<userProfileTypes>({
    resolver: yupResolver(userProfile),
  });

  const [state, dispatch] = useReducer(dialogReducer, dialogInitialState);

  const imageFileRef = useRef(null);

  const triggerImageFile = () => imageFileRef.current.click();

  const [image, setImage] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedArea, setCroppedArea] = useState(null);
  const [zoom, setZoom] = useState(1);

  const onCropComplete = (croppedAreaPixels: any) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };

  return (
    <React.Fragment>
      <Avatar>
        <CameraIconButton
          onClick={() => dispatch({ type: "EDIT_PROFILE_IMAGE_DIALOG" })}
        >
          <CameraAltIcon />
        </CameraIconButton>
      </Avatar>
      <ContentDialog
        title="Upload Image"
        open={state.openEditUserImageDialog}
        onClose={() => dispatch({ type: "EDIT_PROFILE_IMAGE_DIALOG" })}
      >
        <Box sx={{ display: "grid", gap: "10px" }}>
          <Box>
            <ActionButton
              label="Choose Image File"
              onClick={triggerImageFile}
            />
            <FileField
              control={control}
              forwardedRef={imageFileRef}
              onChange={onSelectFile}
            />
          </Box>
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
              cropShape="round"
              aspect={1}
              minZoom={1}
              maxZoom={2}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              // onCropComplete={onCropComplete}
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
                <CroppedImage croppedArea={croppedArea} image={image} />
              )}
            </Box>
          </Box>
        </Box>
      </ContentDialog>
    </React.Fragment>
  );
}
