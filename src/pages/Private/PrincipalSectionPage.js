import React from 'react';
import { Outlet } from 'react-router-dom';
import SecondaryNavbar from '../../components/secondaryNavvbar/SecondaryNavbar';

const PrincipalSectionPage = () => {
    return (
        <>
            <SecondaryNavbar></SecondaryNavbar>
            <Outlet/> 
        </>
    );
}

export default PrincipalSectionPage;
