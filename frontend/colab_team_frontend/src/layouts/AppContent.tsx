import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

import { AppContentLayoutStyle } from "@/styles/appStyles/AppContentLayout";

export default function AppContentLayout({ children }: PropsWithChildren) {
  return <Box sx={AppContentLayoutStyle}>{children}</Box>;
}
