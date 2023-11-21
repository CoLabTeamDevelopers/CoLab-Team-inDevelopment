import { yupResolver } from "@hookform/resolvers/yup";
import { DialogActions, FormControl } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";
import { useToggle } from "usehooks-ts";

import AppDialog from "@/common/components/AppDialog";
import ActionButton from "@/common/form/ActionButton";
import TagsField from "@/common/form/TagsField";

import { userProfileSchema } from "../schemas";

export default function EditUserDetails() {
  const [open, toggle] = useToggle();
  const formRef = useRef<HTMLFormElement | null>(null);
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(userProfileSchema),
  });

  function onSubmit(data: unknown) {
    console.log(data);
    formRef.current?.reset();
    reset();
  }

  return (
    <>
      <ActionButton label="Edit" onClick={toggle} />
      <AppDialog title="Edit User" open={open} onClose={toggle}>
        <FormControl
          sx={{ gap: "10px", width: "100%", marginTop: "5px" }}
          component="form"
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextFieldElement
            name="firstName"
            control={control}
            label="First name"
          />
          <TextFieldElement
            name="lastName"
            control={control}
            label="Last name"
          />
          <TextFieldElement
            name="location"
            label="Location"
            control={control}
          />
          <TagsField
            label="Skills"
            name="skills"
            control={control}
            options={[]}
          />
          <TextFieldElement name="about" control={control} label="About Me" />
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
