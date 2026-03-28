import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='max-w-max mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;