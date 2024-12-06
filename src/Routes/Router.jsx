import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from '../layout/HomeLayout';
import Home from '../components/Home';
import Four04Page from '../components/Four04Page';

  const Router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
        ]
    },
    {
        path:"*",
        element: <Four04Page></Four04Page>
    }
  ])

export default Router;