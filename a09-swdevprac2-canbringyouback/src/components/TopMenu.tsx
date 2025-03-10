import styles from './topmenu.module.css'
import Image from 'next/image'
import TopmenuItem from './TopMenuItem';

export default function Topmenu(){

    return (
        <div className="flex-row-reverse flex border-y border-x-gray-500 border-solid h-[50px] bg-white fixed inset-x-0 top-0 z-30">
          <Image src={'/image/logo.png'} className="h-full w-auto"
         alt='logo' width={0} height={0} sizes="100vh"/>
          <TopmenuItem title='Booking' pageRef='/booking'/>
        </div>
    )
    ;
}


 
  
  
