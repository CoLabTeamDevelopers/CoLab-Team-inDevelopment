import { useRef } from "react";
import { useForm } from "react-hook-form";
import { FormControl, DialogActions, Slide } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import AppContentLayout from "@/layouts/AppContent";
import { createProject } from "@/schemas/createProject";
import { CreateProject } from "@/types/createProject";
import ProjectTitleField from "@/components/form/ProjectTitleField";
import ProjectDescriptionField from "@/components/form/ProjectDescriptionField";
import SkillField from "@/components/form/SkillsField";
import ProjectPositionField from "@/components/form/ProjectPositionField";
import SelectField from "@/components/form/SelectField";
import RolesAndResponsibilitiesField from "@/components/form/RolesAndResponsibilitiesField";
import ActionButton from "@/components/form/ActionButton";
import { CreateProjectFormStyle } from "@/styles/appStyles/CreateProjectStyles";
import AppAlerts from "@/components/AppAlerts";

export default function CreateProjectPage() {
  const { handleSubmit, control, reset } = useForm<CreateProject>({
    resolver: yupResolver(createProject),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  function onSubmit(data: Record<string, any>) {
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
      <AppAlerts title="Project created." severity="success" />
      <AppAlerts title="Some error occured." severity="error" />
    </AppContentLayout>
  );
}
