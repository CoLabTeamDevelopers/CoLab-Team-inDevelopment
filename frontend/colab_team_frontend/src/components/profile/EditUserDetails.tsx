import { yupResolver } from "@hookform/resolvers/yup";
import { DialogActions, FormControl } from "@mui/material";
import { useReducer, useRef } from "react";
import { useForm } from "react-hook-form";

import { dialogReducer } from "@/reducers/dialogReducer";
import { userProfileSchema } from "@/schemas/profile";
import { dialogInitialState } from "@/states/dialogState";

import ContentDialog from "../ContentDialog";
import AboutField from "../form/AboutField";
import ActionButton from "../form/ActionButton";
import LocationField from "../form/LocationField";
import NameField from "../form/NameField";
import SkillsField from "../form/SkillsField";

export default function EditUserDetails() {
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(userProfileSchema),
  });

  const [state, dispatch] = useReducer(dialogReducer, dialogInitialState);

  const formRef = useRef<HTMLFormElement | null>(null);

  function onSubmit(data: unknown) {
    console.log(data);
    formRef.current?.reset();
    reset();
  }

  return (
    <>
      <ActionButton
        label="Edit"
        onClick={() => dispatch({ type: "EDIT_USER_DETAILS_DIALOG" })}
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
          <NameField name="firstName" control={control} label="First name" />
          <NameField name="lastName" control={control} label="Last name" />
          <LocationField control={control} />
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
    </>
  );
}
