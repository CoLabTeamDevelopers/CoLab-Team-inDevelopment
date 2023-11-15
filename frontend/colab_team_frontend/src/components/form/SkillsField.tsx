import * as React from "react";
import { Autocomplete } from "@mui/material";

import BasicTextField from "./BaseTextField";
import DataChip from "../DataChip";

interface Props {
  name?: string;
  label?: string;
  control?: string;
}

export default function SkillField({
  name = "skills",
  label = "Skills",
  ...otherProps
}: Props) {
  // Chip array - Controls the chip data (skills)
  const [chipData, setChipData] = React.useState<string[]>([]);

  const handleDeleteChip = (chipToDelete: string) => {
    setChipData(chipData.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Autocomplete
      multiple
      id="chip-textfield"
      options={[]}
      freeSolo
      value={chipData}
      onChange={(_event, newValue) => {
        setChipData(newValue as string[]);
      }}
      renderTags={(value: string[]) =>
        value.map((option: string, index: number) => (
          <DataChip
            key={index}
            size="small"
            label={option}
            sx={{ margin: "3px" }}
            onDelete={() => handleDeleteChip(option)}
          />
        ))
      }
      renderInput={(parameters) => (
        <BasicTextField
          name={name}
          fieldProps={{ type: "text", label, ...parameters }}
          {...otherProps}
        />
      )}
    />
  );
}
