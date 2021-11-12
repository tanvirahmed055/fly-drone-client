import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner';

const AdminRoute = ({ children, ...rest }) => {
    let { userInfo, loading, role, userLoading } = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                userLoading ? <Spinner animation="grow" /> :
                    (role === 'admin') ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default AdminRoute;