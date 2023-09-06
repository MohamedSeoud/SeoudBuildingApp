import { useRoutes } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ForgetPassword from "../pages/ForgetPassword";
import { FORGET_PASSWORD_PATH, SING_IN_PATH, SING_UP_PATH } from "../helper/navigationPath";



export default function UnAuthRoutes(){
    const index = useRoutes([
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
        }
    ]);
    return index
}
