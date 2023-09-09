import {  Form, Formik } from 'formik'
import { ProfileModel } from '../helper/types';
import * as Yup from 'yup';
import ButtonSubmit from '../UI/ButtonSubmit';
import OptionPart from '../UI/OptionPart';
import { CREATE_LISTING_PATH, SING_UP_PATH } from '../helper/enum/navigationPath';
import { getAuth } from 'firebase/auth';
import { FirebaseEditEmail, FirebaseLogout } from '../firebase/Firebase';
import InputField from '../UI/InputField';
import image from '../assets/profile.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const auth = getAuth();
  const [updateProfile,setUpdateProfile] = useState(false)
  const onChooseHandler =()=>{
    setUpdateProfile(true)
  }

  const validationSchema = Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email('Email not valid').required('Required')
  })
  const initialValues={
    name:auth.currentUser?.displayName ||"",
    email:auth.currentUser?.email ||""
  }
  const onDiscardHandler =()=>{
    setUpdateProfile(false)
  }

  const onSubmit =async(values:ProfileModel)=>{
    console.log('here')
    const value = await FirebaseEditEmail({name:values.name});
    if(value) setUpdateProfile(false);
  }
  return (
     <div className=' flex flex-col gap-4 min-h-screen   justify-center items-center h-fit w-[100%] px-[30px] overflow-hidden bg-green-100'>
      <div className=' uppercase text-black text-center w-[100%]  mt-24  overflow-hidden text-5xl font-bold'>
        My profile
      </div>
      <div className=' w-64 h-64'>
        <img className=' rounded-[200px]' src={image}/>
      </div>
      { !updateProfile ?
      <div className=' flex flex-col gap-5 lg:w-fit md:w-[80%] w-[100%] justify-center text-center items-center'>
        <div>
      <div  className=' px-3 text-[35px] w-[100%] '> Name :  {initialValues.name}</div>
      <div  className=' px-3 text-[35px] w-[100%] '> Email  : {initialValues.email} </div>
      </div>
      <OptionPart name1={`Wanna update your profile ?`} name2='Sign out' func={FirebaseLogout} onClick={onChooseHandler}
            path1={SING_UP_PATH}  option1='Edit'/>

      <Link to={CREATE_LISTING_PATH} className='w-[100%]'><ButtonSubmit name='Sell or rent your house' icon={true} /></Link>

      </div>
      :
      <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema} 
      validateOnBlur={false} validateOnChange={false}>
        <Form className='flex flex-col gap-4 py-5 justify-center items-center lg:w-[40%] md:w-[80%] w-[100%] '>
          <InputField name='name' className=' px-3 h-14 text-[35px] w-[100%]  '  />
          <InputField disabled='true' name='email' className=' px-3 h-14 text-[35px] w-[100%] '/>
          <OptionPart name1={`Wanna discard changes ?`} name2='Sign out' func={FirebaseLogout} onClick={onDiscardHandler}
            path1={SING_UP_PATH}  option1='discard changes'/>
          <ButtonSubmit   name='Apply Changes'/>
        </Form>
      </Formik>
      }

    </div>
  )
}

export default Profile
