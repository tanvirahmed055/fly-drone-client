import React from 'react';
import {
    useLocation,
    Navigate
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children, ...rest }) => {
    let { userInfo, loading } = useAuth();
    let location = useLocation();

    if (loading) {
        return <Spinner animation="grow" />;
    }
    if (userInfo?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default PrivateRoute;