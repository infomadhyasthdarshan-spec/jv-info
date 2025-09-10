"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-9xl font-extrabold   tracking-widest select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-to-r from-[#b2917a] to-[#b6a396] text-white px-4 py-2 text-sm rounded-lg shadow-lg transform rotate-12">
              Page Not Found
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold  ">
              Oops! Something went wrong
            </h2>
            <p className="  max-w-sm mx-auto">
              The page you're looking for doesn't exist or has been moved to another location.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#b2917a] to-[#a78f7e] hover:from-[#b99d88] hover:to-[#b2917a] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Return Home
            </Link>
            
            <button 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg   bg-white hover:bg-gray-50 transition-colors duration-200 shadow-md hover:shadow-lg"
              onClick={() => router.back()}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/4 -right-5 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    </div>
  )
}