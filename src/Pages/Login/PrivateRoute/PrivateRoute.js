import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children, ...rest }) => {
    let { userInfo, loading } = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loading ? <Spinner animation="grow" /> :
                    userInfo?.displayName ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;