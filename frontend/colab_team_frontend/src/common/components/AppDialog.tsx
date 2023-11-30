import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Slide,
  SlideProps,
} from "@mui/material";
import { forwardRef } from "react";

const Transition = forwardRef<unknown, React.PropsWithChildren<SlideProps>>(
  (props, ref) => <Slide direction="right" ref={ref} {...props} />
);

export default function AppDialog({
  title,
  children,
  ...otherProps
}: DialogProps) {
  return (
    <Dialog
      TransitionComponent={Transition}
      maxWidth="sm"
      fullWidth
      keepMounted
      {...otherProps}
    >
      {title ? <DialogTitle children={title} /> : undefined}
      <DialogContent children={children} />
    </Dialog>
  );
}

AppDialog.Title = DialogTitle;
AppDialog.Actions = DialogActions;
