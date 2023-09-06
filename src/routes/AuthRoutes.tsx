import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Offers from "../pages/Offers"
import MainLayout from "../components/layout/MainLayout"
import { useRoutes } from 'react-router-dom';
import React from 'react'
import { OFFER_PATH, PROFILE_PATH, SING_IN_PATH } from "../helper/navigationPath";

export default function AuthRoutes() {
    const index = useRoutes([
        {
            path:"/",
            element:<MainLayout/>,
            children:[
                {
                    path:SING_IN_PATH,
                    element: <Home/>
                },
                {
                    path:PROFILE_PATH,
                    element:<Profile/>
                },
                {
                    path:OFFER_PATH,
                    element:<Offers/>
                }

            ]
        }   
    ]);
  return index;

}