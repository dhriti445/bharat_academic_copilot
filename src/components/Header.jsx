import React from 'react';
import { Menu, Bell, User } from './Icons';

function Header({ onMenuClick }) {
  return (
    <header className="bg-white shadow-glow sticky top-0 z-20">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={24} color="#667eea" />
          </button>
          <h1 className="text-2xl font-bold text-gradient hidden md:block">
            Bharat Academic Copilot
          </h1>
          <h1 className="text-lg font-bold text-gradient md:hidden">
            BAC
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Status Badge */}
          <div className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg bg-orange-50 border border-orange-200 dark:bg-slate-700 dark:border-slate-600">
            <div className="w-2 h-2 rounded-full bg-orange-500 dark:bg-green-400 animate-pulse" />
            <span className="text-sm font-bold text-gray-900 dark:text-white">15 days left</span>
          </div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} color="#667eea" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="gradient-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
              S
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">Student</p>
              <p className="text-xs text-gray-500">Mathematics</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
