import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import LoadingPage from '../Components/LoadingPage/LoadingPage';

const PrivateRoute = ({children}) => {

    const {user, userLoad} = use(AuthContext);

    if(userLoad){
        return <LoadingPage></LoadingPage>
    }

    if(user && user.email){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;