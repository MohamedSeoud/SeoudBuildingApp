import { Route } from "react-router"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Offers from "../pages/Offers"

const AuthRoutes=[
    <Route path="/" element={<Home/>} />,
    <Route path="/profile" element={<Profile/>}/>,
    <Route path="/offers" element={<Offers/>} />,
] 

export default AuthRoutes
