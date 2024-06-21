import React, { useContext } from "react";
import AssessmentContext from "../context/AssessmentContext";
import ThemeContext from "../context/ThemeContext";
import success from "../assets/success.gif";
import { useNavigate } from "react-router-dom";
const SuccessModal = () => {
  const { loading, setShowSuccessModal, showSuccessModal } =
    useContext(AssessmentContext);
  const { theme, themeColor } = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/assessments");
    setShowSuccessModal(false);
  };

  if (loading) {
     return (
       <div className="fixed inset-0 bg-black z-[999] bg-opacity-50 flex justify-center items-center w-full">
         <div className="flex justify-center items-center">
           <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
         </div>
       </div>
     );
   }
   
   if (!showSuccessModal) return null;
  return (
    <div className="fixed inset-0 bg-black z-[999] bg-opacity-50 flex justify-center items-center w-full">
      <div
        className="h-[50vh] w-1/2 rounded-lg flex flex-col justify-center items-center"
        style={{
          backgroundColor: theme === "dark" ? "#1d2630" : "#fff",
          color: theme === "dark" ? "#c5c5c5" : "#444",
        }}
      >
       
          <>
            <img src={success} alt="success" className="w-20 h-20 mx-auto" />
            <h2 className="text-2xl mb-4">Assessment Sent Successfully</h2>
            <p className="mb-4">
              Your assessment has been sent successfully to the selected
              responders.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleClose}
                className="px-6 py-2 rounded  text-white"
                style={{
                  backgroundColor: themeColor,
                }}
              >
                Close
              </button>
            </div>
          </>
     
      </div>
    </div>
  );
};

export default SuccessModal;
