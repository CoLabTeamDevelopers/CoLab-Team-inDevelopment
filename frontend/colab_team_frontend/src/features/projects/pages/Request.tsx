import { Box, Card, Divider } from "@mui/material";

import DataChip from "@/common/components/DataChip";
import AppLink from "@/common/components/Link";
import ActionButton from "@/common/form/ActionButton";
import AppContentLayout from "@/common/layouts/AppContent";
import {
  RequestButtonSectionStyle,
  RequestCardStyle,
  RequestProjectSectionStyle,
  RequestUserSectionStyle,
} from "@/common/styles/RequestStyles";

export default function RequestPage() {
  return (
    <AppContentLayout>
      <Divider sx={{ width: "60%", margin: "auto" }} textAlign="right">
        Today
      </Divider>
      <Divider sx={{ width: "60%", margin: "auto" }} textAlign="right">
        Yesterday
      </Divider>
      <Divider sx={{ width: "60%", margin: "auto" }} textAlign="right">
        14/11/2023
      </Divider>
      <Card sx={RequestCardStyle}>
        <Box sx={RequestUserSectionStyle}>
          <AppLink>Siddhant Totade</AppLink>
          <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
            <DataChip label="Dajngo" size="small" />
            <DataChip label="React" size="small" />
            <DataChip label="Material UI" size="small" />
            <DataChip label="Material UI" size="small" />
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={RequestProjectSectionStyle}>
          <AppLink href="/projects/colab">
            Colab Team - Collaborative platform for developers
          </AppLink>
          <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
            <DataChip label="Dajngo" size="small" />
            <DataChip label="React" size="small" />
            <DataChip label="Material UI" size="small" />
            <DataChip label="Material UI" size="small" />
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={RequestButtonSectionStyle}>
          <ActionButton label="Approve" />
          <ActionButton label="Decline" />
        </Box>
      </Card>
    </AppContentLayout>
  );
}
