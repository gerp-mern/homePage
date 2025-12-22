'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-[84vh] flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
        <p className="text-gray-500 text-sm mb-4 px-5">
          We apologize for the inconvenience. An unexpected error occurred...
        </p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-indigo-900/90 text-white rounded hover:bg-indigo-900 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}