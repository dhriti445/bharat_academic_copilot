import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from '../components/Icons';

function ExamAnswerGenerator() {
  const [selectedTopic, setSelectedTopic] = useState('Calculus Integration');
  const [selectedMarks, setSelectedMarks] = useState('10');

  const topics = [
    'Calculus Integration',
    'Probability & Statistics',
    'Linear Algebra',
    'Differential Equations',
    'Vector Analysis',
  ];

  const sampleAnswers = {
    'Calculus Integration': {
      '5': {
        question: 'What is integration?',
        answer: `Integration is the reverse process of differentiation. It is used to find the antiderivative of a function. 

Key Points:
• Integration finds the area under a curve
• Denoted by ∫f(x)dx
• Has two types: definite and indefinite
• Rules include power rule, chain rule, and substitution`,
        evaluatorTips: 'Include definition, provide one example, mention two properties',
        expectedLength: '8-10 lines',
        commonMistakes: 'Forgetting constant of integration, incorrect application of rules',
      },
      '10': {
        question: 'Explain the process of integration by substitution and provide an example.',
        answer: `Integration by Substitution (u-substitution):

Definition: A technique to simplify complex integrals by substituting a new variable.

Process:
1. Identify a substitution u = g(x)
2. Calculate du = g'(x)dx
3. Rewrite the integral in terms of u
4. Integrate with respect to u
5. Substitute back the original variable

Example: ∫2x(x²+1)³ dx
Let u = x²+1, then du = 2x dx
= ∫u³ du = u⁴/4 = (x²+1)⁴/4 + C

Key Points:
• Used for composition of functions
• Helps reduce complexity
• Works well with chain rule derivatives`,
        evaluatorTips: 'Provide clear definition, show step-by-step process, include complete example with solution',
        expectedLength: '18-22 lines',
        commonMistakes: 'Forgetting to substitute back, incorrect derivative calculation, missed constant',
      },
    },
    'Probability & Statistics': {
      '5': {
        question: 'Define probability.',
        answer: `Probability is a measure of the likelihood that an event will occur.

Formula: P(A) = Number of favorable outcomes / Total number of outcomes

Properties:
• 0 ≤ P(A) ≤ 1
• P(A) + P(A') = 1
• Always expressed as fraction, decimal, or percentage`,
        evaluatorTips: 'Keep it concise, include formula, mention key properties',
        expectedLength: '6-8 lines',
        commonMistakes: 'Missing formula, incomplete properties list',
      },
      '10': {
        question: 'Explain Bayes\' Theorem with a real-world example.',
        answer: `Bayes' Theorem:
P(A|B) = [P(B|A) × P(A)] / P(B)

Where:
• P(A|B) = Probability of A given B (Posterior)
• P(B|A) = Probability of B given A (Likelihood)
• P(A) = Probability of A (Prior)
• P(B) = Probability of B (Evidence)

Real-World Example - Medical Test:
A disease affects 1% of population. Test accuracy: 99% (true positive & negative)

If you test positive, probability of actually having disease?
• P(Disease) = 0.01
• P(Positive|Disease) = 0.99
• P(Positive) = 0.01×0.99 + 0.99×0.01 ≈ 0.0198

P(Disease|Positive) = (0.99 × 0.01) / 0.0198 ≈ 50%

Conclusion: Even with 99% accuracy, initial probability matters greatly.

Applications: Medical diagnosis, spam detection, machine learning`,
        evaluatorTips: 'Show complete formula, work through example step-by-step, explain real application',
        expectedLength: '25-30 lines',
        commonMistakes: 'Missing components of formula, incomplete example, no real-world context',
      },
    },
  };

  const currentAnswer = sampleAnswers[selectedTopic]?.[selectedMarks] || sampleAnswers['Calculus Integration']['10'];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">✍️ Exam-Ready Answer Generator</h1>
        <p className="text-gray-600">AI-generated answers optimized for your university evaluators</p>
      </div>

      {/* Selection Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Topic Selection */}
        <div className="card">
          <label className="block text-sm font-bold text-gray-900 mb-3">Select Topic</label>
          <div className="space-y-2">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  selectedTopic === topic
                    ? 'gradient-primary text-white shadow-glow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Marks Selection */}
        <div className="card">
          <label className="block text-sm font-bold text-gray-900 mb-3">Question Marks</label>
          <div className="space-y-2">
            {['5', '10', '15', '20'].map((marks) => (
              <button
                key={marks}
                onClick={() => setSelectedMarks(marks)}
                className={`w-full px-4 py-3 rounded-lg transition-all font-semibold ${
                  selectedMarks === marks
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {marks} Marks
              </button>
            ))}
          </div>
        </div>

        {/* Answer Info */}
        <div className="card bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
          <h3 className="text-sm font-bold text-gray-900 mb-4">Answer Info</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-600 mb-1">Expected Length</p>
              <p className="font-bold text-gray-900">{currentAnswer.expectedLength}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Question Type</p>
              <p className="font-bold text-gray-900">Conceptual & Practical</p>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-glow transition-all">
              Generate Answer
            </button>
          </div>
        </div>
      </div>

      {/* Question & Answer Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Question */}
        <div className="card border-2 border-blue-200 bg-blue-50">
          <div className="flex items-start space-x-3 mb-4">
            <span className="inline-block px-3 py-1 bg-blue-200 text-blue-700 rounded-full font-bold text-sm">
              Q{selectedMarks}
            </span>
            <h3 className="text-lg font-bold text-gray-900">{currentAnswer.question}</h3>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-700 leading-relaxed">{currentAnswer.question}</p>
          </div>
        </div>

        {/* Answer */}
        <div className="card border-2 border-green-200 bg-green-50">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle size={20} color="#10b981" />
            <h3 className="text-lg font-bold text-gray-900">Evaluator-Optimized Answer</h3>
          </div>
          <div className="bg-white rounded-lg p-4 max-h-96 overflow-y-auto">
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap text-sm">{currentAnswer.answer}</p>
          </div>
          <button className="w-full mt-4 px-4 py-2 border-2 border-green-500 text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-all">
            Copy Answer
          </button>
        </div>
      </div>

      {/* Tips and Tricks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Evaluator Tips */}
        <div className="card border-2 border-yellow-200 bg-yellow-50">
          <div className="flex items-start space-x-3 mb-4">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-bold text-gray-900">Evaluator Tips</h3>
              <p className="text-sm text-gray-600 mt-1">{currentAnswer.evaluatorTips}</p>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="card border-2 border-red-200 bg-red-50">
          <div className="flex items-start space-x-3 mb-4">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-bold text-gray-900">Common Mistakes</h3>
              <p className="text-sm text-gray-600 mt-1">{currentAnswer.commonMistakes}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Batch Generator */}
      <div className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-glow">
        <h3 className="text-2xl font-bold mb-3">🚀 Generate All High-Priority Answers</h3>
        <p className="opacity-90 mb-6">Get answers for all 8 high-probability topics in one go. Perfect for final revision!</p>
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-bold hover:shadow-lg transition-all transform hover:-translate-y-1">
            Generate Batch (PDF)
          </button>
          <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition-all">
            Save to Library
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExamAnswerGenerator;
