import Profile from "../pages/Profile"
import MainLayout from "../components/layout/MainLayout"
import { useRoutes } from 'react-router-dom';
import {  PROFILE_PATH} from "../helper/enum/navigationPath";
import CheckAuthRoute from "../components/layout/CheckAuthRoute";

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
                }
            ]
        }  
       ]} 
    ]);
  return index;

}