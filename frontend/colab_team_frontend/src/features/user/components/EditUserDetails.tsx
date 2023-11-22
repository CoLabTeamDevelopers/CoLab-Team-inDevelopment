import { FormControl } from "@mui/material";
import { ReactEventHandler, useRef } from "react";
import { TextFieldElement, useFormContext } from "react-hook-form-mui";
import { useToggle } from "usehooks-ts";

import AppDialog from "@/common/components/AppDialog";
import ActionButton from "@/common/form/ActionButton";
import TagsField from "@/common/form/TagsField";

export default function EditUserDetails() {
  const [open, toggle] = useToggle();
  const formRef = useRef<HTMLFormElement | null>(null);
  const { handleSubmit, control, reset } = useFormContext();

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
          <AppDialog.Actions>
            <ActionButton onClick={onCancel} label="Cancel" />
            <ActionButton type="submit" label="Save" />
          </AppDialog.Actions>
        </FormControl>
      </AppDialog>
    </>
  );
}
