import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Badge, Box, Link, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form-mui";

import DataChip from "~components/DataChip";
import Footer from "~components/Footer";

import { useProfileQuery } from "../api";
import ChangeEmail from "../components/ChangeEmail";
import EditUserDetails from "../components/EditUserDetails";
import EditUserImage from "../components/EditUserImage";
import { userProfileSchema } from "../schemas";

export function Component() {
  const formMethods = useForm({ resolver: yupResolver(userProfileSchema) });
  const { data, error, isSuccess, isLoading, isError } = useProfileQuery("");

  if (isError) {
    // TODO: Show the error
    console.error(error);
    return <>error</>;
  }
  if (isLoading) {
    // Show a loading indicator or skeleton
    return <>Loading...</>;
  }
  if (!isSuccess) return <>User not found</>;

  const {
    username,
    email,
    name,
    profile: { bio, profilePic },
  } = data;

  return (
    <>
      <Box
        sx={{
          width: "50%",
          margin: "auto",
          "@media(max-width:1024px)": {
            width: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "@media(max-width: 1024px)": {
              display: "grid",
              justifyContent: "center",
              flexDirection: "row-reverse",
            },
          }}
        >
          <Box
            sx={{
              "@media(max-width:1024px)": {
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <Badge
              overlap="circular"
              sx={{ border: "1px solid #b39ddb", borderRadius: "100px" }}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={<EditUserImage />} // EditUserImage (Camera Icon) only visible to user
            >
              <Avatar sx={{ width: 200, height: 200 }} src={profilePic} />
            </Badge>
          </Box>
          <FormProvider {...formMethods}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "end",
                gap: "10px",
                marginTop: "1rem",
                "@media(max-width:1024px)": {
                  display: "grid",
                  alignItems: "start",
                },
              }}
            >
              <EditUserDetails />
              <Typography variant="h2">{username}</Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  "@media(max-width:1024px)": {
                    flexDirection: "row-reverse",
                  },
                }}
              >
                <ChangeEmail />
                <Typography variant="h2">{email}</Typography>
              </Box>
              <Typography variant="h2">
                Raipur, Chhattisgarh (Example Address)
              </Typography>
              <Typography variant="h3">{name ?? "No name to show"}</Typography>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <DataChip size="small" label="Django" />
                <DataChip size="small" label="React" />
                <DataChip size="small" label="Material UI" />
                <DataChip size="small" label="Rest Api" />
              </Box>
            </Box>
          </FormProvider>
        </Box>
        <Box sx={{ display: "grid", gap: "5px", marginTop: "10px" }}>
          <Typography variant="h2">About Me</Typography>
          <Typography>{bio ?? "Nothing to show"}</Typography>
        </Box>
        <Box sx={{ display: "grid", marginTop: "10px" }}>
          <Typography variant="h2">Projects</Typography>
          <Link href="/projects/colab" sx={{ margin: "10px 10px" }}>
            Colab Teams - Colaborative Platform for developers
          </Link>
          <Link href="/projects/colab" sx={{ margin: "0px 10px" }}>
            Colab Teams - Colaborative Platform for developers
          </Link>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
