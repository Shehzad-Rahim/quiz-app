'use client';

import { useState } from 'react';
import { quizData } from '@/lib/quiz-data';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(quizData.length).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizData[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getGrade = (score: number) => {
    const percentage = (score / quizData.length) * 100;
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-400' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-500' };
    if (percentage >= 70) return { grade: 'B', color: 'text-blue-400' };
    if (percentage >= 60) return { grade: 'C', color: 'text-yellow-400' };
    if (percentage >= 50) return { grade: 'D', color: 'text-orange-400' };
    return { grade: 'F', color: 'text-red-400' };
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  if (showResults) {
    const score = calculateScore();
    const { grade, color } = getGrade(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Quiz Results</h2>
            <div className="text-center mb-8">
              <p className="text-2xl mb-2">Your Score: <span className="font-bold text-blue-400">{score}</span> out of {quizData.length}</p>
              <p className="text-xl">Grade: <span className={`font-bold ${color}`}>{grade}</span></p>
            </div>
            
            <div className="space-y-6">
              {quizData.map((question, index) => (
                <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    {selectedAnswers[index] === question.correctAnswer ? (
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    )}
                    <div>
                      <p className="font-medium mb-2">{question.question}</p>
                      <p className="text-sm text-gray-300">Your answer: {question.options[selectedAnswers[index]]}</p>
                      <p className="text-sm text-green-400">Correct answer: {question.options[question.correctAnswer]}</p>
                      {selectedAnswers[index] !== question.correctAnswer && (
                        <p className="text-sm text-gray-400 mt-2">{question.explanation}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-colors duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Question {currentQuestion + 1} of {quizData.length}</h2>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-300">
                Answered: {selectedAnswers.filter(a => a !== -1).length}/{quizData.length}
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full mt-4">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
          <p className="text-xl mb-6">{quizData[currentQuestion].question}</p>
          <div className="space-y-3">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700/50 hover:bg-gray-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-3 rounded-full font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-700 hover:bg-gray-600"
          >
            Previous
          </button>
          {currentQuestion === quizData.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswers.includes(-1)}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-colors duration-200"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}