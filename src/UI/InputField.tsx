import { ErrorMessage, Field } from 'formik'
import React from 'react'


interface Props{
    name:string
    placeholder?:string
    className?:string
    disabled?:string
}
function InputField({name,placeholder,className,disabled}:Props) {
  return (
    <div className='w-[100%]'>
      { disabled !==undefined?
    <Field disabled type='text' name={`${name}`} placeholder={`${placeholder!==undefined?placeholder:""}`}
     className={`${className !==undefined? className : 'w-[100%] text-2xl px-3 h-14'}`}/>
     :
     <Field type='text' name={`${name}`} placeholder={`${placeholder!==undefined?placeholder:""}`}
     className={`${className !==undefined? className : 'w-[100%] text-2xl px-3 h-14'}`}/>
      }
    <div className=' text-red-600 text-xl'>
    <ErrorMessage name={`${name}`}/>
    </div>
    </div>
  )
}

export default React.memo(InputField)
