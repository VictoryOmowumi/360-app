import React, { useContext, useState } from "react";
import { Controller } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Trash2 } from "lucide-react";
import CreateQuestionnaireContext from "../context/CreateQuestionnaireContext";
import baseUrl from "../baseUrl";
import useFetch from "../hooks/useFetch";
const QuestionForm = ({ control, errors, theme, themeColor }) => {
  const {
    questionText,
    setQuestionText,
    questionType,
    setQuestionType,
    optionText,
    setOptionText,
    options,
    addOption,
    removeOption,
    addQuestion,
    setOptions,
  } = useContext(CreateQuestionnaireContext);
  const [selectedScale, setSelectedScale] = useState(null);
  const { data, error } = useFetch(
    `${baseUrl}CyclesAndRoles/api/CyclesAndRoles/GetQuestionTypes`
  );
  const { data: scalesData, error: scalesError } = useFetch(
    `${baseUrl}CyclesAndRoles/api/CyclesAndRoles/GetScales`
  );
  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="mb-2">
        <label className="block text-sm mb-1 ml-2">Question</label>
        <TextField
          fullWidth
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          style={{
            "--tw-ring-color": themeColor,
            borderColor: errors.title ? themeColor : "",
            border:
              theme === "dark" ? "2px solid #a1a1a1" : "2px solid #f3f4f6",
            borderRadius: "0.375rem",
          }}
        />
      </div>
      <div className="mb-2 ">
        <label className="block text-sm mb-1 ml-2">Question Type</label>
        <Controller
          name="questionType"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              fullWidth
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              style={{
                "--tw-ring-color": themeColor,
                borderColor: errors.title ? themeColor : "",
                border:
                  theme === "dark" ? "2px solid #a1a1a1" : "2px solid #f3f4f6",
                borderRadius: "0.375rem",
              }}
              className=""
            >
              <MenuItem value="">Select Question Type</MenuItem>
              {data?.map((type) => (
                <MenuItem key={type.code} value={type.description}>
                  {type.description}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </div>
      {questionType === "Multiple Choice" && (
        <div className="">
          <label className="block text-sm mb-1 ml-2">Options</label>
          <div className="flex w-full h-full items-center mb-2 gap-4">
            <TextField
              fullWidth
              value={optionText}
              onChange={(e) => setOptionText(e.target.value)}
              placeholder="Option text"
              style={{
                "--tw-ring-color": themeColor,
                borderColor: errors.title ? themeColor : "",
                border:
                  theme === "dark" ? "2px solid #a1a1a1" : "2px solid #f3f4f6",
                borderRadius: "0.375rem",
              }}
            />
            <button
              onClick={addOption}
              disabled={!optionText}
              className="ml-2 w-[150px] h-auto bg-blue-500 text-white px-3 py-4 rounded"
            >
              Add Option
            </button>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 rounded-lg p-2"
              >
                <p className="text-gray-700">
                  <span className="font-semibold mr-2">{index + 1}.</span>
                  {option}
                </p>
                <button
                  onClick={() => removeOption(index)}
                  className="bg-red-500 text-white rounded-full p-3 hover:bg-red-700 focus:outline-none"
                >
                  <Trash2 />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {questionType === "Rating 1 - 5" && (
        <div className="">
  <label className="block text-sm mb-1 ml-2">Rating Scale</label>
  <div className="flex w-full h-full items-center mb-2 gap-4">
    <Select
      fullWidth
      value={optionText}
      onChange={(e) => setOptionText(e.target.value)}
      placeholder="Option text"
      style={{
        "--tw-ring-color": themeColor,
        borderColor: errors.title ? themeColor : "",
        border:
          theme === "dark" ? "2px solid #a1a1a1" : "2px solid #f3f4f6",
        borderRadius: "0.375rem",
      }}
    >
      <MenuItem value="">Select Scale</MenuItem>
      {scalesData?.map((scale) => (
        scale.scaleOptions.map((option) => (
          <MenuItem key={option.optionValue} value={option.optionText}>
            {option.optionText}
          </MenuItem>
        ))
      ))}
    </Select>
    <button
      onClick={addOption}
      disabled={!optionText}
      className="ml-2 w-[150px] h-auto bg-blue-500 text-white px-3 py-4 rounded"
    >
      Add Option
    </button>
  </div>
  <ul className="list-disc list-inside space-y-2">
    {options.map((option, index) => (
      <li
        key={index}
        className="flex justify-between items-center bg-gray-100 rounded-lg p-2"
      >
        <p className="text-gray-700">
          <span className="font-semibold mr-2">{index + 1}.</span>
          {option}
        </p>
        <button
          onClick={() => removeOption(index)}
          className="bg-red-500 text-white rounded-full p-3 hover:bg-red-700 focus:outline-none"
        >
          <Trash2 />
        </button>
      </li>
    ))}
  </ul>
</div>
      )}
     
      <button
        variant="contained"
        color="primary"
        onClick={addQuestion}
        disabled={!questionText || !questionType}
        className="w-max h-auto bg-slate-600 text-white px-3 py-3 rounded"
      >
        Add Question
      </button>
    </div>
  );
};

export default QuestionForm;
