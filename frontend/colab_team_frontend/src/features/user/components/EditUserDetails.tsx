import { yupResolver } from "@hookform/resolvers/yup";
import { DialogActions, FormControl } from "@mui/material";
import { useReducer, useRef } from "react";
import { useForm } from "react-hook-form";

import ContentDialog from "@/common/components/ContentDialog";
import ActionButton from "@/common/form/ActionButton";
import BasicTextField from "@/common/form/BaseTextField";
import LocationField from "@/common/form/LocationField";
import SkillsField from "@/common/form/SkillsField";
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
          <BasicTextField
            name="firstName"
            control={control}
            label="First name"
          />
          <BasicTextField name="lastName" control={control} label="Last name" />
          <LocationField name="location" control={control} />
          <SkillsField control={control} />
          <BasicTextField name="about" control={control} label="About Me" />
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
