import { Box } from "@mui/material";

import { AppContentLayoutStyle } from "@/styles/appStyles/AppContentLayout";

export default function AppContentLayout({
  children,
}: React.PropsWithChildren) {
  return <Box sx={AppContentLayoutStyle}>{children}</Box>;
}
