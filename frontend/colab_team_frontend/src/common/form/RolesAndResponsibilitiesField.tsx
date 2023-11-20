import { useState } from "react";

import BasicTextField from "./BaseTextField";

interface Props {
  name?: string;
  label?: string;
  control: any;
}

export default function RolesAndResponsibilitiesField({
  name = "projectRolesAndResponsiblities",
  label = "Roles and Responsiblities",
  ...otherProps
}: Props) {
  const [value, setValue] = useState("");

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setValue((previousValue) => previousValue + "•");
    }
  };

  return (
    <BasicTextField
      name={name}
      fieldProps={{
        type: "text",
        label,
        multiline: true,
        rows: 5,
        placeholder: "Write here... (New point Shift + Enter)",
        onKeyDown: handleKeyPress,
        value: value,
        onChange: (e) => setValue(e.target.value),
      }}
      {...otherProps}
    />
  );
}
