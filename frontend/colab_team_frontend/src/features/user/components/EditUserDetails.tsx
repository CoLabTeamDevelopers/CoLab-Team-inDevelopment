import { yupResolver } from "@hookform/resolvers/yup";
import { DialogActions, FormControl } from "@mui/material";
import { useReducer, useRef } from "react";
import { useForm } from "react-hook-form";

import ContentDialog from "@/common/components/ContentDialog";
import AboutField from "@/common/components/form/AboutField";
import ActionButton from "@/common/components/form/ActionButton";
import LocationField from "@/common/components/form/LocationField";
import NameField from "@/common/components/form/NameField";
import SkillsField from "@/common/components/form/SkillsField";
import { dialogReducer } from "@/reducers/dialogReducer";
import { dialogInitialState } from "@/states/dialogState";

import { userProfileSchema } from "../schemas";

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
