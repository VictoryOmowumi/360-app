import React, { useState } from "react";
import logo from "../assets/images/logo360.png";
import formBg from "../assets/images/formBg.png";
import { surveyQuestions } from "../data/surveyQuestions";
import moment from "moment";
const AssessmentFormLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;
  const totalPages = Math.ceil(surveyQuestions.length / questionsPerPage);
  const date = new Date().toLocaleDateString();
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderQuestions = () => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const currentQuestions = surveyQuestions.slice(
      startIndex,
      startIndex + questionsPerPage
    );

    return currentQuestions.map((question, index) => (
      <div key={question.id} className="mb-4 flex flex-col gap-3 bg-white shadow-sm p-2 rounded">
        <p className="font-semibold text-lg ">
          <span className="font-semibold mr-2">{index + 1 + startIndex}.</span>
          {question.text}
        </p>
        {question.type === "Rating" && (
          <div className="mt-2 flex gap-4">
            {question.options.map((option, index) => (
              <label key={index} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  className=" text-[#1dac6c]"
                  style={{ "--clr": "#2FA432" }}
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        )}
        {question.type === "Text" && (
          <input
            type="text"
            className="form-input mt-1 p-3 block w-full border-gray-300 outline-none rounded-md shadow-sm focus:border-[#1dac6c] focus:ring-1 focus:ring-[#1dac6c] focus:ring-opacity-50"
            placeholder="Enter your response"
          />
        )}
        {question.type === "Multiple Choice" && (
          <div className="mt-2 flex flex-col gap-3">
            {question.options.map((option, index) => (
              <label key={index} className="flex relative items-center mt-2">
                <input
                  type="checkbox"
                  name={`question-${question.id}`}
                  value={option}
                  className="form-checkbox text-[#1dac6c] mr-2"
                  style={{ "--clr": "#2FA432" }}
                />
                <span className="ml-2 top-[-10px]">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="w-full h-screen relative">
      <div className="h-full grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div
          className="sticky flex flex-col overflow-clip  justify-between top-0 bg-gradient-to-t from-[#bad7d8] to-[#1dac6c] text-white lg:col-span-1"
          style={{
            backgroundImage: `url(${formBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-2">
            <img src={logo} alt="logo" className="w-24 object-contain" />
          </div>
          <div className="p-2">
            <h1 className="text-sm text-slate-400">
              Seven-Up Bottling Company Ltd
            </h1>
          </div>
        </div>

        <div className="overflow-y-auto bg-white lg:col-span-3 p-2 m-2">
          <div className="flex justify-between ">
            <h1 className="text-2xl flex flex-col">Assessment Form
              <span className="text-sm text-gray-500">
               <span className="text-red-500">*</span>Kindly fill out all fields to the best of your knowledge
              </span>
            </h1>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Date:</span> {moment(date).format("MMM DD, YYYY")}
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="bg-[#fdfcfd] h-[100px] rounded-md shadow-md p-3 flex justify-center">
              <div className="w-full">
                <h2 className="sr-only">Steps</h2>
                <div>
                  <p className="text-sm font-medium mt-2 text-gray-500">
                    {currentPage}/{totalPages} - Pages
                  </p>
                  <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-[#2FA432]"
                      style={{ width: `${(currentPage / totalPages) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fdfcfd] rounded-md shadow-md p-4">
              {/* form */}
              {renderQuestions()}
              <div className="flex justify-between mt-4">
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className="bg-[#1dac6c] text-white px-6 py-2 rounded"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentFormLayout;
