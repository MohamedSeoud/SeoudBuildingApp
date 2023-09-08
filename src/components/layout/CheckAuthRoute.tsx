import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { SING_IN_PATH } from '../../helper/enum/navigationPath'
import {useAuthStatus} from '../../hooks/useAuthStatus';

function CheckAuthRoute() {
    const { logging , checkingStatus} = useAuthStatus();
    if(checkingStatus) return(<div className=' flex justify-center items-center w-screen h-screen'>Loading</div>) 
  return ( <> { logging?<Outlet/>:<Navigate to={SING_IN_PATH}/> } </> )
}

export default React.memo(CheckAuthRoute)
