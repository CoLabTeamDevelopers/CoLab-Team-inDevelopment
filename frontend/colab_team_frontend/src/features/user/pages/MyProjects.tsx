import { Box, Card, Divider } from "@mui/material";

import DataChip from "@/common/components/DataChip";
import AppLink from "@/common/components/Link";
import ActionButton from "@/common/form/ActionButton";

export function Component() {
  return (
    <Card
      sx={{
        display: "flex",
        width: "50%",
        margin: "auto",
        justifyContent: "space-around",
        padding: "10px",
        gap: "20px",
        "@media(max-width:1024px)": {
          width: "90%",
        },
      }}
    >
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          flexWrap: "wrap",
        }}
      >
        <ActionButton label="Delete" />
        {/** Close button will show when project is open */}
        <ActionButton label="Close" />
        {/** Open button will show when project is closed */}
        <ActionButton label="Open" />
      </Box>
    </Card>
  );
}
