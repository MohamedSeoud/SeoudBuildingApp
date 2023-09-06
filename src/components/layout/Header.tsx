import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';

import image from '../../assets/icon-close.png';
import { NavLink, useLocation } from 'react-router-dom';
import { HOME_PATH, OFFER_PATH, SING_IN_PATH } from '../../helper/navigationPath';

function Header() {
  const location =useLocation();
  const checkLocation =(path:string)=>{
    if(location.pathname===path)return true;
    return false;
  }

const[showNav, setShowNav] = useState(false);
  return (
    <>
    <div className=' flex flex-col  w-[100%]'>
    <div className='  py-2 bg-green-600  px-9  flex flex-row items-center py-auto justify-between w-[100%]'>
      <NavLink to={HOME_PATH} className=''> <img src={image} className="max-h-[35px] my-3 w-auto" alt="" /> </NavLink>
      <div className='bg-green-600   max-sm:hidden flex     z-10 text-white  flex-row gap-2'>
        <NavLink to={HOME_PATH} className={`hover:bg-green-700 cursor-pointer mx-3 p-4 rounded-3xl uppercase ${checkLocation(HOME_PATH)?"bg-green-700":""}`}>
          home
        </NavLink>
        
        <NavLink to={OFFER_PATH} className={`hover:bg-green-700 cursor-pointer mx-3 p-4 rounded-3xl uppercase ${checkLocation(OFFER_PATH)?"bg-green-700":""}`}>
          offer
        </NavLink>

        <NavLink to={SING_IN_PATH} className={`hover:bg-green-700 cursor-pointer mx-3 p-4 rounded-3xl uppercase ${checkLocation(SING_IN_PATH)?"bg-green-700":""}`}>
          Signin
        </NavLink>



    </div>
      
      <div className=' cursor-pointer max-sm:flex  hidden my-2' onClick={()=>setShowNav(!showNav)}> <BsList color="white" size="3rem"/> </div>
    </div>
    { showNav&&
    <div className='bg-green-600 w-[100%]  max-sm:flex hidden   pb-5 z-10 text-white  flex-col gap-5 '>
        <NavLink to={HOME_PATH} className={`hover:bg-green-700 cursor-pointer mx-3 p-4 rounded-3xl uppercase ${checkLocation(HOME_PATH)?"bg-green-700":""}`}>
          home
        </NavLink>
        
        <NavLink to={OFFER_PATH} className={`hover:bg-green-700 cursor-pointer mx-3 p-4 rounded-3xl uppercase ${checkLocation(OFFER_PATH)?"bg-green-700":""}`}>
          offer
        </NavLink>


        <NavLink to={SING_IN_PATH} className={`hover:bg-green-700 cursor-pointer mx-3 p-4 rounded-3xl uppercase ${checkLocation(SING_IN_PATH)?"bg-green-700":""}`}>
          Signin
        </NavLink>

 

    </div>

     }
    </div>
    </>
  )
}

export default Header
