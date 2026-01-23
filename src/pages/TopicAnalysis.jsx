import React, { useState } from 'react';
import { BarChart3, AlertCircle, CheckCircle } from '../components/Icons';

function TopicAnalysis() {
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');

  const subjects = {
    'Mathematics': [
      {
        topic: 'Calculus Integration',
        importance: 'High',
        probability: '95%',
        marks: '15-20',
        frequency: '12/15',
        notes: 'Fundamental concept. Appears in almost every paper.',
        color: '#f5576c',
      },
      {
        topic: 'Probability & Statistics',
        importance: 'High',
        probability: '88%',
        marks: '12-18',
        frequency: '13/15',
        notes: 'Critical for data analysis questions.',
        color: '#ff6b9d',
      },
      {
        topic: 'Linear Algebra',
        importance: 'High',
        probability: '85%',
        marks: '10-15',
        frequency: '12/15',
        notes: 'Matrix operations and transformations.',
        color: '#c44569',
      },
      {
        topic: 'Differential Equations',
        importance: 'Medium',
        probability: '72%',
        marks: '8-12',
        frequency: '11/15',
        notes: 'Often combined with calculus questions.',
        color: '#fa709a',
      },
      {
        topic: 'Vector Analysis',
        importance: 'Medium',
        probability: '65%',
        marks: '6-10',
        frequency: '9/15',
        notes: 'Space and geometry based problems.',
        color: '#fee140',
      },
      {
        topic: 'Complex Numbers',
        importance: 'Low',
        probability: '45%',
        marks: '4-8',
        frequency: '7/15',
        notes: 'Supplementary topic. Less weightage.',
        color: '#4facfe',
      },
    ],
  };

  const topics = subjects[selectedSubject] || [];

  const getBgColor = (importance) => {
    switch (importance) {
      case 'High':
        return 'bg-red-50 border-red-200';
      case 'Medium':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'High':
        return 'text-red-700 bg-red-100';
      case 'Medium':
        return 'text-yellow-700 bg-yellow-100';
      default:
        return 'text-blue-700 bg-blue-100';
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">📊 Exam Pattern Analysis</h1>
          <p className="text-gray-600">AI-powered topic intelligence based on past papers</p>
        </div>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 cursor-pointer"
        >
          {Object.keys(subjects).map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Total Topics</p>
          <p className="text-3xl font-bold text-purple-600">{topics.length}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">High Priority</p>
          <p className="text-3xl font-bold text-red-600">{topics.filter((t) => t.importance === 'High').length}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Avg. Coverage</p>
          <p className="text-3xl font-bold text-green-600">82%</p>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="space-y-4">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className={`card border-2 transition-all hover:shadow-glow ${getBgColor(topic.importance)}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Topic Info */}
              <div className="md:col-span-2">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{topic.topic}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getImportanceColor(topic.importance)}`}>
                    {topic.importance}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{topic.notes}</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Expected Marks</p>
                    <p className="text-lg font-bold text-gray-900">{topic.marks}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Appeared in Papers</p>
                    <p className="text-lg font-bold text-gray-900">{topic.frequency}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Question Type</p>
                    <p className="text-sm font-bold text-gray-900">Numerical & Conceptual</p>
                  </div>
                </div>
              </div>

              {/* Probability Chart */}
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="relative w-20 h-20 flex items-center justify-center mb-3">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="none"
                      stroke={topic.color}
                      strokeWidth="4"
                      strokeDasharray={`${2 * 3.14 * 35 * (parseInt(topic.probability) / 100)} ${2 * 3.14 * 35}`}
                    />
                  </svg>
                  <div className="absolute text-center">
                    <p className="text-xl font-bold text-gray-900">{topic.probability}</p>
                    <p className="text-xs text-gray-600">Probability</p>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all" style={{ backgroundColor: topic.color }}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Study Recommendation */}
      <div className="card bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <div className="flex items-start space-x-4">
          <AlertCircle size={24} color="#4facfe" className="flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">🎯 Smart Study Recommendation</h3>
            <p className="text-gray-700 mb-3">
              Based on analysis of 15 past papers, we recommend focusing {' '}
              <strong>
                60% of your time on High Priority topics
              </strong>
              {' '}
              to achieve 85%+ marks.
            </p>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-glow transition-all">
              Create Smart Study Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicAnalysis;
