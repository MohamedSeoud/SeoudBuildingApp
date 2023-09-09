import { Field } from 'formik'

function InputNumber({name1,name2,title1,title2,option}:{name1:string,name2?:string,title1:string,title2?:string ,option?:boolean}) {


  return (
    <div className='w-[100%] flex flex-row justify-between items-center max-w-[500px]'>
        <div className=' flex flex-col gap-3'>

            <div className='w-[100%]  uppercase text-xl font-bold  flex flex-row justify-start items-center'>
                {title1}
            </div>

            <div className='  '>
            <Field min="1"  className="w-[180px] text-xl  rounded-md px-7 h-[60px]" 
                name={name1}   type="number" />
            </div>

        </div>
        { option===true?
        null
        :
        <div className=' flex flex-col gap-3'>

            <div className='w-[100%]  uppercase text-xl font-bold  flex flex-row justify-start items-center'>
                {title2}
            </div>

            <div className='  '>
            <Field  min="1" className="w-[180px] text-xl  rounded-md px-7 h-[60px]" 
                name={name2}   type="number" />
            </div>

        </div>
        }
    </div>
  )
}

export default InputNumber
