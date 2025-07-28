'use client'

interface ReadingProgressProps {
  progress: number
}

export default function ReadingProgress({ progress }: ReadingProgressProps) {
  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-150 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Floating Progress Indicator */}
      <div className="fixed bottom-8 left-8 z-40 hidden lg:block">
        <div className="relative w-16 h-16">
          {/* Background Circle */}
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="rgba(0, 0, 0, 0.1)"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="url(#progressGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
              className="transition-all duration-300 ease-out"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Progress Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-gray-700">
              {Math.round(progress)}%
            </span>
          </div>
          
          {/* Glass Effect Background */}
          <div className="absolute inset-0 -z-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20" />
        </div>
        
        {/* Reading Time Estimate */}
        <div className="mt-2 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 shadow-sm border border-white/20">
            <div className="text-xs text-gray-600 font-medium">
              {progress < 100 ? (
                <>
                  {Math.max(1, Math.round(15 - (progress / 100) * 15))} min left
                </>
              ) : (
                'Completed'
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Progress Indicator */}
      <div className="fixed bottom-4 right-4 z-40 lg:hidden">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/20">
          <div className="relative w-8 h-8">
            <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="rgba(0, 0, 0, 0.1)"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="#f97316"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 14}`}
                strokeDashoffset={`${2 * Math.PI * 14 * (1 - progress / 100)}`}
                className="transition-all duration-300 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">
                {Math.round(progress)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}