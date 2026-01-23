import React from 'react';
import { TrendingUp, Zap, Target, Book } from '../components/Icons';

function Dashboard({ userData }) {
  const stats = [
    {
      icon: TrendingUp,
      label: 'Topics Analyzed',
      value: '24',
      color: '#667eea',
      bgColor: '#f0f4ff',
    },
    {
      icon: Zap,
      label: 'High Priority',
      value: '8',
      color: '#f5576c',
      bgColor: '#fff0f2',
    },
    {
      icon: Target,
      label: 'Marks Coverage',
      value: '78%',
      color: '#4facfe',
      bgColor: '#f0f8ff',
    },
    {
      icon: Book,
      label: 'Study Hours',
      value: '24h',
      color: '#00d4ff',
      bgColor: '#f0ffff',
    },
  ];

  const topTopics = [
    { name: 'Calculus Integration', importance: 'High', marks: '15-20', frequency: '95%' },
    { name: 'Probability & Statistics', importance: 'High', marks: '12-18', frequency: '88%' },
    { name: 'Linear Algebra', importance: 'High', marks: '10-15', frequency: '85%' },
    { name: 'Differential Equations', importance: 'Medium', marks: '8-12', frequency: '72%' },
    { name: 'Vector Analysis', importance: 'Medium', marks: '6-10', frequency: '65%' },
  ];

  return (
    <div className="p-6 space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="gradient-primary rounded-2xl p-8 text-white shadow-glow overflow-hidden relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Hey, {userData.name}! 👋</h1>
          <p className="text-lg opacity-90 mb-4">Let's conquer your {userData.subject} exam in {userData.daysLeft} days</p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-1">
              Start Exam Mode
            </button>
            <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all">
              View Syllabus
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="card animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <Icon size={24} color={stat.color} />
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full"
                    style={{
                      backgroundColor: stat.color,
                      width: `${Math.random() * 100}%`,
                    }}
                  />
                </div>
                <span className="text-xs text-gray-500">+12%</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* High Priority Topics */}
      <div className="card animate-slide-up">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">🎯 High Priority Topics</h2>
          <p className="text-gray-600">Focus on these topics first for maximum marks</p>
        </div>

        <div className="space-y-3">
          {topTopics.map((topic, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-glow transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{topic.name}</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">Marks:</span>
                      <span className="font-semibold text-purple-600">{topic.marks}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-semibold text-green-600">{topic.frequency}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      topic.importance === 'High'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {topic.importance}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-glow transition-all">
          View Full Analysis
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card gradient-accent text-white p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">📋 Generate Exam Answers</h3>
          <p className="opacity-90 mb-4">Get AI-powered answers optimized for your university exam pattern</p>
          <button className="bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>

        <div className="card gradient-success text-white p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">📅 Create Study Plan</h3>
          <p className="opacity-90 mb-4">Get a personalized day-wise revision schedule</p>
          <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
            Plan Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
