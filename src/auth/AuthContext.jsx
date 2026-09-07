import { useContext , createContext , useState } from "react";
import { fetchPermissions } from "../api/mockPermissions";
import React from 'react'

const AuthContext = createContext();

function AuthProvider({children}) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    async function login(userKey){
        const getuser = await fetchPermissions(userKey);
        setUser(getuser);
        setLoading(false);
    }

    function logout(){
        setUser(null);
    }
  return (
    <AuthContext.Provider value={{login,user,loading,logout}}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
export function useAuth(){ 
    return useContext(AuthContext);
}