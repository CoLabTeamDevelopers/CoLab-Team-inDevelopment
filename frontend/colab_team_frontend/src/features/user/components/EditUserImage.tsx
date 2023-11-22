import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Avatar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChangeEvent, useRef, useState } from "react";
import { useToggle } from "usehooks-ts";

import AppDialog from "@/common/components/AppDialog";

import ImageCropper from "./ImageCropper";

const CameraIconButton = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  border: `1px solid ${theme.palette.background.paper}`,
}));

export default function EditUserImage() {
  const [open, toggle, setOpen] = useToggle();
  const [img, setImg] = useState<File>();
  const imgRef = useRef<HTMLInputElement | null>(null);
  const forwardedRef = useRef();

  function onCancel() {
    // eslint-disable-next-line unicorn/no-useless-undefined
    setImg(undefined);
    setOpen(false);
  }

  function openImgSelector() {
    if (imgRef.current) imgRef.current.click();
  }
  function onImgSelect(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (files) setImg(files[0]);
    toggle();
  }

  return (
    <>
      <Avatar>
        <CameraIconButton onClick={openImgSelector}>
          <input
            name="file"
            type="file"
            accept="image/*"
            hidden
            ref={imgRef}
            onChange={onImgSelect}
          />
          <CameraAltIcon />
        </CameraIconButton>
      </Avatar>
      {img ? (
        <AppDialog title="Upload Image" open={open} onClose={onCancel}>
          <ImageCropper image={URL.createObjectURL(img)} ref={forwardedRef} />
          <AppDialog.Actions>
            <Button onClick={onCancel} variant="contained">
              Cancel
            </Button>
            <Button variant="contained">Save</Button>
          </AppDialog.Actions>
        </AppDialog>
      ) : undefined}
    </>
  );
}
