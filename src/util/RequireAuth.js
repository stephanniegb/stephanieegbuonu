import React from 'react'
import { useAuthContext } from "../context/Authcontext.js";
import {Navigate, useLocation} from 'react-router-dom'
const  RequireAuth = ({children}) => {
    const {currentUser} = useAuthContext()
    let location = useLocation()
    if(currentUser && location.pathname === '/'){
        return <Navigate to={'/feedback-form'} state={{from: location}} replace/>
    }
    if(!currentUser){
        return <Navigate to={'/'} state={{from: location}} replace/>
    }
  return children
}

export default RequireAuth