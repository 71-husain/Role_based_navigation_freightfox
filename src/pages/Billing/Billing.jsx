import React from 'react'
import { useAuth } from '../../auth/AuthContext'
import { hasPermission } from '../../utils/permissions';

function Billing() {
    const {user} = useAuth();
    const isAllowed = hasPermission(user?.modules,"Billing","CREATE");
  return (
    <div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Billing</h1>
        {isAllowed && (
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
              + Create Billing
            </button>
          )}
    </div>
  )
}

export default Billing