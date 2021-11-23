import React from 'react';
import {
    useLocation,
    Navigate
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner';

const AdminRoute = ({ children, ...rest }) => {
    let { role, userLoading } = useAuth();
    let location = useLocation();

    if (userLoading) {
        return <Spinner animation="grow" />;
    }
    if (role === 'admin') {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;