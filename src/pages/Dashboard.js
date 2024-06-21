
import React, { useContext, useState, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";

import welcomeBanner from "../assets/images/welcome-banner.png";
import ReactApexChart from "react-apexcharts";
import { ClipboardList, CheckCircle, ClipboardType, MessageCircle } from "lucide-react";
import ActiveSurveys from "../components/RecentActivity";
import ActiveAssessments from "../components/ActiveAssessments";
import Footer from "../components/Footer";
import DashboardSkeleton from "../components/DashboardSkeleton";
import { AuthContext } from "../context/AuthContext";

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

export default function Home() {
  const { theme, themeColor } = useContext(ThemeContext);
  const [options, setOptions] = useState(areaChartOptions);
  const [loading, setLoading] = useState(false);

  const gridData = [
 
    {
      title: "Active Assessments",
      count: 5,
      name: "Assessments",
      data: [2, 5, 30, 8, 10, 25, 15, 20,   35],
      icon: <ClipboardList size={20} />,
    },
    {
      title: "Completed Assessments",
      count: 234,
      name: "Assessments",
      data: [134, 10, 20, 120, 30, 60, 90,  150, 180, ],
      icon: <CheckCircle size={20} />,
    },
    {
      title: "Pending Surveys",
      count: 10,
      name: "Surveys",
      data: [1, 2, 6, 7, 3, 4, 5, 8, 10],
      icon: <ClipboardType size={20} />,
    },
    {
      title: "Total Responses",
      count: 145,
      name: "Responses",
      data: [10, 20, 50, 110, 130, 75, 90, 100,  145],
      icon: <MessageCircle size={20} />,
    },
  ];
  
  const themeColors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

  const date = new Date();
  function hexToRGBA(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
      return `rgb(${r}, ${g}, ${b})`;
    }
  }

  const hour = date.getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Bueno días";
  } else if (hour < 18) {
    greeting = "Buenas tardes";
  } else {
    greeting = "Buenas noches";
  }

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div
      className={` h-full p-4`}
      style={{
        color: theme === "light" ? themeColor : "#f5f5f5",
        backgroundColor: theme === "dark" ? "#111113" : "#F3F4F6",
      }}
    >
      <div
        className=" relative flex flex-col p-4 items-center  h-full rounded-lg"
        style={{
          backgroundColor: theme === "dark" ? "#111113" : "#F3F4F6",
        }}
      >
        {/*  top scorecards */}
        <div className="w-full relative h-72">
          <div
            className="flex flex-row w-full h-full justify-between rounded-md welcome-banner"
            style={{
              backgroundColor: theme === "dark" ? "#1b1c1f" : themeColor,
            }}
          >
            <div className="flex flex-col p-4 gap-2">
              <h2 className="text-[#fcfcfc] text-3xl font-bold">
                {greeting}, Victory
                <span
                  style={{
                    display: "inline-block",
                    animation: "wave 1s infinite",
                    transformOrigin: "70% 70%",
                  }}
                >
                  👋
                </span>
                <style jsx>{`
                  @keyframes wave {
                    0%,
                    100% {
                      transform: rotate(0);
                    }
                    50% {
                      transform: rotate(15deg);
                    }
                  }
                `}</style>
              </h2>
              <p className="text-slate-200 text-base font-light">
                {date.toDateString()}
              </p>
            </div>

            <div className="flex flex-col p-4">
              <img src={welcomeBanner} alt="Welcome Banner" />
            </div>
          </div>
        </div>

        {/*  middle scorecards just two */}

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
                  className="grid-item"
                  style={{
                    backgroundColor: theme === "dark" ? "#1b1c1f" : "#f5f5f5",
                    borderColor: theme === "dark" ? "#1d2630" : "",
                  }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
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
                      backgroundColor: theme === "dark" ? "#131920" : "#f8f9fa",
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
                            backgroundColor: theme === "dark" ? "#131920" : "#f8f9fa",
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
        </div>
        <div className=" w-full relative top-0">
          <div className="grid-container-2 ">
            <div
              className="grid-item"
              style={{
                backgroundColor: theme === "dark" ? "#1b1c1f" : "#f5f5f5",
                borderColor: theme === "dark" ? "#1d2630" : "",
              }}
            >
              <ActiveAssessments />
            </div>
            <div
              className="grid-item"
              style={{
                backgroundColor: theme === "dark" ? "#1b1c1f" : "#f5f5f5",
                borderColor: theme === "dark" ? "#1d2630" : "",
              }}
            >
              <ActiveSurveys />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
