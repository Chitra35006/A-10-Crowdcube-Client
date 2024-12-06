import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from '../layout/HomeLayout';
import Home from '../components/Home';
import Four04Page from '../components/Four04Page';
import AllCampaign from '../components/AllCampaign';
import AddACampaign from '../components/AddACampaign';
import MyCampaign from '../components/MyCampaign';
import MyDonations from '../components/MyDonations';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

  const Router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/allCampaign',
                element:<AllCampaign></AllCampaign>
            },
            {
                path:'/addAnewCampaign',
                element:<AddACampaign></AddACampaign>
            },
            {
                path:'/myCampaign',
                element:<MyCampaign></MyCampaign>
            },
            {
                path:'/myDonations',
                element:<MyDonations></MyDonations>
            },
            {
                path:'/signin',
                element: <SignIn></SignIn>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path:"*",
        element: <Four04Page></Four04Page>
    }
  ])

export default Router;