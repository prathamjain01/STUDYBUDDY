import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import PDFPreviewer from './pages/PDFPreviewer';
import SubjectPortal from './pages/SubjectPortal';
import AdminDashboard from './pages/AdminDashboard';
import Branches from './pages/Branches';
import Community from './pages/Community';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf-previewer" element={<PDFPreviewer />} />
        <Route path="/subject-portal" element={<SubjectPortal />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/community" element={<Community />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;