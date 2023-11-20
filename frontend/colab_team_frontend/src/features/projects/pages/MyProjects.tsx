import { Box, Card, Divider } from "@mui/material";

import DataChip from "@/common/components/DataChip";
import ActionButton from "@/common/components/form/ActionButton";
import AppLink from "@/common/components/Link";
import AppContentLayout from "@/common/layouts/AppContent";
import {
  MyProjectsButtonSectionStyle,
  MyProjectsCardStyle,
} from "@/common/styles/MyProjectsStyle";

export default function MyProjectsPage() {
  return (
    <>
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
    </>
  );
}
