import React, { useState } from 'react' 
import image from '../assets/20944201.jpg'
import { Icon } from '@iconify/react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FORGET_PASSWORD_PATH, SING_IN_PATH } from '../helper/navigationPath';


function Signup() {
  const[eyeShow,setEyeShow] =useState(true);
  return (
    <div className=' flex flex-col gap-5  h-fit py-28 w-[100%] px-[30px] overflow-hidden bg-[#d4d4d4]'>
      <div className=' uppercase text-black text-center w-[100%]  overflow-hidden text-5xl font-bold'>
        Register
      </div>
      <div className=' grid grid-cols-2 max-md:grid-cols-1 gap-5 w-[100%]  my-7  overflow-hidden '>

        <div className='w-[100%] col-span-1 mx-4  overflow-hidden  '>
          <img src={image} className='rounded-[20px] h-[500px] w-[90%] '/>

        </div>

        <div className='flex flex-col col-span-1 py-5 w-[100%]  overflow-hidden gap-y-6'>

          <input type='text' placeholder='Full Name' className='w-[100%] text-2xl px-3 h-14'/>
          <input type='text' placeholder='Email address' className='w-[100%] text-2xl px-3 h-14'/>


          <div className='w-[100%] h-fit flex flex-col justify-end items-end'>
          <input type={`${eyeShow?"password":"text"}`} placeholder='Password' className='w-[100%] text-2xl px-3 h-14'/>
          <div className=' relative bottom-11  px-3 cursor-pointer' onClick={()=>setEyeShow(!eyeShow)}>
            { eyeShow?
          <BsFillEyeFill size="2rem" />
          :
          <BsFillEyeSlashFill size="2rem"/>
            }
          </div>

          </div>
          <div className='flex flex-row justify-between'>
            <div>
          <p className=' text-2xl'>Have an account? <Link to={SING_IN_PATH} className=' text-red-600 cursor-pointer
           hover:border-b-2
           border-red-600 border-spacing-2'>Sign in </Link></p>
           </div>
           <Link to={FORGET_PASSWORD_PATH} className=' text-2xl max-h-[31px] text-blue-600 cursor-pointer hover:border-b-2  border-spacing-2
            border-blue-600'>
            Forgot Password?
           </Link>
           </div> 
           <div className='w-[100%] '>
            <button className=' uppercase text-2xl px-3 h-14 hover:bg-blue-400 bg-blue-600 w-[100%] text-center text-white my-2 '>sign up </button>
           </div>
           <div className='w-[100%] justify-between items-center flex flex-row '>
            <div className='w-[45%]  bg-gray-400 h-[1.5px]'></div>
            <div className='w-[10%]  uppercase  text-center font-bold text-xl'> OR</div>

            <div className='w-[45%]  bg-gray-400 h-[1.5px]'></div>

            
           </div>

           <div className='w-[100%] '>
            <button className=' uppercase hover:bg-red-300 text-2xl flex flex-row justify-center items-center  px-3 h-14 bg-red-400 w-[100%] text-center text-white my-2 '>
              
              continue with google
              <Icon icon="flat-color-icons:google" width="50" height="50" />
              </button>
           </div>


        </div>
        <div>

        </div>

      </div>

      
    </div>
  )
}

export default Signup
