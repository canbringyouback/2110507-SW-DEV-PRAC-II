import styles from './topmenu.module.css'
import Image from 'next/image'
import TopmenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { Link } from '@mui/material';

export default async function Topmenu(){
  const session = await getServerSession(authOptions)

    return (
        <div className="flex-row-reverse flex border-y border-x-gray-500 border-solid h-[50px] bg-white fixed inset-x-0 top-0 z-30">
          <Image src={'/image/logo.png'} className="h-full w-auto"
         alt='logo' width={0} height={0} sizes="100vh"/>
          <TopmenuItem title='Booking' pageRef='/booking'/>
          <div className='flex underline items-center absolute left-24 h-full px-2 absolute text-black'><TopmenuItem title='My Booking' pageRef='/mybooking' /></div>
          {session?
          <Link href="/api/auth/signout"><div className='text-base w-[120px]  text-center my-auto content-end flex underline items-center absolute left-0 h-full px-2 absolute left-0 text-cyan-600 '>Sign-Out of {session.user?.name}</div></Link>
        :<Link href="/api/auth/signin"><div className='text-base w-[120px]  text-center my-auto content-end flex underline items-center absolute left-0 h-full px-2 absolute left-0 text-cyan-600 '>Sign-In</div></Link>}
        </div>
    )
    ;
}


 
  
  
