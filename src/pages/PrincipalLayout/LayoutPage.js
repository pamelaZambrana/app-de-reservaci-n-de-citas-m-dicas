import React from 'react';
import PrincipalNavbarPage from './PrincipalNavbarPage';
import FooterPage from './FooterPage';
import { Outlet } from 'react-router-dom';

const LayoutPage = () => {
    return (
        <>
            <PrincipalNavbarPage></PrincipalNavbarPage>
            <Outlet></Outlet>  
            <FooterPage></FooterPage>
        </>
    );
}

export default LayoutPage;
