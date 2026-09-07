import React from 'react'
import { useAuth } from '../auth/AuthContext'
import { hasPermission} from '../utils/permissions'
import { Navigate } from 'react-router-dom';
function ProtectedRoute({children,module,permission}) {
    const {user} = useAuth();
    const isAllowed = hasPermission(user?.modules,module,permission);
    return (
        isAllowed ? children : <Navigate to="/unauthorized"/> 
    )
}

export default ProtectedRoute