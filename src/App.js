import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Page";
import Homepage from "./pages/assessmentForm/Page";
import AssessmentFormLayout from "./components/AssessmentFormLayout";
import Assessment from "./pages/assessment/Page";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Home from "./pages/Dashboard";
import Assessments from "./pages/assessments/Page";
import CreateAssessment from "./components/CreateAssessment";
import QuestionnaireManagement from "./pages/questionnaires/Page";
import CreateQuestionnaire from "./components/CreateQuestionnaire";
import Responses from "./pages/responses/Page";
import ViewResponseComponent from "./components/ViewComponent";
import ViewAssessment from "./components/ViewAssessment";
import ViewQuestionnaire from "./components/ViewQuestionnaire";
import EditQuestionnaire from "./components/EditQuestionnaire";
import Settings from "./pages/settings/Page";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Unauthorized from "./Unauthorized";

const isAuthenticated = () => localStorage.getItem("authToken") !== null;
const getUserRole = () => JSON.parse(localStorage.getItem("roles") || "[]");

// Protected route component for role-based access
const ProtectedRoute = ({ children, roles }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  const userRoles = getUserRole();
  const hasAccess = roles.some((role) => userRoles.includes(role));

  if (!hasAccess) {
    return <Navigate to="/not-authorized" />;
  }

  return children;
};

const App = () => (
  <>
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/assessmentForm" element={<Homepage />} />
      <Route path="/assessmentForm/:id" element={<AssessmentFormLayout />} />
      <Route path="/assessment/:id" element={<Assessment />} />

      {/* Dashboard Routes */}
      <Route
        path="/*"
        element={
          <ProtectedRoute
            roles={[
              "Payments Admin",
              "DPR-Admin",
              "DPR-Distribution",
              "DPR-WH",
            ]}
          >
            <Layout>
              <AppRoutes ProtectedRoute={ProtectedRoute} />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Catch-all for 404 */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ToastContainer />
  </>
);

export default App;
