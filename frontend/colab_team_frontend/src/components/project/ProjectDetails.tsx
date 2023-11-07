import { Avatar, Box, Button, Typography } from "@mui/material";
import { Fragment } from "react";

import DataChip from "@/components/DataChip";
import { ProjectDetailsStyle } from "@/styles/appStyles/ProjectStyles";

export default function ProjectDetails() {
  return (
    <Fragment>
      <Box sx={ProjectDetailsStyle}>
        <Typography variant="inherit">Author</Typography>
        <DataChip
          size="medium"
          label="Siddhant Totade"
          avatar={<Avatar>S</Avatar>}
        />
      </Box>
      <Box sx={ProjectDetailsStyle}>
        <Typography>Collaborators</Typography>
        <Box sx={ProjectDetailsStyle}>
          <DataChip
            size="small"
            label="Siddhant Totade"
            avatar={<Avatar>S</Avatar>}
          />
          <DataChip
            size="small"
            label="Siddhant Totade"
            avatar={<Avatar>S</Avatar>}
          />
          <DataChip
            size="small"
            label="Siddhant Totade"
            avatar={<Avatar>S</Avatar>}
          />
        </Box>
      </Box>
      <Box sx={ProjectDetailsStyle}>
        <Typography>Skills</Typography>
        <Box sx={ProjectDetailsStyle}>
          <DataChip size="small" label="Django" />
          <DataChip size="small" label="React" />
          <DataChip size="small" label="Material UI" />
          <DataChip size="small" label="Rest Api" />
        </Box>
      </Box>
      <Box sx={ProjectDetailsStyle}>
        <Typography>Position</Typography>
        <DataChip size="small" label="6" />
      </Box>
      <Box sx={ProjectDetailsStyle}>
        <Typography>Project Level</Typography>
        <DataChip size="small" label="Intermediate" />
      </Box>
      <Box sx={ProjectDetailsStyle}>
        <Typography>Team Status</Typography>
        <DataChip size="small" label="Full" />
      </Box>
      <Box>
        <Button variant="contained">Request Join</Button>
      </Box>
    </Fragment>
  );
}
