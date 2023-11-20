import { yupResolver } from "@hookform/resolvers/yup";
import { DialogActions, FormControl, Slide } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/common/form/ActionButton";
import BasicTextField from "@/common/form/BaseTextField";
import NumberField from "@/common/form/NumberField";
import RolesAndResponsibilitiesField from "@/common/form/RolesAndResponsibilitiesField";
import SelectField from "@/common/form/SelectField";
import SkillField from "@/common/form/SkillsField";
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
          {/* TODO: Make a multiselect field */}
          <SkillField label="Skills" name="skills" control={control} />
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
            items={["Beginner", "Intermediate", "Professional"]}
          />
          {/* TODO: Replace with a wysiwyg editor */}
          <RolesAndResponsibilitiesField control={control} />
          <DialogActions>
            <ActionButton label="Save" />
          </DialogActions>
        </FormControl>
      </Slide>
    </AppContentLayout>
  );
}
