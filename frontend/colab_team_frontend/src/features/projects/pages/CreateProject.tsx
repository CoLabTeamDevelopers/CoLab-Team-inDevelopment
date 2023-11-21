import { yupResolver } from "@hookform/resolvers/yup";
import { DialogActions, FormControl, Slide } from "@mui/material";
import { useRef } from "react";
import { TextFieldElement, useForm } from "react-hook-form-mui";

import ActionButton from "@/common/form/ActionButton";
import NumberField from "@/common/form/NumberField";
import SelectField from "@/common/form/SelectField";
import TagsField from "@/common/form/TagsField";

import { createProject } from "../schema";

export function Component() {
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(createProject),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  function onSubmit(data: unknown) {
    console.log(data);
    formRef.current?.reset();
    reset();
  }

  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <FormControl
        sx={{
          width: "40%",
          margin: "auto",
          gap: "15px",
          justifyContent: "center",
          display: "flex",
          "@media(max-width:1024px)": {
            width: "90%",
          },
        }}
        component="form"
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextFieldElement
          name="projectTitle"
          label="Project Title"
          control={control}
        />
        <TextFieldElement
          label="Description"
          name="projectDescription"
          control={control}
        />
        <TagsField
          label="Skills"
          name="skills"
          control={control}
          options={[]}
        />
        <NumberField
          name="projectPosition"
          label="Open Positions"
          control={control}
        />
        <SelectField
          name="projectLevel"
          label="Project Level"
          control={control}
          defaultValue=""
          options={["Beginner", "Intermediate", "Professional"]}
        />
        <TextFieldElement
          name="projectRolesAndResponsiblities"
          label="Roles & Responsibilities"
          control={control}
          multiline
          rows={5}
        />
        <DialogActions>
          <ActionButton label="Save" />
        </DialogActions>
      </FormControl>
    </Slide>
  );
}
