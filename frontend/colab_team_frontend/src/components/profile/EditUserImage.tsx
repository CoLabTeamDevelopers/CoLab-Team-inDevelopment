import React, { useReducer, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Avatar, DialogActions, FormControl } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { styled } from "@mui/material/styles";

import ContentDialog from "../ContentDialog";
import { dialogReducer } from "@/reducers/dialogReducer";
import { dialogInitialState } from "@/states/dialogState";
import FileField from "../form/FileField";
import { userProfileTypes } from "@/typings/userProfileTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { userProfile } from "@/schemas/profile";
import ActionButton from "../form/ActionButton";
import ImageCropper from "./ImageCropper";

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

  const [image, setImage] = useState("");

  const imageFileRef = useRef(null);
  const triggerImageFile = () => imageFileRef.current.click();

  const saveImageRef = useRef();
  const saveImage = () => saveImageRef.current.cropProfileImage();

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
          <ActionButton label="Choose Image File" onClick={triggerImageFile} />
          <FileField
            control={control}
            forwardedRef={imageFileRef}
            onChange={onSelectFile}
          />
          <ImageCropper forwardedRef={saveImageRef} image={image} />
        </Box>
        {image && (
          <DialogActions>
            <ActionButton
              label="Cancel"
              onClick={() => dispatch({ type: "EDIT_PROFILE_IMAGE_DIALOG" })}
            />
            <ActionButton label="Save" onClick={saveImage} />
          </DialogActions>
        )}
      </ContentDialog>
    </React.Fragment>
  );
}
