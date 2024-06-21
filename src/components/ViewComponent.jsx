import React, { useContext } from "react";
import { responses } from "../data/responses";
import { useParams } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import moment from "moment";
const ViewResponseComponent = () => {
  const { theme, themeColor } = useContext(ThemeContext);
  const { id } = useParams();

  const response = responses?.find((response) => response.id === Number(id));

  if (!response) {
    return <div>Response not found</div>;
  }
  return (
    <div
      className={` h-full p-4`}
      style={{
        color: theme === "light" ? "#1a1a1a" : "white",
        backgroundColor: theme === "dark" ? "#111113" : "#F3F4F6",
      }}
    >
      <h2 className="text-2xl font-bold mb-4">{response.questionnaireTitle}</h2>
      <div
        className="flex justify-between items-center p-4 rounded-md"
        style={{
          color: theme === "light" ? "#1a1a1a" : "white",
          backgroundColor: theme === "dark" ? "#011222" : "#f5f5f5",
        }}
      >
        <p className="flex flex-col gap-2">
          <strong className="font-semibold">Respondent:</strong>{" "}
          {response.respondent}
        </p>
        <p className="flex flex-col gap-2">
          <strong className="font-semibold">Assessment Type:</strong>{" "}
          {response.assessmentType}
        </p>
        <p className="flex flex-col gap-2">
          <strong className="font-semibold">Response Date:</strong>
          {moment(response.responseDate).format("Do MMMM YYYY")} -{" "}
          {moment(response.responseDate).format("h:mm a")}
        </p>
      </div>

      <div
        className="flex flex-col mt-5 p-4 rounded-md"
        style={{
          color: theme === "light" ? "#1a1a1a" : "white",
          backgroundColor: theme === "dark" ? "#011222" : "#f5f5f5",
        }}
      >
        <h3 className="text-xl font-bold  mb-2 ">Assessment Responses</h3>
        <table className="w-full mt-4 text-left table-auto border">
          <thead
            className="border"
            style={{
              color: theme === "light" ? "#1a1a1a" : "white",
              backgroundColor: theme === "dark" ? "#111113" : "#F3F4F6",
            }}
          >
            <tr>
              <th className="px-4 py-2">Question</th>
              <th className="px-4 py-2">Response</th>
            </tr>
          </thead>
          <tbody>
            {response.responses.map((resp, index) => (
              <tr key={index} className="">
                <td className="border px-4 py-3">{resp.question}</td>
                <td className="border px-4 py-3">{resp.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewResponseComponent;
