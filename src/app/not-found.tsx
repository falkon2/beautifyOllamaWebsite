"use client";
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-medium inline-block">
          Go back home
        </Link>
      </div>
    </div>
  )
}
