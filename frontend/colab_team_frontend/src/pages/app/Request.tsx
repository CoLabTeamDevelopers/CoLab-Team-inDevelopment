import React from "react";
import { Box, Divider, Card } from "@mui/material";
import NavBar from "@/components/navbar/Navbar";
import AppContentLayout from "@/layouts/AppContent";
import ActionButton from "@/components/form/ActionButton";
import AppLink from "@/components/Link";
import DataChip from "@/components/DataChip";
import {
  RequestCardStyle,
  RequestProjectSectionStyle,
  RequestUserSectionStyle,
  RequestButtonSectionStyle,
} from "@/styles/appStyles/RequestStyles";

export default function RequestPage() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
