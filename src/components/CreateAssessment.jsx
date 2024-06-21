import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ConfirmModal from "./ConfirmModal";
import SuccessModal from "./SuccessModal";
import AssessmentContext from "../context/AssessmentContext";

const CreateAssessment = () => {
  const { theme, themeColor } = useContext(ThemeContext);
  const { step, loading, showConfirmModal, setShowConfirmModal,  showSuccessModal } = useContext(AssessmentContext);
 
  return (
    <div
    className={` h-full p-4`}
    style={{
      color: theme === "light" ? themeColor : "#f0f0f0",
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
      <h1
        className="text-3xl mb-4"
        style={{
          color: theme === "dark" ? "#f0f0f0" : "#444",
        }}
      >
        {" "}
        Create Assessment
      </h1>

      <div
        className="flex w-full rounded p-2"
        style={{
          backgroundColor: theme === "dark" ? "#1b1c1f" : "#f0f0f0",
        }}
      >
        <div className="w-full px-3">
          <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-[1px] after:-translate-y-1/2 after:rounded-lg after:bg-gray-300">
            <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
              <li
                className={`flex items-center gap-2  p-4 rounded `}
                style={{
                  color: step === 1 ? themeColor : "gray",
                  background: theme === "dark" ? "#111113" : "#f0f0f0",
                }}
              >
                <span
                  className="size-6 rounded-sm text-center text-[12px]/6 font-bold"
                  style={{
                    backgroundColor: step === 1 ? themeColor : "",
                    color: step === 1 ? "#f0f0f0" : "gray",
                    transition: " all 0.3s",
                  }}
                >
                  1
                </span>
                <span className="hidden sm:block"> Select Assessment Type</span>
              </li>

              <li
                className={`flex items-center gap-2  p-4 rounded `}
                style={{
                  color: step === 2 ? themeColor : "gray",
                  background: theme === "dark" ? "#111113" : "#f0f0f0",
                }}
              >
                <span
                  className="size-6 rounded-sm text-center text-[12px]/6 font-bold"
                  style={{
                    backgroundColor: step === 2 ? themeColor : "",
                    color: step === 2 ? "#f0f0f0" : "gray",
                    transition: " all 0.3s",
                  }}
                >
                  2
                </span>
                <span className="hidden sm:block"> Enter Information </span>
              </li>

              <li
                className={`flex items-center gap-2  p-4 rounded `}
                style={{
                  color: step === 3 ? themeColor : "gray",
                  background: theme === "dark" ? "#111113" : "#f0f0f0",
                }}
              >
                <span
                  className="size-6 rounded-sm text-center text-[12px]/6 font-bold"
                  style={{
                    backgroundColor: step === 3 ? themeColor : "",
                    color: step === 3 ? "#f0f0f0" : "gray",
                    transition: " all 0.3s",
                  }}
                >
                  3
                </span>
                <span className="hidden sm:block"> Review Information </span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div
        className="mt-2 p-4 rounded"
        style={{
          backgroundColor: theme === "dark" ? "#1b1c1f" : "#f0f0f0",
          color: theme === "dark" ? "#f0f0f0" : "#444",
        }}
      >
        {step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : <Step3 
            showConfirmModal={setShowConfirmModal}
        />}
      </div>
      {
        showConfirmModal && <ConfirmModal  
          showConfirmModal={showConfirmModal}
    setShowConfirmModal={setShowConfirmModal}
         />
      }

 {loading && (
        <div className="fixed inset-0 bg-[#111113] z-[999] bg-opacity-50 flex justify-center items-center w-full">
         <div className="loader"
           style={{
            "--clr": themeColor
           }}
         ></div>
        </div>
      )}
      {
        showSuccessModal && <SuccessModal />
      }

      </div>
    </div>
  );
};

export default CreateAssessment;
