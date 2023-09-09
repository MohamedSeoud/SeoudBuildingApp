import React  from 'react'
import { SellOrRentModel } from '../helper/types'
import * as Yup from "yup"
import { Form, Formik } from 'formik'
import RadioButton from '../UI/RadioButton'
import InputField from '../UI/InputField'
import InputNumber from '../UI/InputNumber'
import TextAreaInput from '../UI/TextAreaInput'

function CreateListing() {

    const intialValues:SellOrRentModel = {
        sellOrRent:"",
        name:"",
        beds:1,
        baths:1,
        parkingSpot:false,
        furnished:false,
        address:"",
        description:"",
        offer:false,
        regularPrice:0,
        image: null
    }
    const ValidationSchema = Yup.object({
        name:Yup.string().required('Required!'),
        address:Yup.string().required('Required!'),
        sellOrRent:Yup.string().required('Required!'),
        beds:Yup.string().required('Required!'),
        baths:Yup.string().required('Required!'),
        parkingSpot:Yup.string().required('Required!'),
        furnished:Yup.string().required('Required!'),

        
    })
    const onSubmit =async(values:SellOrRentModel)=>{
        console.log(values)
    }
  return (
    <div className=' flex flex-col gap-5 min-h-screen justify-center items-center   h-fit py-28 w-[100%]  md:px-[30px]
     overflow-hidden bg-green-100'>
    <div className=' uppercase text-black text-center w-[100%]  overflow-hidden text-5xl font-bold'>
      sing in
    </div>

    <Formik onSubmit={onSubmit} initialValues={intialValues} validationSchema={ValidationSchema}
     validateOnChange={false} validateOnBlur={false}>
    {({setFieldValue})=>(
        <Form className=' bg-green-100 py-9 md:px-36 px-8 w-[100%] max-w-[800px]'>
            <div className='flex flex-col gap-7 w-[100%] justify-center items-center text-center'>

          <RadioButton name='sellOrRent' title='sell / Rent' value1='sell' value2='rent' name2='sell' name3='rent' />
          <InputField name='name' placeholder='Name' label='name' />
          <InputNumber   name1='beds' name2='baths' title1='beds' title2='baths' />
          <RadioButton name='parkingSpot' title='parkingSpot' value1='true' value2='false' name2='yes' name3='no' />
          <RadioButton name='furnished' title='furnished' value1='true' value2='false' name2='yes' name3='no'  />
          <TextAreaInput name='address' placeholder='address' label='address' />
          <TextAreaInput name='description' placeholder='description' label='description' />
          <RadioButton name='offer' title='offer' value1='true' value2='false' name2='yes' name3='no'/>
          <InputNumber   name1='regularPrice' title1='Regular Price' option={true} />
          <div className='w-[500px] h-[300px] text-center flex flex-col cursor-pointer
             justify-center items-center border-[3px]  border-blue-600  rounded-[30px]
             bg-white'>
            <input type='file' name='image' className='text-center flex flex-col w-[100%] h-[100%]
             justify-center items-center border-[3px] opacity-0 ' accept="image/*"
             onChange={(event: React.ChangeEvent<HTMLInputElement> )=>{
                const { target } = event
                const{files} =   target
                if (!event?.target?.files) return;
                 files?.length && setFieldValue("image", files[0] );
                 console.log(files)
             }}
             />
                

             <p className='relative text-blue-600 font-bold text-2xl bottom-64'> Upload Image</p>
          </div>





          </div>





            
        </Form>
    )}
    </Formik>
      
    </div>
  )
}

export default CreateListing
