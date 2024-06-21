import React, { useContext } from "react";
import AssessmentContext from "../context/AssessmentContext";
import ThemeContext from "../context/ThemeContext";
import useFetch from "../hooks/useFetch";
import baseUrl from "../baseUrl";
const Step1 = () => {
  const { assessmentType, handleAssessmentTypeChange, nextStep } =
    useContext(AssessmentContext);
  const { theme, themeColor } = useContext(ThemeContext);
  const { data, loading, error } = useFetch(
    `${baseUrl}CyclesAndRoles/api/CyclesAndRoles/GetQuestionnaireTypes`
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      style={{
        color: theme === "dark" ? "#f0f0f0" : "#444",
      }}
    >
      <h2 className="text-2xl mb-4">Select Assessment Type</h2>
      <form className="flex gap-4 w-full flex-col">
        {data.map((item) => (
          <div
            key={item.code}
            className="flex items-center ps-4 border  rounded "
            style={{
              borderColor: theme === "dark" ? "gray" : "",
            }}
          >
            <input
              id={item.description.toLowerCase()}
              type="radio"
              value={item.description}
              checked={assessmentType === item.description}
              onChange={handleAssessmentTypeChange}
              style={{ "--clr": themeColor }}
              className="w-4 h-4 text-blue-600  border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={item.description.toLowerCase()}
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              style={{
                color: theme === "dark" ? "#f5f5f5" : "",
              }}
            >
              {item.description}
            </label>
          </div>
        ))}
      </form>

      <div className="flex justify-end mt-4">
        <button
           className="group relative inline-flex items-center overflow-hidden rounded  px-8 py-3"
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
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default Step1;
