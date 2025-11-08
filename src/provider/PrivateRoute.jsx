import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user} = use(AuthContext);

    if(user && user.email){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;