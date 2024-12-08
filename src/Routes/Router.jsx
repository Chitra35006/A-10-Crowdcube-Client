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
import CampDetailsPage from '../Pages/CampDetailsPage';
import PrivateRoute from './PrivateRoute';
import UpdateCamp from '../components/UpdateCamp/UpdateCamp';


  const Router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:()=>fetch('https://a-10-crowdcube-server.vercel.app/runnningCampaign')
            },
            {
                path:'/allCampaign',
                element:<AllCampaign></AllCampaign>,
                loader: ()=> fetch('https://a-10-crowdcube-server.vercel.app/addCampaign')
            },
            {   
                path:'/allCampaign/:id',
                element:<PrivateRoute><CampDetailsPage></CampDetailsPage></PrivateRoute>,
                loader: async({params}) => {
                    const res = await fetch('https://a-10-crowdcube-server.vercel.app/addCampaign')
                    const data = await res.json();
                    const singleData = data.find((d) => d._id == `${params.id}`)
                    console.log(singleData);
                    return(singleData);
                }

            },
            {
                path:'/addAnewCampaign',
                element:<PrivateRoute>
                    <AddACampaign></AddACampaign>
                </PrivateRoute>
            },
            {
                path:'/myCampaign',
                element:<PrivateRoute>
                    <MyCampaign></MyCampaign>
                </PrivateRoute>
            },
            {
                path:'/myDonations',
                element:<PrivateRoute>
                    <MyDonations></MyDonations>
                </PrivateRoute>
            },
            {
                path:'/signin',
                element: <SignIn></SignIn>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/update/:id',
                element:<PrivateRoute><UpdateCamp></UpdateCamp></PrivateRoute>,
                loader: ({params}) => fetch(`https://a-10-crowdcube-server.vercel.app/camping/${params.id}`)
            }
        ]
    },
    {
        path:"*",
        element: <Four04Page></Four04Page>
    }
  ])

export default Router;