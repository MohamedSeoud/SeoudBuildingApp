import React, { useState } from 'react' 
import image from '../assets/20944201.jpg'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { FORGET_PASSWORD_PATH, HOME_PATH, SING_UP_PATH } from '../helper/enum/navigationPath';
import { Form, Formik,Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import { SignInFormModel } from '../helper/types';
import { FirebaseSignIn } from '../firebase/Firebase';
import OAuthentication from '../helper/OAuthentication';


function Signin() {
  const[eyeShow,setEyeShow] =useState(true);
  const navigate=useNavigate();
  const initialValues = {
    email:"",
    password:""
  }

  const onSubmit =async(values:SignInFormModel,{resetForm}:{resetForm:()=>void})=>{
    console.log(values)
    const value =await FirebaseSignIn(values);
    if(value){
      resetForm();
      navigate(HOME_PATH)
    }
    return;
  }

  const validationSchema= Yup.object({
    email:Yup.string().required('Required').email('Email not valid'),
    password:Yup.string().required('Required')
  })


  return (
    <div className=' flex flex-col gap-5  h-fit py-28 w-[100%] px-[30px] overflow-hidden bg-[#d4d4d4]'>
      <div className=' uppercase text-black text-center w-[100%]  overflow-hidden text-5xl font-bold'>
        sing in
      </div>
      <div className=' grid grid-cols-2 max-md:grid-cols-1 gap-5 w-[100%]  my-7  overflow-hidden '>

        <div className='w-[100%] col-span-1 mx-4  overflow-hidden  '>
          <img src={image} className='rounded-[20px] h-[500px] w-[90%] '/>

        </div>
       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}
       validateOnChange={false}
       validateOnBlur={false}
       >
        <Form className='flex flex-col col-span-1 py-5 w-[100%]  overflow-hidden gap-y-6'>

          <div>
          <Field type='text' name='email' placeholder='Email address' className='w-[100%] text-2xl px-3 h-14'/>
          <div className=' text-red-600 text-xl'>
          <ErrorMessage name='email'/>
          </div>
          </div>



          <div>
            <div className=' flex flex-col'>
            <div className='w-[100%] h-fit flex flex-col justify-end items-end'>
            <Field name='password' type={`${eyeShow?"password":"text"}`} placeholder='Password' className='w-[100%] text-2xl px-3 h-14'/>
            <div className=' relative bottom-11  px-3 cursor-pointer' onClick={()=>setEyeShow(!eyeShow)}>
              { eyeShow?
            <BsFillEyeFill size="2rem" />
            :
            <BsFillEyeSlashFill size="2rem"/>
              }
            </div>
            </div>
            <div className=' relative bottom-7 text-red-600 text-xl'>
            <ErrorMessage name='password'/>
            </div>
            </div>
          </div>

          <div className='flex flex-row justify-between'>
            <div>
          <p className=' text-2xl'>Don't have an account? <Link to={SING_UP_PATH} className=' text-red-600 cursor-pointer
           hover:border-b-2
           border-red-600 border-spacing-2'>Register </Link></p>
           </div>
           <Link to={FORGET_PASSWORD_PATH} className=' text-2xl max-h-[31px] text-blue-600 cursor-pointer hover:border-b-2  border-spacing-2
            border-blue-600'>
            Forgot Password?
           </Link>
           </div>
           <div className='w-[100%] '>
            <button type='submit' className=' uppercase text-2xl px-3 h-14 hover:bg-blue-400 bg-blue-600 w-[100%] text-center text-white my-2 '>Sign in</button>
           </div>
           <div className='w-[100%] justify-between items-center flex flex-row '>
            <div className='w-[45%]  bg-gray-400 h-[1.5px]'></div>
            <div className='w-[10%]  uppercase  text-center font-bold text-xl'> OR</div>

            <div className='w-[45%]  bg-gray-400 h-[1.5px]'></div>

            
           </div>

           <OAuthentication/>
        </Form>
        </Formik>



        <div>

        </div>

      </div>

      
    </div>
  )
}

export default Signin
