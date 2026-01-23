import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import TopicAnalysis from './pages/TopicAnalysis';
import ExamAnswerGenerator from './pages/ExamAnswerGenerator';
import StudyPlanner from './pages/StudyPlanner';
import Upload from './pages/Upload';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userData, setUserData] = useState({
    name: 'Student',
    subject: 'Mathematics',
    daysLeft: 15,
  });

  return (
    <Router>
      <div className="flex h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard userData={userData} />} />
              <Route path="/analysis" element={<TopicAnalysis />} />
              <Route path="/answers" element={<ExamAnswerGenerator />} />
              <Route path="/planner" element={<StudyPlanner userData={userData} />} />
              <Route path="/upload" element={<Upload setUserData={setUserData} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
