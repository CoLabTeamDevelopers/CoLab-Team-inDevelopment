import { Control } from "react-hook-form";
import BasicTextField from "./BaseTextField";

interface Props {
  name?: string;
  label?: string;
  control: Control;
}

export default function NameField({ name, label, ...otherProps }: Props) {
  return (
    <BasicTextField
      name={name}
      fieldProps={{ type: "text", label }}
      {...otherProps}
    />
  );
}
