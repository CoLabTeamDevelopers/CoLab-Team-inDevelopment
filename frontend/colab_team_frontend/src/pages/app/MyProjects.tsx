import React from "react";
import { Card, Divider, Box } from "@mui/material";

import AppContentLayout from "@/layouts/AppContent";
import AppLink from "@/components/Link";
import DataChip from "@/components/DataChip";
import ActionButton from "@/components/form/ActionButton";
import {
  MyProjectsButtonSectionStyle,
  MyProjectsCardStyle,
} from "@/styles/appStyles/MyProjectsStyle";

export default function MyProjectsPage() {
  return (
    <React.Fragment>
      <AppContentLayout>
        <Card sx={MyProjectsCardStyle}>
          <Box sx={{ display: "grid", gap: "10px" }}>
            <AppLink href="/projects/colab">
              Colab Teams - Collaborative platform for developers
            </AppLink>
            <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              <DataChip
                label={`Published on ${new Date().toLocaleDateString()}`}
                size="small"
              />
            </Box>
            <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              <DataChip label="Django" size="small" />
              <DataChip label="React" size="small" />
              <DataChip label="Material UI" size="small" />
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={MyProjectsButtonSectionStyle}>
            <ActionButton label="Delete" />
            {/** Close button will show when project is open */}
            <ActionButton label="Close" />{" "}
            {/** Open button will show when project is closed */}
            <ActionButton label="Open" />{" "}
          </Box>
        </Card>
      </AppContentLayout>
    </React.Fragment>
  );
}
