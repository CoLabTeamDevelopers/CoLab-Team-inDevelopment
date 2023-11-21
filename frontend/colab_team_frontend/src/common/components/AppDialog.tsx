import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Slide,
  SlideProps,
} from "@mui/material";
import { forwardRef, PropsWithChildren } from "react";

const Transition = forwardRef<unknown, PropsWithChildren<SlideProps>>(
  (props, ref) => <Slide direction="right" ref={ref} {...props} />
);

export default function AppDialog({
  title,
  children,
  ...otherProps
}: DialogProps) {
  return (
    <Dialog
      aria-describedby="alert-dialog-slide-description"
      TransitionComponent={Transition}
      maxWidth="sm"
      fullWidth
      keepMounted
      {...otherProps}
    >
      <DialogTitle children={title} />
      <DialogContent children={children} />
    </Dialog>
  );
}
