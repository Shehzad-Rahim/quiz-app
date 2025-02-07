import Link from 'next/link';
import { ArrowRight, Brain } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Brain className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Next.js Q2 Quiz Prep
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Test your Next.js knowledge with 20 challenging questions from the official documentation
          </p>
          <Link 
            href="/quiz"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
          >
            Start Quiz <ArrowRight className="ml-2 hover:ml-2 transition-all" />
          </Link>
          {/* <div className="mt-16 p-6 bg-gray-800/50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="text-left space-y-3 text-gray-300">
              <li>✓ 20 Complex Questions</li>
              <li>✓ Real-time Score Tracking</li>
              <li>✓ Detailed Explanations</li>
              <li>✓ Performance Grading</li>
            </ul>
          </div> */}
          <p className="mt-12 text-md text-gray-400">
            Created with <span className='text-red-500 text-xl'>♥</span>  by Shehzad Rahim
          </p>
        </div>
      </div>
    </main>
  );
}
