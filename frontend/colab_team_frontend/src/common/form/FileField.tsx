import { ChangeEventHandler } from "react";
import { FieldValues } from "react-hook-form";

import BasicTextField, { BasicTextFieldProps } from "./BaseTextField";

interface Props<T extends FieldValues, R> extends BasicTextFieldProps<T> {
  fieldRef?: React.MutableRefObject<R>;
  onChange?: ChangeEventHandler;
}

export default function FileField<T extends FieldValues, R>({
  fieldRef,
  onChange,
  ...otherProps
}: Props<T, R>) {
  return (
    <BasicTextField
      type="file"
      fieldProps={{
        inputProps: { accept: "image/*" },
        inputRef: fieldRef,
        onChange: onChange,
        sx: { display: "none" },
      }}
      {...otherProps}
    />
  );
}
