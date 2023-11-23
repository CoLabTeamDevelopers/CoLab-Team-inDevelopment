import { FormControl, Link } from "@mui/material";
import { ReactEventHandler, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { useToggle } from "usehooks-ts";

import AppDialog from "~components/AppDialog";
import ActionButton from "~form/ActionButton";
import EmailField from "~form/EmailField";

export default function ChangeEmail() {
  const [open, toggle] = useToggle();
  const formRef = useRef<HTMLFormElement | null>(null);
  const { reset, handleSubmit, control } = useFormContext();

  function onSubmit(data: unknown) {
    console.log(data);
    formRef.current?.reset();
    reset();
  }

  const onCancel: ReactEventHandler<HTMLButtonElement> = () => {
    toggle();
    formRef.current?.reset();
    reset();
  };

  return (
    <>
      <Link onClick={toggle}>Change</Link>
      <AppDialog title="Change Email" open={open} onClose={toggle}>
        <FormControl
          sx={{ gap: "10px", width: "100%", marginTop: "5px" }}
          component="form"
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
        >
          <EmailField name="email" control={control} />
          <AppDialog.Actions>
            <ActionButton onClick={onCancel} label="Cancel" />
            <ActionButton type="submit" label="Save" />
          </AppDialog.Actions>
        </FormControl>
      </AppDialog>
    </>
  );
}
