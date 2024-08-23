import {
  type FieldValues,
  TextFieldElement,
  type TextFieldElementProps,
} from "react-hook-form-mui";

interface Props<T extends FieldValues> extends TextFieldElementProps<T> {
  min?: number;
  step?: number;
}

export default function NumberField<T extends FieldValues>({
  min = 0,
  step = 1,
  ...otherProps
}: Props<T>) {
  return (
    <TextFieldElement
      type="number"
      inputProps={{ min, step }}
      {...otherProps}
    />
  );
}
