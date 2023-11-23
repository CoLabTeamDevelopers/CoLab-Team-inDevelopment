import { Box } from "@mui/material";
import { forwardRef } from "react";

const TextFieldContainer = forwardRef<HTMLDivElement, React.PropsWithChildren>(
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
