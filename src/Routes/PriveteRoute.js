import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';
import { AuthContext } from '../Firebase/AuthProvider';

const PriveteRoute = ({children}) => {
    let location = useLocation()
    const {user,loading} = useContext(AuthContext)


    if(loading){
        return <Loading/>
    }



    if(user?.email || user?.uid){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PriveteRoute;