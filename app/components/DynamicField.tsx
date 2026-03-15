'use client'

import React from "react";
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";

interface FieldProps {
  field: any;
  control: any;
}

const DynamicField: React.FC<FieldProps> = ({ field, control }) => {
  switch (field.type) {
    case "TEXT":
      return (
        <Controller
          name={field.name}
          control={control}
          defaultValue={field.defaultValue}
          rules={{ required: field.required }}
          render={({ field: controllerField, fieldState }) => (
            <TextField
              {...controllerField}
              label={field.label}
              fullWidth
              margin="normal"
              error={!!fieldState.error}
              helperText={fieldState.error ? `${field.label} is required` : ""}
            />
          )}
        />
      );

    case "LIST":
      return (
        <Controller
          name={field.name}
          control={control}
          defaultValue={field.defaultValue}
          rules={{ required: field.required }}
          render={({ field: controllerField, fieldState }) => (
            <FormControl fullWidth margin="normal">
              <FormLabel>{field.label}</FormLabel>
              <Select {...controllerField}>
                {field.options.map((option: string) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      );

    case "RADIO":
      return (
        <Controller
          name={field.name}
          control={control}
          defaultValue={field.defaultValue}
          rules={{ required: field.required }}
          render={({ field: controllerField }) => (
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">{field.label}</FormLabel>
              <RadioGroup {...controllerField} row>
                {field.options.map((option: string) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )}
        />
      );

    default:
      return null;
  }
};

export default DynamicField;