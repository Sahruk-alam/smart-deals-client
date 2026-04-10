import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const MyProducts = () => {
    const {user}=use(AuthContext);
    console.log("My Products : ", user);
    return (
        <div>
            <h2>Welcome, {user?.displayName || user?.email}!</h2>
        </div>
    );
};

export default MyProducts;