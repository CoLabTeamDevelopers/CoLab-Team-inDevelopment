import {
  type FieldValues,
  TextFieldElement,
  type TextFieldElementProps,
} from "react-hook-form-mui";

interface Props<T extends FieldValues> extends TextFieldElementProps<T> {}

export default function FileField<T extends FieldValues>(props: Props<T>) {
  return (
    <TextFieldElement
      type="file"
      inputProps={{ accept: "image/*" }}
      sx={{ display: "none" }}
      {...props}
    />
  );
}
