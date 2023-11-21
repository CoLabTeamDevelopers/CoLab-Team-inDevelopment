import { yupResolver } from "@hookform/resolvers/yup";
import { DialogActions, FormControl, Link } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useToggle } from "usehooks-ts";

import AppDialog from "@/common/components/AppDialog";
import ActionButton from "@/common/form/ActionButton";

import { userProfileSchema } from "../schemas";

export default function ChangeEmail() {
  const [open, toggle] = useToggle();
  const formRef = useRef<HTMLFormElement | null>(null);
  const { handleSubmit, reset } = useForm({
    resolver: yupResolver(userProfileSchema),
  });

  function onSubmit(data: unknown) {
    console.log(data);
    formRef.current?.reset();
    reset();
  }

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
          {/* <EmailField name="email" control={control} /> */}
          <DialogActions>
            <ActionButton
              onClick={() => {
                toggle();
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
