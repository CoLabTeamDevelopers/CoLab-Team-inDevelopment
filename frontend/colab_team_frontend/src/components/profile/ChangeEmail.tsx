import React, { useReducer, useRef } from "react";
import { useForm } from "react-hook-form";

import { Link, FormControl, DialogActions } from "@mui/material";
import { dialogReducer } from "@/reducers/dialogReducer";
import { dialogInitialState } from "@/states/dialogState";
import ContentDialog from "../ContentDialog";
import EmailField from "../form/EmailField";
import { userProfileTypes } from "@/types/userProfileTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import ActionButton from "../form/ActionButton";
import { registrationSchema } from "@/schemas/auth";

export default function ChangeEmail() {
  const { handleSubmit, control, reset } = useForm<userProfileTypes>({
    resolver: yupResolver(registrationSchema),
  });

  const [state, dispatch] = useReducer(dialogReducer, dialogInitialState);

  const formRef = useRef<HTMLFormElement | null>(null);

  function onSubmit(data: Record<string, any>) {
    console.log(data);
    formRef.current?.reset();
    reset();
  }

  return (
    <React.Fragment>
      <Link onClick={() => dispatch({ type: "EDIT_CHANGE_EMAIL_DIALOG" })}>
        Change
      </Link>
      <ContentDialog
        title="Change Email"
        open={state.openEditEmailDialog}
        onClose={() => dispatch({ type: "EDIT_CHANGE_EMAIL_DIALOG" })}
      >
        <FormControl
          sx={{ gap: "10px", width: "100%", marginTop: "5px" }}
          component="form"
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
        >
          <EmailField control={control} />
          <DialogActions>
            <ActionButton
              onClick={() => {
                dispatch({ type: "EDIT_CHANGE_EMAIL_DIALOG" });
                formRef.current?.reset();
                reset();
              }}
              label="Cancel"
            />
            <ActionButton type="submit" label="Save" />
          </DialogActions>
        </FormControl>
      </ContentDialog>
    </React.Fragment>
  );
}
