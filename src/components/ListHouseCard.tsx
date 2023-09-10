import React from 'react';
import image from '../assets/profile.jpg';
import { MdLocationOn } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';





function ListHouseCard() {
  return (
    <div className='w-[100%] h-[100%] max-h-[320px] rounded-xl bg-white'>
        <div className=' w-[100%] h-[100%] flex flex-col'>
        <img src={image} className='w-[100%] h-[180px] rounded-t-xl overflow-hidden' alt=''/>
        <div className=' relative text-white rounded-lg flex justify-center text-center items-center
         bg-blue-500 h-[30px] w-fit px-2 bottom-[165px] mx-3 text-xs font-medium uppercase'>
            a month ago

        </div>
        </div>
        <div className=' flex justify-start items-start p-3 relative bottom-[140px] flex-col'>
            <div className='flex justify-between gap-2 flex-row overflow-hidden '>
                <span> <MdLocationOn color="green"  size="1.5rem"/></span>
                <span className='line-clamp-1 w-[100%] text-gray-500'> ddd fds fdsfd sfsvd sfdvsdv d f d v s d dfsfvdf vdsfv d s f v dfv sdfv sd fvsdfv </span>
            </div>

            <div className='line-clamp-1 w-[100%]  text-[25px] font-medium text-blue-900 py-1 '>
                Luxary Luxary Luxary Luxary


            </div>

            <div className='line-clamp-1 w-[100%]  text-[18px] font-normal text-sky-600  '>
                $1200/Month
            </div>

            <div className=' flex flex-row justify-between px-2 w-[100%]'>
            <div className=' flex flex-row gap-x-3 font-bold justify-between '>
             <span>3 ddd</span>
             <span>4 ddd</span>

            </div>
                <div className=' flex flex-row cursor-pointer gap-2'>
                <FaEdit size="1.1rem"/>
                <RiDeleteBin5Fill  size="1.1rem" color="red"/>
                </div>

            </div>



        </div>
    </div>
  )
}

export default ListHouseCard
