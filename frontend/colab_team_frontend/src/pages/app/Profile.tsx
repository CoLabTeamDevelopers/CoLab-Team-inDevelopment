import React, { useState, useReducer, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  FormControl,
  Typography,
  Link,
  DialogActions,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import AppContentLayout from "@/layouts/AppContent";
import DataChip from "@/components/DataChip";
import NavBar from "@/components/navbar/Navbar";
import Image from "@/components/Image";
import Footer from "@/components/footer/Footer";
import ContentDialog from "@/components/ContentDialog";
import { dialogReducer } from "@/reducers/dialogReducer";
import { dialogInitialState } from "@/states/dialogState";
import SkillsField from "@/components/form/SkillsField";
import ActionButton from "@/components/form/ActionButton";
import NameField from "@/components/form/NameField";
import AboutField from "@/components/form/AboutField";
import { userProfile } from "@/schemas/profileSchema";
import { userProfleTypes } from "@/typings/userProfileTypes";

export default function Profile() {
  const [hoverImage, setHoverImage] = useState(false);

  const { handleSubmit, control, reset } = useForm<userProfleTypes>({
    resolver: yupResolver(userProfile),
  });

  const [state, dispatch] = useReducer(dialogReducer, dialogInitialState);

  const formRef = useRef<HTMLFormElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(data: Record<string, any>) {
    console.log(data);
    formRef.current?.reset();
    reset();
  }

  return (
    <React.Fragment>
      <NavBar />
      <AppContentLayout>
        <Box
          sx={{
            width: "50%",
            margin: "auto",
            display: "grid",
            justifyContent: "center",
            gap: "5px",
            marginBottom: "50px",
          }}
        >
          <Image
            src="https://i.pinimg.com/originals/32/95/e2/3295e2cb2c3b70691c54827c338b0ce6.jpg"
            alt="Project Banner"
            style={{
              width: "100%",
              height: "25vh",
              objectFit: "fill",
            }}
          />
          <ContentDialog
            title="Edit User"
            open={state.openEditUserDialog}
            onClose={() => dispatch({ type: "EDIT_USER_DETAILS_DIALOG" })}
          >
            <FormControl
              sx={{ gap: "10px", width: "100%", marginTop: "5px" }}
              component="form"
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
            >
              <NameField
                name="firstName"
                control={control}
                label="First name"
              />
              <NameField name="lastName" control={control} label="Last name" />
              <SkillsField control={control} />
              <AboutField control={control} />
              <DialogActions>
                <ActionButton
                  onClick={() => {
                    dispatch({ type: "EDIT_USER_DETAILS_DIALOG" });
                    formRef.current?.reset();
                    reset();
                  }}
                  label="Cancel"
                />
                <ActionButton type="submit" label="Save" />
              </DialogActions>
            </FormControl>
          </ContentDialog>
          <Box
            onClick={() => {
              dispatch({ type: "EDIT_USER_DETAILS_DIALOG" });
              formRef.current?.reset();
              reset();
            }}
            sx={{
              position: "absolute",
              top: "28%",
              left: "28%",
              border: "2px solid #b39ddb",
              padding: "2px",
              borderRadius: "100px",
              alignItems: "center",
            }}
          >
            <Image
              onMouseEnter={() => setHoverImage(true)}
              onMouseLeave={() => setHoverImage(false)}
              alt="User Image"
              src="https://static.vecteezy.com/system/resources/previews/024/212/249/original/ai-generated-sticker-anime-girl-with-blue-hair-png.png"
              style={{
                display: "flex",
                width: "100px",
                height: "100px",
                borderRadius: "100px",
                background: "#ffffff",
                objectFit: "contain",
                cursor: "pointer",
                filter: hoverImage ? "brightness(0.5)" : "",
              }}
            />
            <EditIcon
              sx={{
                position: "absolute",
                top: "40%",
                paddingLeft: "35px",
                color: "#ffffff",
                display: hoverImage ? "block" : "none",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "end",
              flexDirection: "column",
            }}
          >
            <ActionButton
              label="Edit"
              onClick={() => dispatch({ type: "EDIT_USER_DETAILS_DIALOG" })}
            />
          </Box>
          <Typography variant="h2">SimpSid</Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Typography variant="h2">siddhanttotade.1994@gmail.com</Typography>
            <Link>Change</Link>{" "}
            {/* This link is displayed to only to the user */}
          </Box>
          <Typography variant="h3">Siddhant Totade</Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <DataChip size="small" label="Django" />
            <DataChip size="small" label="React" />
            <DataChip size="small" label="Material UI" />
            <DataChip size="small" label="Rest Api" />
          </Box>
          <Box sx={{ display: "grid", gap: "5px", marginTop: "30px" }}>
            <Typography variant="h2">About Me</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              aspernatur doloremque, nulla voluptatibus nostrum magni animi!
              Nam, laudantium. Harum, odit!
            </Typography>
          </Box>
          <Box sx={{ display: "grid", marginTop: "30px" }}>
            <Typography variant="h2">Projects</Typography>
            <Link href="/projects/colab" sx={{ margin: "10px 10px" }}>
              Colab Teams - Colaborative Platform for developers
            </Link>
            <Link href="/projects/colab" sx={{ margin: "0px 10px" }}>
              Colab Teams - Colaborative Platform for developers
            </Link>
          </Box>
        </Box>
      </AppContentLayout>
      <Footer />
    </React.Fragment>
  );
}
