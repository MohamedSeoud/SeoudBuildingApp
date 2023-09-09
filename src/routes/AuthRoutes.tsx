import Profile from "../pages/Profile"
import MainLayout from "../components/layout/MainLayout"
import { useRoutes } from 'react-router-dom';
import {  CREATE_LISTING_PATH, PROFILE_PATH} from "../helper/enum/navigationPath";
import CheckAuthRoute from "../components/CheckAuthRoute";
import CreateListing from "../pages/CreateListing";

export default function AuthRoutes() {
    const index = useRoutes([
        {
            path:'/',
            element:<CheckAuthRoute/>,
           children:[ 
           { path:"/",
            element:<MainLayout/>,
            children:[

                {
                    path:PROFILE_PATH,
                    element:<Profile/>
                },
                {
                    path:CREATE_LISTING_PATH,
                    element:<CreateListing/>
                }
            ]
        }  
       ]} 
    ]);
  return index;

}