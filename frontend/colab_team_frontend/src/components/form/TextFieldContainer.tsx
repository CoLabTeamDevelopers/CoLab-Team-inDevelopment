import { Box } from "@mui/material";
import { forwardRef, PropsWithChildren, Ref } from "react";

const TextFieldContainer = forwardRef<Ref<HTMLDivElement>, PropsWithChildren>(
  ({ children }, ref) => (
    <Box
      ref={ref}
      sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      {children}
    </Box>
  )
);

export default TextFieldContainer;
