import React, { useContext } from "react";
import AssessmentContext from "../context/AssessmentContext";
import ThemeContext from "../context/ThemeContext";
import { Trash2 } from "lucide-react";
const Step3 = ({ showConfirmModal}) => {
  const { prevStep, getValues, assessmentType } =
    useContext(AssessmentContext);

  const { theme, themeColor } = useContext(ThemeContext);

  const values = getValues();

  const removeResponder = (index) => {
    const updatedResponders = values.responderList.filter(
      (responder, i) => i !== index
    );
    console.log("Updated Responders:", updatedResponders);
  };

  return (
    <div>
      <div>
        {assessmentType === "Review" ? (
          <div className="flex flex-col gap-4 border">
            <div
              className="flex gap-5 flex-col px-4 shadow-sm rounded-md"
              style={{
                backgroundColor: theme === "dark" ? "#1b1c1f" : "#f0f0f0",
              }}
            >
              <p className="text-lg mt-4 ">
                <span className="font-semibold">Subject:</span> {values.subject}
              </p>
              <p className="text-lg ">
                <span className="font-semibold">Assessment Type:</span>{" "}
                {assessmentType}
              </p>
              <p className="text-lg ">
                <span className="font-semibold">Review Cycle:</span>{" "}
                {values.reviewCycle}
              </p>
            </div>
            <div
              className="flex gap-4 flex-col p-4 shadow-sm rounded-md"
              style={{
                backgroundColor: theme === "dark" ? "#131920" : "#f0f0f0",
              }}
            >
              <p className="text-lg font-semibold">Responders</p>
              <table
                className="min-w-full divide-y divide-gray-200 "
                style={{
                  color: theme === "dark" ? "#c5c5c5" : "#444",
                  backgroundColor: theme === "dark" ? "#1d2630" : "",
                }}
              >
                <thead className="bg-gray-400 rounded-md">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Responder
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200">
                  {values.responderList.map((responder, index) => (
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
            </div>
          </div>
        ) : (
          <div>
            <p className="text-lg">
              <span className="font-semibold">Survey Name</span> {values.survey}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Mail Group:</span> {values.group}
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-between gap-4 mr-5 mt-4">
      <div className="flex justify-start mt-4">
          <button
            type="button"
            className="group relative inline-flex items-center overflow-hidden rounded  px-8 py-3"
            style={{
              color: themeColor,
              border: `1px solid ${themeColor}`,
            }}
            onClick={prevStep}
          >
       <span className="absolute -start-full transition-all group-hover:start-4">
    <svg
      className="size-5 rotate-[-180deg]"
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
            <span className="text font-medium transition-all group-hover:ms-4">
              {" "}
              Back{" "}
            </span>
          </button>
        </div>
        <button
        
          className=" text-white px-6 py-2 rounded"
            style={{ backgroundColor: themeColor }}
          onClick={() => showConfirmModal(true)}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Step3;
