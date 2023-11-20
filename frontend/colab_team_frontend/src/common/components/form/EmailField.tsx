import BasicTextField from "./BaseTextField";

interface Props {
  name?: string;
  label?: string;
  control: any;
}

export default function EmailField({
  name = "email",
  label = "Email Address",
  ...otherProps
}: Props) {
  return (
    <BasicTextField
      name={name}
      fieldProps={{ type: "email", label }}
      {...otherProps}
    />
  );
}
