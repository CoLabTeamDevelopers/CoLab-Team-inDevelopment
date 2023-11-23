import { Box, Card, Divider } from "@mui/material";

import DataChip from "~components/DataChip";
import AppLink from "~components/Link";
import ActionButton from "~form/ActionButton";

const SectionStyle = {
  display: "grid",
  gap: "10px",
  justifyItems: "center",
  alignContent: "center",
};

export function Component() {
  return (
    <>
      <Divider sx={{ width: "60%", margin: "auto" }} textAlign="right">
        Today
      </Divider>
      <Divider sx={{ width: "60%", margin: "auto" }} textAlign="right">
        Yesterday
      </Divider>
      <Divider sx={{ width: "60%", margin: "auto" }} textAlign="right">
        14/11/2023
      </Divider>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "20px",
          width: "60%",
          margin: "auto",
          padding: "10px",
          marginTop: "10px",
          "@media(max-width:640px)": {
            width: "90%",
            display: "grid",
            gap: "10px",
          },
        }}
      >
        <Box sx={SectionStyle}>
          <AppLink>Siddhant Totade</AppLink>
          <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
            <DataChip label="Dajngo" size="small" />
            <DataChip label="React" size="small" />
            <DataChip label="Material UI" size="small" />
            <DataChip label="Material UI" size="small" />
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={SectionStyle}>
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
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ActionButton label="Approve" />
          <ActionButton label="Decline" />
        </Box>
      </Card>
    </>
  );
}
