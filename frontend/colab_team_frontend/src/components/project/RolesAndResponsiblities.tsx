import { Box, Container, Typography } from "@mui/material";

export default function RolesAndResponsiblities() {
  return (
    <Box>
      <Typography variant="h6">Roles & Responsiblities</Typography>
      <Container sx={{ gap: "5px", display: "grid" }} component="ul">
        <Typography component="li">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          eveniet explicabo beatae repellat voluptates odio cumque at unde,
          minus magni?
        </Typography>
        <Typography component="li">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          eveniet explicabo beatae repellat voluptates odio cumque at unde,
          minus magni?
        </Typography>
        <Typography component="li">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          eveniet explicabo beatae repellat voluptates odio cumque at unde,
          minus magni?
        </Typography>
      </Container>
    </Box>
  );
}
