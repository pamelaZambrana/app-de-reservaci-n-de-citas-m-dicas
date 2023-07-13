import React from 'react';
import PrincipalNavbarPage from './PrincipalNavbarPage';
import PrincipalSectionPage from './PrincipalSectionPage';
import FooterPage from './FooterPage';

const LayoutPage = () => {
    return (
        <>
            <PrincipalNavbarPage></PrincipalNavbarPage>
            <PrincipalSectionPage></PrincipalSectionPage>   
            <FooterPage></FooterPage>
        </>
    );
}

export default LayoutPage;
