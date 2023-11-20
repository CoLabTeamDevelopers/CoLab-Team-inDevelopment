import { yupResolver } from "@hookform/resolvers/yup";
import { DialogActions, FormControl, Slide } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import ActionButton from "@/common/components/form/ActionButton";
import ProjectDescriptionField from "@/common/components/form/ProjectDescriptionField";
import ProjectPositionField from "@/common/components/form/ProjectPositionField";
import ProjectTitleField from "@/common/components/form/ProjectTitleField";
import RolesAndResponsibilitiesField from "@/common/components/form/RolesAndResponsibilitiesField";
import SelectField from "@/common/components/form/SelectField";
import SkillField from "@/common/components/form/SkillsField";
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
          <ProjectTitleField control={control} />
          <ProjectDescriptionField control={control} />
          <SkillField control={control} />
          <ProjectPositionField control={control} />
          <SelectField
            label="Project Level"
            control={control}
            items={["Beginner", "Intermediate", "Professional"]}
          />
          <RolesAndResponsibilitiesField control={control} />
          <DialogActions>
            <ActionButton label="Save" />
          </DialogActions>
        </FormControl>
      </Slide>
    </AppContentLayout>
  );
}
