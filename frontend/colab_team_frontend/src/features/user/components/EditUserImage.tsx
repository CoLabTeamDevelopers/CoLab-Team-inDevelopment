import { yupResolver } from "@hookform/resolvers/yup";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Avatar, Box, DialogActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useToggle } from "usehooks-ts";

import AppDialog from "@/common/components/AppDialog";
import ActionButton from "@/common/form/ActionButton";

import { userProfileSchema } from "../schemas";
import ImageCropper from "./ImageCropper";

const CameraIconButton = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  border: `1px solid ${theme.palette.background.paper}`,
}));

export default function EditUserImage() {
  const [open, toggle] = useToggle();
  const { control } = useForm({
    resolver: yupResolver(userProfileSchema),
  });

  const [image, setImage] = useState("");

  const imageFileRef = useRef();
  const triggerImageFile = () => imageFileRef.current?.click();

  const saveImageRef = useRef();
  const saveImage = () => saveImageRef.current?.cropProfileImage();

  const onSelectFile = (event: unknown) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };

  return (
    <>
      <Avatar>
        <CameraIconButton onClick={toggle}>
          <CameraAltIcon />
        </CameraIconButton>
      </Avatar>
      <AppDialog title="Upload Image" open={open} onClose={toggle}>
        <Box sx={{ display: "grid", gap: "10px" }}>
          <ActionButton label="Choose Image File" onClick={triggerImageFile} />
          {/* <FileField
            name=""
            control={control}
            forwardedRef={imageFileRef}
            onChange={onSelectFile}
          /> */}
          <ImageCropper forwardedRef={saveImageRef} image={image} />
        </Box>
        {image && (
          <DialogActions>
            <ActionButton label="Cancel" onClick={toggle} />
            <ActionButton label="Save" onClick={saveImage} />
          </DialogActions>
        )}
      </AppDialog>
    </>
  );
}
