import React, { useContext, useState } from "react";
import AssessmentContext from "../context/AssessmentContext";
import TextField from "@mui/material/TextField";
import axios from "axios";
import baseUrl from "../baseUrl";
import ThemeContext from "../context/ThemeContext";
import useFetch from "../hooks/useFetch";
import ReviewForm from "./ReviewForm";
import SurveyForm from "./SurveyForm";
import { questionnaires } from "../data/questionnaires";
const Step2 = () => {
  const {
    assessmentType,
    prevStep,
    nextStep,
    control,
    errors,
    register,
    getValues,
    setValue,
    watch,
    setError,
    clearErrors,
    isSavingSubject,
    // loadDraft, 
    saveDraft, // function to save draft
    draftId, // current draft ID
  } = useContext(AssessmentContext);
  const { themeColor, theme } = useContext(ThemeContext);
  const {
    data: cycleData,
    loading: cycleLoading,
    error: cycleError,
  } = useFetch(`${baseUrl}CyclesAndRoles/api/CyclesAndRoles/GetActiveCycles`);
  const {
    data: roleData,
    loading: roleLoading,
    error: roleError,
  } = useFetch(`${baseUrl}CyclesAndRoles/api/CyclesAndRoles/GetRoles`);
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [subjectLoading, setSubjectLoading] = useState(false);

  // useEffect(() => {
  //   fetchSubjects("");
  //   if (draftId) {
  //     loadDraft(draftId); 
  //   }
  // }, [draftId]);

  // Fetch subjects
  const fetchSubjects = async (searchTerm) => {
    setSubjectLoading(true);
    try {
      const response = await axios.get(
        `${baseUrl}Subject/api/Subject/GetSubjectName/${searchTerm}`
      );
      setSubjectOptions(response.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    } finally {
      setSubjectLoading(false);
    }
  };

  // Fetch Roles

  const responderList = watch("responderList", []);

  const addResponder = () => {
    const responder = getValues("responder");
    const responderRole = getValues("responderRole");

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasError = false;

    if (!emailRegex.test(responder)) {
      setError("responder", {
        type: "manual",
        message: "Please enter a valid email address.",
      });
      hasError = true;
    }

    if (!responderRole) {
      setError("responderRole", {
        type: "manual",
        message: "Please select a responder role.",
      });
      hasError = true;
    }

    if (responderList.some((r) => r.responder === responder)) {
      setError("responder", {
        type: "manual",
        message: "Responder has already been added.",
      });
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const newList = [...responderList, { responder, responderRole }];
    setValue("responderList", newList);
    setError("");
    setValue("responder", ""); // Clear the input field
    setValue("responderRole", "");
  };

  const removeResponder = (index) => {
    const newList = responderList.filter((_, i) => i !== index);
    setValue("responderList", newList);
  };

  return (
    <div>
      <h2 className="text-2xl mb-5">
        {assessmentType === 1
          ? "Review Assessment"
          : assessmentType === 2
          ? "Survey Assessment"
          : "Feedback Assessment"}
      </h2>
      <form>
        {assessmentType === 1 && (
          <ReviewForm
            theme={theme}
            control={control}
            errors={errors}
            register={register}
            getValues={getValues}
            setValue={setValue}
            setError={setError}
            clearErrors={clearErrors}
            cycleData={cycleData}
            roleData={roleData}
            responderList={responderList}
            addResponder={addResponder}
            removeResponder={removeResponder}
            subjectOptions={subjectOptions}
            subjectLoading={subjectLoading}
            fetchSubjects={fetchSubjects}
            questionnaires={questionnaires}
            cycleLoading={cycleLoading}
            roleLoading={roleLoading}
            cycleError={cycleError}
            roleError={roleError}
          />
        )}
        {assessmentType === 2 && (
          <SurveyForm
            control={control}
            errors={errors}
            register={register}
            getValues={getValues}
            setValue={setValue}
            setError={setError}
            clearErrors={clearErrors}
          />
        )}
        {assessmentType === 3 && (
          <div>
            <label>
              Select Feedback:
              <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                {...register("feedback", { required: true })}
                style={{
                  clr: "#2FA432",
                }}
              />
              {errors.feedback && (
                <span className="text-red-500">This field is required</span>
              )}
            </label>
            <label>
              Select Group:
              <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                {...register("group", { required: true })}
                style={{
                  clr: "#2FA432",
                }}
              />
              {errors.group && (
                <span className="text-red-500">This field is required</span>
              )}
            </label>
          </div>
        )}
        <div className="flex justify-between gap-4 mt-6 mr-5">
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
          <div className="flex gap-5 justify-end mt-4">
        
         
            <button
              className="group relative inline-flex items-center overflow-hidden rounded  px-8 py-3"
              style={{
                backgroundColor: themeColor,
                color: theme === "dark" ? "#f5f5f5" : "#f5f5f5",
              }}
              onClick={nextStep}
              type="button"
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
                {isSavingSubject ? "Saving..." : "Next"}
              </span>
            </button>
          
          </div>
        </div>
      
      </form>
    </div>
  );
}

export default Step2;