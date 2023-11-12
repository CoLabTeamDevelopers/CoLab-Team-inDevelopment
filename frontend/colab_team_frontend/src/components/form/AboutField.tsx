import BasicTextField from "./BaseTextField";

interface Props {
  name?: string;
  label?: string;
  control: any;
}

export default function AboutField({
  name = "about",
  label = "About me",
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
