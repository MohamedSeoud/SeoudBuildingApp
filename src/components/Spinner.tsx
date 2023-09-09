import image from '../assets/spinner.svg';

function Spinner() {
  return (
    <div className='w-screen h-screen flex fixed bg-white opacity-50 z-50  justify-center items-center text-center'>
      <img className='w-[100%] h-[100%]'  src={image} alt='Loading.....'/>
    </div>
  )
}

export default Spinner
