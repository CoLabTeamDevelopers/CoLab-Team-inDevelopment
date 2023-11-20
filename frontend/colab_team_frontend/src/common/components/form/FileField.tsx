import BasicTextField from "./BaseTextField";

interface Props {
  name?: string;
  label?: string;
  forwardedRef?: any;
  control: any;
  onChange?: () => void;
}

export default function FileField({
  name = "choose_image",
  label,
  forwardedRef,
  onChange,
  ...otherProps
}: Props) {
  return (
    <BasicTextField
      name={name}
      fieldProps={{
        type: "file",
        label,
        inputProps: { accept: "image/*" },
        inputRef: forwardedRef,
        onChange: onChange,
        sx: { display: "none" },
      }}
      {...otherProps}
    />
  );
}
