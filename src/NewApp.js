import React from 'react';
import { Route,
    RouterProvider,
    createBrowserRouter, 
    createRoutesFromElements,} from 'react-router-dom';

import LayoutPage from './newpages/PrincipalLayout/LayoutPage';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element = <LayoutPage/>>
      
  </Route>
))

function NewApp() {

  return (
    <RouterProvider router = { router }></RouterProvider>
    );
  }
  
  export default NewApp;
  