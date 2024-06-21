import React from "react";
import { Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";
const AppRoutes = ({ProtectedRoute}) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Home />} />
    <Route path="/assessments">
      <Route index element={<Assessments />} />
      <Route path="create" element={<ProtectedRoute roles={['Payments Admin', 'DPR-Admin']}><CreateAssessment /></ProtectedRoute>} />
      <Route path=":id" element={<ViewAssessment />} />
    </Route>
    <Route path="/questionnaires">
      <Route index element={<QuestionnaireManagement />} />
      <Route path="create" element={<ProtectedRoute roles={['Payments Admin', 'DPR-Admin']}><CreateQuestionnaire /></ProtectedRoute>} />
      <Route path=":id" element={<ViewQuestionnaire />} />
      <Route path="edit/:id" element={<ProtectedRoute roles={['Payments Admin', 'DPR-Admin']}><EditQuestionnaire /></ProtectedRoute>} />
    </Route>
    <Route path="/responses">
      <Route index element={<Responses />} />
      <Route path=":id" element={<ViewResponseComponent />} />
    </Route>
    <Route path="/settings" element={<ProtectedRoute roles={['Payments Admin', 'DPR-Admin']}><Settings /></ProtectedRoute>} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
