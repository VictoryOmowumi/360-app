import React from 'react';
import TextField from '@mui/material/TextField';

const FormField = ({ label, register, name, errors, theme, themeColor }) => (
  <div className="mb-4 "
      style={{
        color: theme === "dark" ? "#f0f0f0" : "#444",
      
      }}
  >
    <label className="block text-sm mb-1 ml-2">{label}</label>
    <TextField
      fullWidth
      {...register(name, { required: true })}
      error={!!errors[name]}
      helperText={errors[name] ? `${label} is required` : ""}
      style={{
        "--tw-ring-color": themeColor,
        borderColor: errors[name] ? themeColor : "",
        border: theme === "dark" ? "2px solid #a1a1a1" : "2px solid #f3f4f6",
        borderRadius: "0.375rem",
      }}
    />
  </div>
);

export default FormField;
