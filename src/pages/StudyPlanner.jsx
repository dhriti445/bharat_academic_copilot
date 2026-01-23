import React, { useState } from 'react';
import { Calendar, CheckCircle, Target } from '../components/Icons';

function StudyPlanner({ userData }) {
  const [planType, setPlanType] = useState('smart');

  const studyPlan = [
    {
      day: 'Day 1-2',
      focus: 'Calculus Integration - Fundamentals',
      topics: ['Definition & properties', 'Basic integration rules', 'Power rule practice'],
      hours: 6,
      status: 'completed',
      priority: 'High',
    },
    {
      day: 'Day 3-4',
      focus: 'Integration Techniques',
      topics: ['Substitution method', 'Integration by parts', 'Partial fractions'],
      hours: 8,
      status: 'in-progress',
      priority: 'High',
    },
    {
      day: 'Day 5-6',
      focus: 'Probability & Statistics Basics',
      topics: ['Probability theory', 'Bayes theorem', 'Distributions'],
      hours: 7,
      status: 'not-started',
      priority: 'High',
    },
    {
      day: 'Day 7-8',
      focus: 'Linear Algebra Fundamentals',
      topics: ['Matrices & operations', 'Determinants', 'Eigenvalues'],
      hours: 7,
      status: 'not-started',
      priority: 'High',
    },
    {
      day: 'Day 9-10',
      focus: 'Differential Equations',
      topics: ['First order equations', 'Second order equations', 'Solutions'],
      hours: 6,
      status: 'not-started',
      priority: 'Medium',
    },
    {
      day: 'Day 11-13',
      focus: 'Vector Analysis & Advanced Topics',
      topics: ['Vector operations', 'Cross product', 'Divergence & curl'],
      hours: 8,
      status: 'not-started',
      priority: 'Medium',
    },
    {
      day: 'Day 14',
      focus: 'Final Revision & Mock Test',
      topics: ['Complete revision', 'Practice questions', 'Mock exam'],
      hours: 8,
      status: 'not-started',
      priority: 'High',
    },
    {
      day: 'Day 15',
      focus: 'Exam Day Preparation',
      topics: ['Last minute tips', 'Time management', 'Confidence boost'],
      hours: 2,
      status: 'not-started',
      priority: 'High',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '●';
      default:
        return '○';
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📅 Personalized Study Plan</h1>
        <p className="text-gray-600">
          {userData.daysLeft} days until exam • Optimized study schedule for maximum marks
        </p>
      </div>

      {/* Plan Type Selector */}
      <div className="flex gap-4">
        <button
          onClick={() => setPlanType('smart')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            planType === 'smart'
              ? 'gradient-primary text-white shadow-glow'
              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-300'
          }`}
        >
          🤖 Smart Plan
        </button>
        <button
          onClick={() => setPlanType('intensive')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            planType === 'intensive'
              ? 'gradient-accent text-white shadow-glow-accent'
              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-pink-300'
          }`}
        >
          ⚡ Intensive Plan
        </button>
        <button
          onClick={() => setPlanType('relaxed')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            planType === 'relaxed'
              ? 'gradient-success text-white shadow-glow-success'
              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-cyan-300'
          }`}
        >
          😌 Relaxed Plan
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Total Hours</p>
          <p className="text-2xl font-bold text-purple-600">52h</p>
          <p className="text-xs text-gray-500 mt-2">3.5h/day average</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Progress</p>
          <p className="text-2xl font-bold text-green-600">12.5%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '12.5%' }} />
          </div>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Topics Left</p>
          <p className="text-2xl font-bold text-orange-600">7</p>
          <p className="text-xs text-gray-500 mt-2">High priority</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Expected Score</p>
          <p className="text-2xl font-bold text-blue-600">82-90%</p>
          <p className="text-xs text-gray-500 mt-2">Based on plan</p>
        </div>
      </div>

      {/* Study Timeline */}
      <div className="space-y-4">
        {studyPlan.map((day, idx) => (
          <div
            key={idx}
            className={`card border-l-4 transition-all hover:shadow-glow ${
              day.status === 'completed'
                ? 'border-green-500 opacity-75'
                : day.status === 'in-progress'
                ? 'border-blue-500'
                : 'border-gray-300'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              {/* Day & Status */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${getStatusColor(day.status)}`}>
                    {getStatusIcon(day.status)}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-600">{day.day}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      day.priority === 'High'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {day.priority} Priority
                    </span>
                  </p>
                </div>
              </div>

              {/* Focus Topic */}
              <div className="md:col-span-2">
                <h3 className="font-bold text-gray-900 mb-2">{day.focus}</h3>
                <div className="flex flex-wrap gap-2">
                  {day.topics.map((topic, t_idx) => (
                    <span key={t_idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Study Hours */}
              <div className="flex items-center justify-between md:flex-col md:items-end md:justify-start">
                <p className="font-bold text-gray-900">{day.hours}h</p>
                <p className="text-xs text-gray-500">Study time</p>
                <button className={`mt-3 px-4 py-2 rounded-lg font-semibold transition-all text-white ${
                  day.status === 'completed'
                    ? 'bg-green-500 hover:bg-green-600'
                    : day.status === 'in-progress'
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}>
                  {day.status === 'completed' ? '✓ Done' : day.status === 'in-progress' ? 'Continue' : 'Start'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Schedule Example */}
      <div className="card border-2 border-purple-200 bg-purple-50">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📋 Sample Daily Schedule</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">9:00 AM - 10:30 AM</span>
            <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-lg text-sm font-semibold">Theory (1.5h)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">10:30 AM - 10:45 AM</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg text-sm font-semibold">Break</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">10:45 AM - 1:00 PM</span>
            <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-lg text-sm font-semibold">Practice (2.25h)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">1:00 PM - 2:00 PM</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg text-sm font-semibold">Lunch</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">2:00 PM - 3:30 PM</span>
            <span className="px-3 py-1 bg-green-200 text-green-800 rounded-lg text-sm font-semibold">Revision (1.5h)</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="card text-center hover:shadow-glow transition-all cursor-pointer">
          <p className="text-2xl mb-2">📥</p>
          <p className="font-bold text-gray-900">Download Plan (PDF)</p>
          <p className="text-sm text-gray-500 mt-1">Print or share with mentors</p>
        </button>
        <button className="card text-center hover:shadow-glow transition-all cursor-pointer">
          <p className="text-2xl mb-2">🔔</p>
          <p className="font-bold text-gray-900">Enable Notifications</p>
          <p className="text-sm text-gray-500 mt-1">Get daily reminders</p>
        </button>
      </div>
    </div>
  );
}

export default StudyPlanner;
