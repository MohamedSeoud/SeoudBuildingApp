import { Route } from "react-router";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ForgetPassword from "../pages/ForgetPassword";

const UnAuthRoutes = [
<Route path="/sign-in" element={<Signin/>}/>,
<Route path="/sign-up" element={<Signup/>}/>,
<Route path="/forget-password" element={<ForgetPassword/>}/>

];
export default UnAuthRoutes
