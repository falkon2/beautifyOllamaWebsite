'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-500 mb-8">
          An unexpected error occurred.
        </p>
        <button
          onClick={reset}
          className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
