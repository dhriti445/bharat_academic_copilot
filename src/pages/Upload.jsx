import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from '../components/Icons';

function UploadPage({ setUserData }) {
  const [uploadedFiles, setUploadedFiles] = useState({
    syllabus: false,
    papers: false,
    notes: false,
  });

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    university: '',
    daysLeft: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (type) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.subject && formData.daysLeft) {
      setUserData({
        name: formData.name,
        subject: formData.subject,
        daysLeft: parseInt(formData.daysLeft),
      });
      setStep(3);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto animate-fade-in">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                s < step
                  ? 'bg-green-500 text-white'
                  : s === step
                  ? 'gradient-primary text-white shadow-glow'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              {s < step ? '✓' : s}
            </div>
            {s < 3 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  s < step ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Student Information */}
      {step === 1 && (
        <div className="animate-slide-up">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome! 👋</h1>
          <p className="text-gray-600 mb-8">Let's get you set up with your exam intelligence system</p>

          <div className="card space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              >
                <option value="">Select your subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Biology">Biology</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">University/College</label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                placeholder="e.g., Delhi University, IIT-Delhi"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Days Until Exam</label>
              <input
                type="number"
                name="daysLeft"
                value={formData.daysLeft}
                onChange={handleInputChange}
                placeholder="e.g., 15"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full px-6 py-3 gradient-primary text-white rounded-lg font-bold hover:shadow-glow transition-all"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: File Upload */}
      {step === 2 && (
        <div className="animate-slide-up">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Your Documents 📚</h1>
          <p className="text-gray-600 mb-8">Upload past papers, syllabus, and notes for better analysis</p>

          <div className="space-y-4">
            {/* Syllabus Upload */}
            <div className="card border-2 border-dashed border-gray-300 hover:border-purple-500 transition-all">
              <div className="text-center py-12">
                <Upload size={32} color={uploadedFiles.syllabus ? '#10b981' : '#667eea'} className="mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Official Syllabus</h3>
                <p className="text-sm text-gray-600 mb-4">PDF file of your exam syllabus</p>
                <button
                  onClick={() => handleFileUpload('syllabus')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    uploadedFiles.syllabus
                      ? 'bg-green-100 text-green-700'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                >
                  {uploadedFiles.syllabus ? '✓ Uploaded' : 'Choose File'}
                </button>
              </div>
            </div>

            {/* Past Papers Upload */}
            <div className="card border-2 border-dashed border-gray-300 hover:border-purple-500 transition-all">
              <div className="text-center py-12">
                <Upload size={32} color={uploadedFiles.papers ? '#10b981' : '#667eea'} className="mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Past Exam Papers (2-3 years)</h3>
                <p className="text-sm text-gray-600 mb-4">PDF files or images of previous year papers</p>
                <button
                  onClick={() => handleFileUpload('papers')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    uploadedFiles.papers
                      ? 'bg-green-100 text-green-700'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                >
                  {uploadedFiles.papers ? '✓ Uploaded' : 'Choose Files'}
                </button>
              </div>
            </div>

            {/* Notes Upload */}
            <div className="card border-2 border-dashed border-gray-300 hover:border-purple-500 transition-all">
              <div className="text-center py-12">
                <Upload size={32} color={uploadedFiles.notes ? '#10b981' : '#667eea'} className="mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Your Class Notes (Optional)</h3>
                <p className="text-sm text-gray-600 mb-4">PDFs or images of your study notes</p>
                <button
                  onClick={() => handleFileUpload('notes')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    uploadedFiles.notes
                      ? 'bg-green-100 text-green-700'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                >
                  {uploadedFiles.notes ? '✓ Uploaded' : 'Choose Files'}
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setStep(1)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-100 transition-all"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!uploadedFiles.syllabus || !uploadedFiles.papers}
                className="flex-1 px-6 py-3 gradient-primary text-white rounded-lg font-bold hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Analyze & Continue →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Setup Complete */}
      {step === 3 && (
        <div className="animate-slide-up">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-white text-4xl">
              ✓
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">All Set! 🎉</h1>
            <p className="text-gray-600 max-w-md mx-auto">
              Your exam intelligence system is ready. We've analyzed your syllabus and past papers.
            </p>
          </div>

          {/* Analysis Summary */}
          <div className="space-y-4 mb-8">
            <div className="card border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <CheckCircle size={24} color="#10b981" className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">24 Topics Identified</h3>
                  <p className="text-sm text-gray-600 mt-1">Extracted from your syllabus and cross-referenced with past papers</p>
                </div>
              </div>
            </div>

            <div className="card border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <CheckCircle size={24} color="#3b82f6" className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">15 Papers Analyzed</h3>
                  <p className="text-sm text-gray-600 mt-1">Pattern recognition complete • Probability scoring calculated</p>
                </div>
              </div>
            </div>

            <div className="card border-l-4 border-purple-500">
              <div className="flex items-start space-x-4">
                <CheckCircle size={24} color="#667eea" className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Study Plan Ready</h3>
                  <p className="text-sm text-gray-600 mt-1">Personalized schedule created for your {formData.daysLeft} days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="card bg-gradient-to-r from-purple-50 to-pink-50 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Next Steps:</h3>
            <ol className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">1</span>
                <span className="text-gray-700">Check <strong>Topic Analysis</strong> to see high-probability topics</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">2</span>
                <span className="text-gray-700">Review your <strong>Study Plan</strong> and start studying</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">3</span>
                <span className="text-gray-700">Use <strong>Answer Generator</strong> for exam-ready solutions</span>
              </li>
            </ol>
          </div>

          {/* Action Button */}
          <a
            href="/"
            className="block w-full px-6 py-4 gradient-primary text-white rounded-lg font-bold text-center hover:shadow-glow transition-all text-lg"
          >
            Go to Dashboard →
          </a>
        </div>
      )}
    </div>
  );
}

export default UploadPage;
