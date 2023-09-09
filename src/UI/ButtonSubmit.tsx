

import React from 'react'

function ButtonSubmit({name,className,onClick}:{name:string,className?:string,onClick?:()=>void}) {
  return (
    <div className='w-[100%] '>
    <button type={`${onClick!==undefined?"button":"submit"}`} onClick={onClick} className={`${className !==undefined? `${className}` :
    'uppercase text-2xl px-3 h-14 hover:bg-blue-400 bg-blue-600 w-[100%] text-center text-white my-2 '}`}>
      {name}
    </button>
    
   </div>
  )
}

export default React.memo(ButtonSubmit);
