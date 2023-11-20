import BasicTextField from "./BaseTextField";

interface Props {
  name?: string;
  label?: string;
  control: any;
}

export default function LocationField({
  name = "location",
  label = "Location",
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
