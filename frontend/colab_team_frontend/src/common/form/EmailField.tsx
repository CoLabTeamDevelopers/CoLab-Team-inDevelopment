import {
  FieldValues,
  TextFieldElement,
  TextFieldElementProps,
} from "react-hook-form-mui";

export default function EmailField<T extends FieldValues>({
  label = "Email Address",
  ...otherProps
}: TextFieldElementProps<T>) {
  return <TextFieldElement label={label} type="email" {...otherProps} />;
}
