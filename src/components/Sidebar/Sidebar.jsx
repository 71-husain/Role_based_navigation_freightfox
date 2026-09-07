import React from 'react'
import { routeConfig } from '../../routes/routeConfig'
import { useAuth } from '../../auth/AuthContext'
import { hasPermission } from '../../utils/permissions';
import { Link } from 'react-router-dom';
function Sidebar() {
    const {user,logout} = useAuth();

  return (
  <div className="w-56 min-h-screen bg-gray-900 text-white p-4 flex flex-col justify-between">
    <div className="flex flex-col gap-1">{routeConfig.map((route)=>{
        const isAllowed = hasPermission(user?.modules,route.module,route.permission);
        return isAllowed && <Link key={route.path} to={route.path} className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition">{route.module}</Link>
    })}</div>
    {user &&  <button onClick={()=> logout()} className="text-sm text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg py-2 transition">Logout</button>}
  </div>
  )
}

export default Sidebar