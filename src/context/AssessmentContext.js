import React, { createContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import baseUrl from "../baseUrl";
import axios from "axios";

const AssessmentContext = createContext();

export const AssessmentProvider = ({ children }) => {
  const [assessmentType, setAssessmentType] = useState(1);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSavingSubject, setIsSavingSubject] = useState(false);
  const [draftId, setDraftId] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors },
    trigger,
    setError,
    clearErrors,
  } = useForm();

  // useEffect(() => {
   
  //   const savedDraftId = localStorage.getItem("draftId");
  //   if (savedDraftId) {
  //     loadDraft(savedDraftId);
  //   }
  // }, []);

  const handleAssessmentTypeChange = (e) => {
    setAssessmentType(e.target.value);
  };

  // const nextStep = async () => {
  //   const fieldsToValidate = Object.keys(getValues()).filter(
  //     (field) => field !== "responder" && field !== "responderRole"
  //   );

  //   const isValid = await trigger(fieldsToValidate); // manually trigger form validation

  //   if (isValid) {
  //     const values = getValues();

  //     if (step === 2) {
  //       if (assessmentType === "Review") {
  //         if (!values.responderList || values.responderList.length === 0) {
  //           setError('responderList', { type: 'manual', message: 'Please add a responder.' });
  //           return;
  //         }

  //         setIsSavingSubject(true);
  //         const url = `${baseUrl}Subject/api/Subject/SaveSubjectInformation?CycleId=${values.reviewCycle}&name=${encodeURIComponent(values.subject)}`;

  //         try {
  //           await axios.post(url);
  //           setIsSavingSubject(false);
  //         } catch (error) {
  //           console.error("Error saving subject information:", error);
  //           setIsSavingSubject(false);
  //           return;
  //         }
  //       }

  //       // Move to the next step if the API call was successful (or skipped)
  //       setStep((prev) => prev + 1);
  //     } else {
  //       // Move to the next step for other steps
  //       setStep((prev) => prev + 1);
  //     }
  //   }
  // };

  const user = localStorage.getItem("user")
  const userName = JSON.parse(user).samAccountName;


  const nextStep = () => {
    
    // add the user as created by to the values
    setValue("createdBy", userName);
    
    
    const values = getValues();

    console.log(values);

    setStep((prev) => prev + 1);
  }

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async () => {
    setLoading(true);
    const data = getValues();
    const { responder, responderRole, ...rest } = data;
    const postUrl = `${baseUrl}Subject/api/Subject/SendEmailToSubject`;
    setShowConfirmModal(false);
    const payload = {
      subjectName: rest.subject,
      cycleId: parseInt(rest.reviewCycle, 10),
      addresses: rest.responderList?.map(({ responder, responderRole }) => ({
        respondersEmails: responder,
        roleName: responderRole,
      })),
    };

    axios
      .post(postUrl, payload)
      .then((res) => {
        // reset form
        setValue("subject", "");
        setValue("reviewCycle", "");
        setValue("responder", "");
        setValue("responderRole", "");
        setValue("responderList", []);
        setStep(1);
        setLoading(false);
        setShowSuccessModal(true);
        setDraftId(null); // Clear draft ID on submit
        localStorage.removeItem("draftId");
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false); // stop loading even if there's an error
      });
  };

  // Save draft function
  const saveDraft = () => {
    const values = getValues();
    const draftData = {
      assessmentType,
      step,
      values,
    };

    const draftId = Date.now().toString();
    localStorage.setItem(draftId, JSON.stringify(draftData));
    localStorage.setItem("draftId", draftId);
    setDraftId(draftId);
  };

  // Load draft function
  const loadDraft = (draftId) => {
    const draftData = JSON.parse(localStorage.getItem(draftId));
    if (draftData) {
      setAssessmentType(draftData.assessmentType);
      setStep(draftData.step);
      Object.keys(draftData.values).forEach((key) => setValue(key, draftData.values[key]));
    }
  };

  return (
    <AssessmentContext.Provider
      value={{
        assessmentType,
        step,
        setStep,
        handleAssessmentTypeChange,
        nextStep,
        prevStep,
        register,
        handleSubmit,
        getValues,
        onSubmit,
        watch,
        control,
        errors,
        setValue,
        trigger,
        loading,
        showConfirmModal,
        setShowConfirmModal,
        showSuccessModal,
        setShowSuccessModal,
        setError,
        clearErrors,
        isSavingSubject,
        saveDraft,
        loadDraft,
        draftId,
        setDraftId,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};

export default AssessmentContext;
