import {  Form, Formik } from 'formik'
import { ProfileModel } from '../helper/types';
import * as Yup from 'yup';
import ButtonSubmit from '../UI/ButtonSubmit';
import OptionPart from '../UI/OptionPart';
import { SING_UP_PATH } from '../helper/enum/navigationPath';
import { getAuth } from 'firebase/auth';
import { FirebaseLogout } from '../firebase/Firebase';
import InputField from '../UI/InputField';

function Profile() {
  const auth = getAuth()

  const validationSchema = Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email('Email not valid').required('Required')
  })
  const initialValues={
    name:auth.currentUser?.displayName ||"",
    email:auth.currentUser?.email ||""
  }

  const onSubmit =(values:ProfileModel)=>{
    console.log(values)
  }
  return (
     <div className=' flex flex-col gap-5 min-h-screen  justify-center items-center h-fit w-[100%] px-[30px] overflow-hidden bg-[#d4d4d4]'>
      <div className=' uppercase text-black text-center w-[100%]  overflow-hidden text-5xl font-bold'>
        My profile
      </div>

      <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema} 
      validateOnBlur={false} validateOnChange={false}>
        <Form className='flex flex-col gap-4 py-5 justify-center items-center lg:w-[50%] md:w-[80%] w-[100%] '>
          <InputField name='name' className=' px-3 h-16 text-[35px] w-[100%] '  />
          <InputField name='email' className=' px-3 h-16 text-[35px] w-[100%] '/>
          <OptionPart name1={`Don't you want to change your name?`} name2='Sign out' func={FirebaseLogout}
            path1={SING_UP_PATH}  option1='Edit'/>
          <ButtonSubmit name='Update Profile'/>
        </Form>
      </Formik>

    </div>
  )
}

export default Profile
