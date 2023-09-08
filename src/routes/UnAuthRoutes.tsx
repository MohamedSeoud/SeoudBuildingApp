import { useRoutes } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ForgetPassword from "../pages/ForgetPassword";
import { FORGET_PASSWORD_PATH, HOME_PATH, OFFER_PATH, SING_IN_PATH, SING_UP_PATH } from "../helper/enum/navigationPath";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Offers from "../pages/Offers";



export default function UnAuthRoutes(){
    const index = useRoutes([
        { path:'/',
        element:<MainLayout/>,
        children:[
        {
            path:HOME_PATH,
            element: <Home/>
        },
        {
            path:SING_IN_PATH ,
            element:<Signin/>
        },
        {
            path:SING_UP_PATH,
            element:<Signup/>
        },
        {
            path:FORGET_PASSWORD_PATH,
            element:<ForgetPassword/>
        },
        {
            path:OFFER_PATH,
            element:<Offers/>
        }
    
    ]
    }
    ]);
    return index
}
