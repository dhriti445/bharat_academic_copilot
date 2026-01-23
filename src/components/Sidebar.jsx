import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, BarChart3, FileText, Calendar, Upload, Settings, X } from './Icons';

function Sidebar({ open, setOpen }) {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/', color: '#667eea' },
    { icon: BarChart3, label: 'Analysis', path: '/analysis', color: '#f5576c' },
    { icon: FileText, label: 'Answers', path: '/answers', color: '#4facfe' },
    { icon: Calendar, label: 'Study Plan', path: '/planner', color: '#00d4ff' },
    { icon: Upload, label: 'Upload Files', path: '/upload', color: '#fa709a' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          open ? 'translate-x-0' : '-translate-x-full'
        } fixed md:relative w-64 h-screen glass-effect shadow-glow transition-transform duration-300 z-40 md:z-0`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="gradient-primary w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎓</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">Bharat</h1>
                <p className="text-xs text-gray-500">Academic Copilot</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="md:hidden hover:bg-gray-100 p-2 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r from-purple-50 to-pink-50 transition-all duration-200 group"
                onClick={() => setOpen(false)}
              >
                <Icon size={20} color={item.color} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium text-gray-700 group-hover:text-gray-900">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700">
            <Settings size={20} color="#667eea" />
            <span className="font-medium">Settings</span>
          </button>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white text-sm">
            <p className="font-bold mb-2">Quick Tip 💡</p>
            <p className="text-xs">Upload your syllabus and past papers to unlock exam pattern analysis!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
