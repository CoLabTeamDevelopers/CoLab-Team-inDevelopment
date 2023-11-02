import { Box } from "@mui/material";

export default function TextFieldContainer({
  children,
}: React.PropsWithChildren) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {children}
    </Box>
  );
}
