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
          {session?
          <Link href="/api/auth/signout"><div className='flex underline items-center absolute left-0 h-full px-2 absolute left-0 text-cyan-600 text-sm'>Sign-Out of {session.user?.name}</div></Link>
        :<Link href="/api/auth/signin"><div className='flex underline items-center absolute left-0 h-full px-2 absolute left-0 text-cyan-600 text-sm'>Sign-In</div></Link>}
        </div>
    )
    ;
}


 
  
  
