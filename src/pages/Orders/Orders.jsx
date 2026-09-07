import React from 'react'
import { hasPermission } from '../../utils/permissions'
import { useAuth } from '../../auth/AuthContext'
function Orders() {
    const {user}  = useAuth();
    const isAllowedToCreate = hasPermission(user?.modules,"Orders","CREATE");
  return (
    <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Orders</h1>
          {isAllowedToCreate && (
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
              + Create Order
            </button>
          )}
        </div>
    </div>
  )
}
 
export default Orders