import { FieldValues } from "react-hook-form";

import BasicTextField, { BasicTextFieldProps } from "./BaseTextField";

interface Props<T extends FieldValues> extends BasicTextFieldProps<T> {}

export default function EmailField<T extends FieldValues>({
  label = "Email Address",
  ...otherProps
}: Props<T>) {
  return <BasicTextField label={label} type="email" {...otherProps} />;
}
