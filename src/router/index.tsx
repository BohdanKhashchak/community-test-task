import React from "react";
import { Routes, Route } from "react-router-dom";
import CommunityPage from "@pages/CommunityPage/CommunityPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CommunityPage />} />
    </Routes>
  );
};

export default AppRouter;
