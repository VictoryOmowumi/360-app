import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Link, useParams } from "react-router-dom";
import { questionnaires } from "../data/questionnaires";
import { Edit } from "lucide-react";
const ViewQuestionnaire = () => {
  const { theme, themeColor } = useContext(ThemeContext);
  const { id } = useParams();
  const questionnaire = questionnaires.find((item) => item.id === parseInt(id));
  console.log(questionnaire);
  return (
    <div
      className={` h-full p-4`}
      style={{
        color: theme === "light" ? themeColor : "white",
        backgroundColor: theme === "dark" ? "#111113" : "#F3F4F6",
      }}
    >
      <div
        className="flex flex-col rounded-md p-3 gap-4"
        style={{
          color: theme === "dark" ? "#c5c5c5" : "#444",
          backgroundColor: theme === "dark" ? "#1b1c1f" : "#f0f0f0",
        }}
      >
        <div className="flex gap-5 w-full justify-between">
          <div className="">
            <h1
              className="text-3xl"
              style={{
                color: theme === "dark" ? "#f5f5f5" : "#444",
              }}
            >
              Questionnaire Details
            </h1>
          </div>
          <button
            className="px-4 py-2 text-lg rounded bg-opacity-50"
            style={{
              color: theme === "dark" ? "#f5f5f5" : "#f5f5f5",
              background: "red",
            }}
          >
            Delete
          </button>
        </div>

        <div
          className="rounded-md p-3 gap-4 border"
          style={{
            color: theme === "dark" ? "#c5c5c5" : "#f5f5f5",
            backgroundColor: theme === "dark" ? "#1b1c1f" : themeColor,
            borderColor: theme === "dark" ? "#333333" : themeColor,
          }}
        >
          <div className="flex gap-5 w-full justify-between">
            <div className=""></div>
            <div className="px-3 py-2  rounded bg-white">
              <Link
                to={`/questionnaires/edit/${questionnaire.id}`}
                className="text-blue-500"
              >
                <Edit size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold">
              <span className="font-semibold">Title:</span>{" "}
              {questionnaire.title}
            </p>
            <p className="text-lg font-semibold">
              <span className="font-semibold">Type:</span> {questionnaire.type}
            </p>
            <p className="text-lg font-semibold">
              <span className="font-semibold">Description:</span>{" "}
              {questionnaire.description}
            </p>
          </div>

          <div className="flex justify-between w-full gap-3 mt-4">
            <div className=""></div>
            <p className="text-sm font-semibold">
              <span className="font-semibold">Created By:</span>{" "}
              {questionnaire.createdBy} - {questionnaire.createdAt}
            </p>
          </div>
        </div>
        {/* table */}
        <div className="mt-5">
          <table
            className="table-auto w-full text-left border  "
            style={{
              color: theme === "dark" ? "#f0f0f0" : "#444",
              borderColor: theme === "dark" ? "#333333" : "",
            }}
          >
            <thead
              className=" "
              style={{
                color: theme === "dark" ? "#f5f5f5" : "#f5f5f5",
                backgroundColor: theme === "dark" ? "" : themeColor,
              }}
            >
              <tr className="">
                <th
                  className="border py-3 px-3"
                  style={{
                    borderColor: theme === "dark" ? "#333333" : "",
                  }}
                >
                  #
                </th>
                <th
                  className="border py-3 px-3"
                  style={{
                    borderColor: theme === "dark" ? "#333333" : "",
                  }}
                >
                  Questions
                </th>
                <th
                  className="border py-3 px-3"
                  style={{
                    borderColor: theme === "dark" ? "#333333" : "",
                  }}
                >
                  Type
                </th>
                <th
                  className="border   py-3 px-3"
                  style={{
                    borderColor: theme === "dark" ? "#333333" : "",
                  }}
                >
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              {questionnaire.questions.map((question, index) => (
                <tr key={index}>
                  <td
                    className="border py-3 px-2"
                    style={{
                      borderColor: theme === "dark" ? "#333333" : "",
                    }}
                  >
                    {index + 1}
                  </td>
                  <td
                    className="border py-3 px-2"
                    style={{
                      borderColor: theme === "dark" ? "#333333" : "",
                    }}
                  >
                    {question.text}
                  </td>
                  <td
                    className="border py-3 px-2"
                    style={{
                      borderColor: theme === "dark" ? "#333333" : "",
                    }}
                  >
                    {question.type}
                  </td>
                  <td
                    className="border py-3 px-2"
                    style={{
                      borderColor: theme === "dark" ? "#333333" : "",
                    }}
                  >
                    {question?.options?.join(", ") || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewQuestionnaire;
