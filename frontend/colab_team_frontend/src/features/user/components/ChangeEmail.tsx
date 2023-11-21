import { yupResolver } from "@hookform/resolvers/yup";
import { DialogActions, FormControl, Link } from "@mui/material";
import { useReducer, useRef } from "react";
import { useForm } from "react-hook-form";

import AppDialog from "@/common/components/AppDialog";
import ActionButton from "@/common/form/ActionButton";
import { dialogReducer } from "@/reducers/dialogReducer";
import { dialogInitialState } from "@/states/dialogState";

import { userProfileSchema } from "../schemas";

export default function ChangeEmail() {
  const { handleSubmit, reset } = useForm({
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
      <AppDialog
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
          {/* <EmailField name="email" control={control} /> */}
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
      </AppDialog>
    </>
  );
}
