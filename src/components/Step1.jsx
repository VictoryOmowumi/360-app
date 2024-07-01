import React, { useContext} from "react";
import AssessmentContext from "../context/AssessmentContext";
import ThemeContext from "../context/ThemeContext";
import useFetch from "../hooks/useFetch";
import baseUrl from "../baseUrl";
import { Controller } from "react-hook-form";
import { TextField, Select, MenuItem } from "@mui/material";
import { questionnaires } from "../data/questionnaires";
const Step1 = () => {
  const { assessmentType, handleAssessmentTypeChange, nextStep, control } =
    useContext(AssessmentContext);
  const { theme, themeColor } = useContext(ThemeContext);
  const { data, loading, error } = useFetch( `${baseUrl}CyclesAndRoles/api/CyclesAndRoles/GetQuestionnaireTypes`
  );



  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      style={{
        color: theme === "dark" ? "#f0f0f0" : "#444",
      }}
    >
  
      <form className="flex gap-5 w-full flex-col">
      <div className="flex flex-col gap-2">
          <label htmlFor="select-questionnaire" className="text-sm">
            Select Assessment Type
          </label>
          <Controller
            name="assessmentType"
            control={control}
            rules={{ required: "Assessment Type is required" }}
            render={({ field }) => (
              <Select
                {...field}
                id="select-assessment-type"
                value={field.value || ""}
                onChange={(e) => {
                  field.onChange(e);
                  handleAssessmentTypeChange(e);
                }}
                variant="outlined"
                style={{ width: '100%' }}
                error={!!field.error}
              >
                <MenuItem value="">Select Assessment Type</MenuItem>
                {data.map((assessmentType) => (
                  <MenuItem key={assessmentType.code} value={assessmentType.code}>
                    {assessmentType.description}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="assessment-title" className="text-sm">
            Assessment Title
          </label>
          <Controller
            name="assessmentTitle"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                id="assessment-title"
                variant="outlined"
                value={field.value || ""}
                onChange={(e) => {
                  field.onChange(e);
                  
                }}
                style={{ width: '100%' }}
                error={!!field.error}
                helperText={field.error ? field.error.message : null}
              />
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="select-questionnaire" className="text-sm">
            Select Questionnaire
          </label>
          <Controller
            name="questionnaire"
            control={control}
            rules={{ required: "Questionnaire is required" }}
            render={({ field }) => (
              <Select
                {...field}
                id="select-questionnaire"
                value={field.value || ""}
                onChange={(e) => {
                  field.onChange(e);
                 
                }}
                variant="outlined"
                style={{ width: '100%' }}
                error={!!field.error}
              >
                <MenuItem value="">Select Questionnaire</MenuItem>
                {questionnaires.map((questionnaire) => (
                  <MenuItem key={questionnaire.id} value={questionnaire.id}>
                    {questionnaire.title}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </div>
      </form>

      <div className="flex justify-end mt-4">
        <button
          className="group  relative inline-flex items-center overflow-hidden rounded  px-8 py-3"
          style={{
            backgroundColor: themeColor,
            color: theme === "dark" ? "#f5f5f5" : "#f5f5f5",
          }}
          onClick={nextStep}
        >
          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
          <span className=" font-medium transition-all group-hover:me-4">
            Save
          </span>
        </button>
      </div>
    </div>
  );
};

export default Step1;
