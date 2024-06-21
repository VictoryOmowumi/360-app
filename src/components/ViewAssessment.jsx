import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { useParams } from "react-router-dom";
import { assessments } from "../data/assessments";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  CircleDashed,
  ClipboardList,
  ClipboardType,
  MessageCircle,
  ArrowBigLeft,
} from "lucide-react";
import ReactApexChart from "react-apexcharts";

const areaChartOptions = {
  chart: {
    id: "new-stack-chart",
    type: "bar",
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      columnWidth: "30%",
    },
  },
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
  },
};

const hexToRGBA = (hex, opacity) => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const ViewAssessment = () => {
  const { theme, themeColor } = useContext(ThemeContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const assessment = assessments.find((item) => item.id === parseInt(id));
  const [options, setOptions] = useState(areaChartOptions);
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "green";
      case "Pending":
        return "orange";
      case "In Progress":
        return "blue";
      default:
        return "black";
    }
  };
  const gridData = [
    {
      title: "Total Responses",
      count: assessment.totalResponses,
      name: "Responses",
      data: [20, 30, 25, 35, 40, 50, 60], // Daily data for the past week
      icon: <MessageCircle size={20} />,
    },
    {
      title: "Completed Responses",
      count: assessment.totalCompleteResponses,
      name: "Responses",
      data: [15, 20, 18, 22, 25, 30, 35], // Daily data for the past week
      icon: <CheckCircle2 size={20} />,
    },
    {
      title: "In Progress",
      count: assessment.totalIncompleteResponses,
      name: "Responses",
      data: [5, 10, 8, 12, 15, 20, 25], // Daily data for the past week
      icon: <ClipboardList size={20} />,
    },
    {
      title: "Pending Responses",
      count: assessment.totalPendingResponses,
      name: "Responses",
      data: [10, 15, 12, 17, 20, 25, 30], // Daily data for the past week
      icon: <ClipboardType size={20} />,
    },
  ];

  const themeColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={` h-full p-4`}
      style={{
        color: theme === "light" ? themeColor : "white",
        backgroundColor: theme === "dark" ? "#111113" : "#F3F4F6",
      }}
    >
      <div className="flex pl-3 mb-2 justify-between items-center">
        <button
          className="flex items-center gap-2 p-2 rounded-md bg-opacity-50"
          style={{
            color: `${themeColor}FF`,
            background: `${themeColor}50`,
            opacity: 1,
          }}
          onClick={goBack}
        >
          <ArrowBigLeft size={24} />
          Go Back
        </button>
      </div>

      <div
        className="flex flex-col rounded-md p-3 gap-4"
        style={{
          color: theme === "dark" ? "#c5c5c5" : "#444",
          backgroundColor: theme === "dark" ? "#1b1c1f" : "#f0f0f0",
        }}
      >
        {/* button to close assessment if it's not completed */}
        {assessment.status !== "Completed" && (
          <div className="flex gap-5 w-full justify-between">
            <div className=""></div>
            <button
              className="p-3 rounded bg-opacity-50"
              style={{
                color: theme === "dark" ? "#f5f5f5" : "#f5f5f5",
                background: "red",
                opacity: 0.8,
              }}
            >
              Close Assessment
            </button>
          </div>
        )}

        <div
          className="rounded-md p-3 gap-4 border  "
          style={{
            color: theme === "dark" ? "#c5c5c5" : "#f5f5f5",
            backgroundColor: theme === "dark" ? "#1b1c1f" : themeColor,
            borderColor: theme === "dark" ? "#333333" : themeColor,
          }}
        >
          <div className="flex gap-5 mb-4 w-full justify-between">
            <div className="">
              <h1
                className="text-3xl"
                style={{
                  color: theme === "dark" ? "#f5f5f5" : "#f5f5f5",
                }}
              >
                Assessment Details
              </h1>
            </div>
            <div
              className="px-3 py-2 flex justify-center items-center  gap-2 rounded bg-white"
              style={{
                color: getStatusColor(assessment.status),
              }}
            >
              {assessment.status}
              {assessment.status === "Completed" ? (
                <CheckCircle2 size={24} />
              ) : (
                <CircleDashed size={24} />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-base font-medium">
              <span className="font-semibold">Title:</span> {assessment.title}
            </p>
            <p className="text-base font-medium">
              <span className="font-semibold">Type:</span> {assessment.type}
            </p>
            <p className="text-base font-medium">
              <span className="font-semibold">Date:</span>{" "}
              {assessment.startDate} - {assessment.dueDate}
            </p>
          </div>

          <div className="flex justify-between w-full gap-3">
            <div className=""></div>
            <p className="text-sm">
              <span className="font-semibold">Created By:</span>{" "}
              {assessment.createdBy}
            </p>
          </div>
        </div>
        <div className=" w-full relative top-0 ">
          <div className="grid-container ">
            {gridData.map((item, index) => {
              const optionsWithColor = {
                ...options,
                colors: [themeColors[index % themeColors.length]], // Use modulo to cycle through colors if there are more series than colors
              };

              return (
                <div
                  key={index}
                  className="grid-item "
                  style={{
                    backgroundColor: theme === "dark" ? "#1b1c1f" : "#f3f4f6",
                    borderColor: theme === "dark" ? "#333333" : "",
                  }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-6 ">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-md 
                          bg-opacity-50 
                      `}
                      style={{
                        backgroundColor: hexToRGBA(
                          themeColors[index % themeColors.length],
                          0.3
                        ),
                        color: themeColors[index % themeColors.length],
                        backgroundBlendMode: "overlay",
                      }}
                    >
                      {item.icon}
                    </div>
                    <h2
                      className="text-base font-bold text-slate-600"
                      style={{
                        color: theme === "dark" ? "#f8f9fa" : "#131920",
                      }}
                    >
                      {item.title}
                    </h2>
                  </div>

                  <div
                    className="flex w-full mt-2 rounded-lg"
                    style={{
                      backgroundColor: theme === "dark" ? "#222223" : "#f8f9fa",
                    }}
                  >
                    <div className="flex-[2] p-2">
                      <ReactApexChart
                        options={optionsWithColor}
                        series={[
                          {
                            name: item.name,
                            data: item.data,
                          },
                        ]}
                        type="bar"
                        height={100}
                        width={170}
                        style={{
                          backgroundColor:
                            theme === "dark" ? "#222225" : "#f8f9fa",
                        }}
                      />
                    </div>
                    <div className="flex-[1] flex flex-col justify-center items-center">
                      <p
                        className="text-center text-2xl font-bold text-slate-600"
                        style={{
                          color: theme === "dark" ? "#f8f9fa" : "#131920",
                        }}
                      >
                        {item.count}
                      </p>
                      <p
                        className="text-center text-sm font-medium"
                        style={{
                          color: themeColors[index % themeColors.length],
                        }}
                      >
                        {item.count / 100}%
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end mr-5">
            <p className="text-xs">Data for the past week</p>
          </div>
        </div>

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
                backgroundColor: theme === "dark" ? "#1d2630" : themeColor,
              }}
            >
              <tr className="">
                <th
                  className="border   py-3 px-3"
                  style={{
                    borderColor: theme === "dark" ? "#333333" : "",
                  }}
                >
                  #
                </th>
                <th
                  className="border   py-3 px-3"
                  style={{
                    borderColor: theme === "dark" ? "#333333" : "",
                  }}
                >
                  Question
                </th>
                <th
                  className="border   py-3 px-3"
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
              {assessment.questions.map((question, index) => (
                <tr key={index}>
                  <td
                    className="border   py-3 px-2"
                    style={{
                      borderColor: theme === "dark" ? "#333333" : "",
                    }}
                  >
                    {index + 1}
                  </td>
                  <td
                    className="border   py-3 px-2"
                    style={{
                      borderColor: theme === "dark" ? "#333333" : "",
                    }}
                  >
                    {question.question}
                  </td>
                  <td
                    className="border   py-3 px-2"
                    style={{
                      borderColor: theme === "dark" ? "#333333" : "",
                    }}
                  >
                    {question.type}
                  </td>
                  <td
                    className="border   py-3 px-2"
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

export default ViewAssessment;
