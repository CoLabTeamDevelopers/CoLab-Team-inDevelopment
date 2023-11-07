import React from "react";

import { Box } from "@mui/material";
import DataChip from "@/components/DataChip";

export default function ProjectTags() {
  return (
    <React.Fragment>
      <Box>
        <DataChip
          size="small"
          label={"Published on " + new Date().toLocaleDateString()}
        />
      </Box>
      <Box
        sx={{
          gap: "10px",
          display: "flex",
          justifyContent: "space-between",
          overflow: "auto",
        }}
      >
        <Box sx={{ gap: "5px", display: "flex" }}>
          <DataChip size="small" label="Django" />
          <DataChip size="small" label="React" />
          <DataChip size="small" label="Material UI" />
          <DataChip size="small" label="Rest Api" />
        </Box>
        <Box>
          <DataChip size="small" label="Beginner" />
        </Box>
        <Box>
          <DataChip size="small" label="6" />
        </Box>
      </Box>
    </React.Fragment>
  );
}
