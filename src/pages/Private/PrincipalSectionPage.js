import React from 'react';
import { Outlet } from 'react-router-dom';
import SecondaryNavbar from "../../components/secondaryNavbar/SecondaryNavbar";

const PrincipalSectionPage = () => {
    return (
        <div className='principal-section'>
            <SecondaryNavbar></SecondaryNavbar>
            <Outlet/> 
        </div>
    );
}

export default PrincipalSectionPage;
