import React from 'react'
import { Link } from 'react-router-dom'

function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-2">403</h1>
        <p className="text-gray-600">You don't have permission to access this page.</p>
         <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          Back to Login
        </Link>
    </div>
  )
}

export default Unauthorized