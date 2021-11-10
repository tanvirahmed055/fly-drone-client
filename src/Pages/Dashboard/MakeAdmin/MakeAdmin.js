import React from 'react';
import {

    useParams

} from "react-router-dom";
const MakeAdmin = () => {
    let { makeAdmin } = useParams();

    return (
        <div>
            <h2>this is Make Admin Page</h2>
        </div>
    );
};

export default MakeAdmin;