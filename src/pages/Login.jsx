import React from 'react'
import { useAuth } from '../auth/AuthContext'

function Login() {
    const {login ,user} = useAuth();
  return (
   <div className="h-full flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-xl p-8 w-80 text-center">
        <h1 className="text-xl font-semibold text-gray-800 mb-1">Role-Based Navigation</h1>
        <p className="text-sm text-gray-500 mb-6">Choose a user to sign in</p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => login('userA')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
          >
            Login as User A
          </button>
          <button
            onClick={() => login('userB')}
            className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 rounded-lg transition"
          >
            Login as User B
          </button>
        </div>

        {user && (
          <p className="mt-5 text-sm text-green-600">
            Logged in as <span className="font-medium">{user.name}</span>
          </p>
        )}
      </div>
    </div>

  )
}

export default Login