import { Autocomplete } from "@mui/material";
import { useState } from "react";

import DataChip from "../DataChip";
import BasicTextField from "./BaseTextField";

interface Props {
  name?: string;
  label?: string;
  control: any;
}

export default function SkillField({
  name = "skills",
  label = "Skills",
  ...otherProps
}: Props) {
  // Chip array - Controls the chip data (skills)
  const [chipData, setChipData] = useState<string[]>([]);

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
