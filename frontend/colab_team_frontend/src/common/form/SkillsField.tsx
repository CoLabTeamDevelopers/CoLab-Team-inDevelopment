import { Autocomplete } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

import DataChip from "../components/DataChip";
import BasicTextField, { BasicFieldProps } from "./BaseTextField";

interface Props<T extends FieldValues> extends BasicFieldProps<T> {}

export default function SkillField<T extends FieldValues>({
  name,
  label,
  ...otherProps
}: Props<T>) {
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
          label={label}
          fieldProps={parameters}
          {...otherProps}
        />
      )}
    />
  );
}
