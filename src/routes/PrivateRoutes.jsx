import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-full"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to={'/login'} state={location.pathname} replace></Navigate>
};

export default PrivateRoutes;