import BasicTextField from "./BaseTextField";

interface Props {
  name?: string;
  label?: string;
  control: any;
}

export default function ProjectDescriptionField({
  name = "projectDescription",
  label = "Project Description",
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
