import { yupResolver } from "@hookform/resolvers/yup";
import { DialogActions, FormControl, Link } from "@mui/material";
import { useReducer, useRef } from "react";
import { useForm } from "react-hook-form";

import { dialogReducer } from "@/reducers/dialogReducer";
import { userProfileSchema } from "@/schemas/profile";
import { dialogInitialState } from "@/states/dialogState";

import ContentDialog from "../ContentDialog";
import ActionButton from "../form/ActionButton";
import EmailField from "../form/EmailField";

export default function ChangeEmail() {
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
    </>
  );
}
