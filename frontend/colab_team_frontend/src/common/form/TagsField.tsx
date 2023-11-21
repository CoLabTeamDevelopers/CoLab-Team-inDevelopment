import { Autocomplete } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

import DataChip from "../components/DataChip";
import BasicTextField, { BasicFieldProps } from "./BaseTextField";

interface Props<T extends FieldValues> extends BasicFieldProps<T> {
  options?: string[];
}

export default function TagsField<T extends FieldValues>({
  name,
  label,
  options = [],
  ...fieldProps
}: Props<T>) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <Autocomplete
      options={options}
      value={selectedTags}
      multiple
      freeSolo
      onChange={(_event, newTags) => setSelectedTags(newTags)}
      renderTags={(tags) =>
        tags.map((tag, index) => (
          <DataChip
            key={index}
            size="small"
            label={tag}
            sx={{ margin: "3px" }}
            onDelete={() =>
              setSelectedTags(selectedTags.filter((chip) => chip !== tag))
            }
          />
        ))
      }
      renderInput={(inputProps) => (
        <BasicTextField
          name={name}
          label={label}
          fieldProps={inputProps}
          {...fieldProps}
        />
      )}
    />
  );
}
