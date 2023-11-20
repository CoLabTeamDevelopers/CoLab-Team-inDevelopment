import BasicTextField from "./BaseTextField";

interface Props {
  name?: string;
  label?: string;
  control: any;
}

export default function ProjectPositionField({
  name = "projectPosition",
  label = "Open Positions",
  ...otherProps
}: Props) {
  return (
    <BasicTextField
      name={name}
      fieldProps={{ type: "number", label, inputProps: { min: 0, step: 1 } }}
      {...otherProps}
    />
  );
}
