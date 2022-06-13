import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h3>
        404 - <Link to="/" >Home</Link>
        </h3>
        <hr/>
    </div>
);
export default NotFoundPage;