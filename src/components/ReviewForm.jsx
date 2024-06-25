import React from 'react';
import { Controller} from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Trash2 } from "lucide-react";

const ReviewForm = ({
    theme,
    subjectOptions,
    subjectLoading,
    fetchSubjects,
    cycleData,
    roleData,
    control,
    register,
    errors,
    clearErrors,
    addResponder,
    responderList,
    removeResponder,
    isSavingSubject,
    cycleLoading,
    roleLoading,
    cycleError,
    roleError,
}) => {


  return (
    <div className="flex flex-col gap-4 mt-5">
      <div
        className="flex flex-col gap-2"
        style={{
          color: theme === "dark" ? "#f5f5f5" : "",
        }}
      >
        <label className="text-sm">Select Subject</label>
        <Controller
          name="subject"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={subjectOptions}
              getOptionLabel={(option) => option}
              loading={subjectLoading}
              onInputChange={(_, value) => fetchSubjects(value)}
              style={{
                color: "",
              }}
              renderInput={(params) => (
                <TextField {...params} {...field} />
              )}
              onChange={(_, data) => field.onChange(data)}
            />
          )}
        />
        {errors.subject && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm">Select Review Cycle</label>
        <Controller
          name="reviewCycle"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              defaultValue=""
              style={{
                color: "",
              }}
              loading={cycleLoading}
              error={cycleError}
            >
              <MenuItem value="">Select Review Cycle</MenuItem>
              {cycleData.map((cycle) => (
                <MenuItem key={cycle.cycleId} value={cycle.cycleId}>
                  {cycle.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors.reviewCycle && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm">Add Responder</label>
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          style={{
            color: "",
          }}
          {...register("responder", {
            required: "This field is required",
            onChange: () => clearErrors("responder"),
          })}
        />
        {errors.responder && (
          <span className="text-red-500">{errors.responder.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm">Select Responder Role</label>
        <Controller
          name="responderRole"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <Select
              {...field}
              value={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
              style={{
                color: "",
              }}
              error={roleError}
              loading={roleLoading}
            >
              <MenuItem value="">Select Responder Role</MenuItem>
              {roleData.map((role) => (
                <MenuItem key={role.code} value={role.description}>
                  {role.description}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors.responderRole && (
          <span className="text-red-500">{errors.responderRole.message}</span>
        )}
      </div>

      {errors.responderList && <p className="text-red-500">{errors.responderList.message}</p>}

      <div className="w-max flex flex-col gap-2">
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={addResponder}
        >
          Add Responder
        </button>
      </div>
      {responderList?.length > 0 && (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Responder
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody
            className="bg-white divide-y divide-gray-200"
            style={{
              color: theme === "dark" ? "#f5f5f5" : "",
              backgroundColor: theme === "dark" ? "#2d2d2d" : "",
            }}
          >
            {responderList.map((responder, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {responder.responder}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {responder.responderRole}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                  <button
                    type="button"
                    onClick={() => removeResponder(index)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <Trash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReviewForm;
