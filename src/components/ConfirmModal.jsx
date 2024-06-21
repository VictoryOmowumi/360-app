import React, { useContext } from "react";
import AssessmentContext from "../context/AssessmentContext";
import ThemeContext from "../context/ThemeContext";
const ConfirmModal = ({ setShowConfirmModal }) => {
  const {  onSubmit} = useContext(AssessmentContext);
  const { theme, themeColor } = useContext(ThemeContext);
  const handleClose = () => {
    setShowConfirmModal(false);
  }
  return (
    <div className="fixed inset-0 bg-black z-[999] bg-opacity-50 flex justify-center items-center">
      <div
        className="py-24 px-12 rounded-lg flex flex-col justify-center items-center"
        style={{
          backgroundColor: theme === "dark" ? "#1d2630" : "#fff",
          color: theme === "dark" ? "#c5c5c5" : "#444",
        }}
      >
        <h2 className="text-2xl mb-2">Ready to Send Assessment?</h2>
        <p className="mb-4">
          Just confirming - you'd like to send this assessment to the selected
          responders. Click "Send" to proceed.
        </p>
        <div className="flex gap-4">
        <form onSubmit={onSubmit}>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2 rounded bg-red-600 text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded  text-white"
              style={{
                backgroundColor: themeColor,
              }}
            >
              Send
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
