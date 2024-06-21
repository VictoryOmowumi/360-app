import React from 'react'
import { Controller } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SurveyForm = ({
    control,
    errors
}) => {
  return (
    <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label>Select Survey:</label>
              <Controller
                name="survey"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    defaultValue=""
                    className="w-full border border-gray-300 rounded mb-4"
                    style={{
                      clr: "#2FA432",
                    }}
                  >
                    <MenuItem value="">Select Survey</MenuItem>
                    <MenuItem value="1">Survey 1</MenuItem>
                    <MenuItem value="2">Survey 2</MenuItem>
                    <MenuItem value="3">Survey 3</MenuItem>
                  </Select>
                )}
              />

              {errors.survey && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Select Group:</label>
              <Controller
                name="group"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    defaultValue=""
                    className="w-full border border-gray-300 rounded mb-4"
                    style={{
                      clr: "#2FA432",
                    }}
                  >
                    <MenuItem value="">Select Group</MenuItem>
                    <MenuItem value="1">Group 1</MenuItem>
                    <MenuItem value="2">Group 2</MenuItem>
                    <MenuItem value="3">Group 3</MenuItem>
                  </Select>
                )}
              />

              {errors.group && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
  )
}

export default SurveyForm