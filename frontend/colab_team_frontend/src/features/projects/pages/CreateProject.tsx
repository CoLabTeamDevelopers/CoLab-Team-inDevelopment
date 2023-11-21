import { yupResolver } from "@hookform/resolvers/yup";
import { DialogActions, FormControl, Slide } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/common/form/ActionButton";
import BasicTextField from "@/common/form/BaseTextField";
import MultiSelectField from "@/common/form/MultiSelectField";
import NumberField from "@/common/form/NumberField";
import SelectField from "@/common/form/SelectField";
import AppContentLayout from "@/common/layouts/AppContent";
import { CreateProjectFormStyle } from "@/common/styles/CreateProjectStyles";

import { createProject } from "../schema";

export default function CreateProjectPage() {
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
    <AppContentLayout>
      <Slide direction="right" in mountOnEnter unmountOnExit>
        <FormControl
          sx={CreateProjectFormStyle}
          component="form"
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
        >
          <BasicTextField
            name="projectTitle"
            label="Project Title"
            control={control}
          />
          <BasicTextField
            label="Description"
            name="projectDescription"
            control={control}
          />
          <MultiSelectField label="Skills" name="skills" control={control} />
          <NumberField
            type="number"
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
          <BasicTextField
            name="projectRolesAndResponsiblities"
            label="Roles & Responsibilities"
            control={control}
            fieldProps={{
              multiline: true,
              rows: 5,
              placeholder: "Write here... (New point Shift + Enter)",
            }}
          />
          <DialogActions>
            <ActionButton label="Save" />
          </DialogActions>
        </FormControl>
      </Slide>
    </AppContentLayout>
  );
}
