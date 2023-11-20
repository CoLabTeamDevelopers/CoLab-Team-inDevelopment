import { FieldValues } from "react-hook-form";

import BasicTextField, { BasicTextFieldProps } from "./BaseTextField";

interface Props<T extends FieldValues> extends BasicTextFieldProps<T> {}

export default function LocationField<T extends FieldValues>({
  label = "Location",
  ...otherProps
}: Props<T>) {
  return <BasicTextField label={label} {...otherProps} />;
}
