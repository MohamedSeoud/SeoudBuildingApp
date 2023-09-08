import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Offers from "../pages/Offers"
import MainLayout from "../components/layout/MainLayout"
import { useRoutes } from 'react-router-dom';
import React from 'react'
import { HOME_PATH, OFFER_PATH, PROFILE_PATH} from "../helper/enum/navigationPath";

export default function AuthRoutes() {
    const index = useRoutes([
        {
            path:"/",
            element:<MainLayout/>,
            children:[
                {
                    path:HOME_PATH,
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