import { useEffect } from "react"
import SwiperComponent from "../components/SwiperComponent"
import { openInNewTab } from "../helper/openInNewTab"
import MessageSentSuceesfully from "../components/MessageSentSuceesfully";

function Home() {
  useEffect(() => {
    if(sessionStorage.getItem('Email')&& 
       sessionStorage.getItem('Subject')&& 
       sessionStorage.getItem('body')){
        openInNewTab(`mailto:${sessionStorage.getItem('Email')}?Subject=
        ${sessionStorage.getItem('Subject')}&body=${sessionStorage.getItem('body')}`);
        sessionStorage.removeItem('Email');
       sessionStorage.removeItem('Subject'); 
       sessionStorage.removeItem('body');
       MessageSentSuceesfully();
       }
  }, [])
  return (
    <div className=' bg-green-100 min-h-screen py-[75px] '>
    <SwiperComponent/>
    </div>
  )
}

export default Home
