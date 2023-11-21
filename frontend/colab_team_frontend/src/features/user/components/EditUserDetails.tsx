import { yupResolver } from "@hookform/resolvers/yup";
import { DialogActions, FormControl } from "@mui/material";
import { useReducer, useRef } from "react";
import { useForm } from "react-hook-form";
import { TextFieldElement } from "react-hook-form-mui";

import ContentDialog from "@/common/components/ContentDialog";
import ActionButton from "@/common/form/ActionButton";
import TagsField from "@/common/form/TagsField";
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
