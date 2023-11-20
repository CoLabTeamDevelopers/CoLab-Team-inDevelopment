import BasicTextField from "./BaseTextField";

interface Props {
  name?: string;
  label?: string;
  control: any;
}

export default function ProjectTitleField({
  name = "projectTitle",
  label = "Project Title",
  ...otherProps
}: Props) {
  return (
    <BasicTextField
      name={name}
      fieldProps={{ type: "text", label }}
      {...otherProps}
    />
  );
}
