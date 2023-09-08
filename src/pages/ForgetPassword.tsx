import image from '../assets/20944201.jpg'
import { Link } from 'react-router-dom';
import {  SING_IN_PATH, SING_UP_PATH } from '../helper/enum/navigationPath';
import { Form, Formik,Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ForgotPasswordModel } from '../helper/types';
import OAuthentication from '../helper/OAuthentication';
import { FirebaseForgetPassword } from '../firebase/Firebase';



function ForgetPassword() {

  const onSubmit=(values:ForgotPasswordModel)=>{
    console.log(values)
    FirebaseForgetPassword(values);
  }

  const validationSchema= Yup.object({
    email:Yup.string().required('Required').email('Email Not Valid')
  });

  const intialValues = {
    email:''
  }
  return (
    <div className=' flex flex-col gap-5  h-fit py-28 w-[100%] px-[30px] overflow-hidden bg-[#d4d4d4]'>
      <div className=' uppercase text-black text-center w-[100%]  overflow-hidden text-5xl font-bold'>
        forgot the password
      </div>
      <div className=' grid grid-cols-2 max-md:grid-cols-1 gap-5 w-[100%]  my-7  overflow-hidden '>

        <div className='w-[100%] col-span-1 mx-4  overflow-hidden  '>
          <img src={image} className='rounded-[20px] h-[500px] w-[90%] '/>

        </div>
 
      <Formik onSubmit={onSubmit} initialValues={intialValues} validationSchema={validationSchema}
       validateOnBlur={false} validateOnChange={false}>
        <Form className='flex flex-col col-span-1 py-5 w-[100%]  justify-center  overflow-hidden gap-y-6'>

        <div>
          <Field type='email' name='email' placeholder='Email address' className='w-[100%] text-2xl px-3 h-14'/>
          <div className='text-red-600 text-xl'>
          <ErrorMessage name='email'/>
          </div>
        </div>
          <div className='flex flex-row justify-between'>
            <div>
          <p className=' text-2xl'>Do have an account? <Link to={SING_UP_PATH} className=' text-red-600 cursor-pointer
           hover:border-b-2
           border-red-600 border-spacing-2'>Sign up</Link></p>
           </div>
           <Link to={SING_IN_PATH} className=' text-2xl max-h-[31px] text-blue-600 cursor-pointer hover:border-b-2  border-spacing-2
            border-blue-600'>
            Sign in instead?
           </Link>
           </div> 
           <div className='w-[100%] '>
            <button type='submit' className=' uppercase text-2xl px-3 h-14 hover:bg-blue-400 bg-blue-600 w-[100%] text-center text-white my-2 '>
              send rest password </button>
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

export default ForgetPassword
