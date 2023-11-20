import { FieldValues } from "react-hook-form";

import BasicTextField, { BasicTextFieldProps } from "./BaseTextField";

interface Props<T extends FieldValues> extends BasicTextFieldProps<T> {
  min?: number;
  step?: number;
}

export default function NumberField<T extends FieldValues>({
  min = 0,
  step = 1,
  ...otherProps
}: Props<T>) {
  return (
    <BasicTextField
      type="number"
      fieldProps={{ inputProps: { min, step } }}
      {...otherProps}
    />
  );
}
