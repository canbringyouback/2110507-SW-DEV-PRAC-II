'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
export default function Banner(){
   const covers=['/image/cover.jpg','/image/cover2.jpg','/image/cover3.jpg','/image/cover4.jpg']
   const [index,setIndex]=useState(0)
   const router =useRouter()
   const {data:session} =useSession()
   return(
       <div className="block p-5 m-0 h-[50vh] w-[100vw] relative" onClick={()=>{setIndex(index+1)}}>
             <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className="relative text-center top-[20%] z-20">
                <h3 className='text-5xl font-medium subpixel-antialiased text-orange-600 text-wrap'>Vaccine Service Center</h3>
                <h4 className='styles.bannerText text-3xl font-serif text-orange-600 decoration-slate-50 subpixel-antialiased decoration-dotted underline decoration-orange-600'>ฉีดวัคซีนฟรีทุกวันจันทร์-ศุกร์ 9.00-17.00 น.</h4>
            </div>
            {
                session?<div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>
                   Welcome {session.user?.name}</div>:null 
            }
            <button className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent"
             onClick={(e)=>{e.stopPropagation(); router.push('/hospital')}}>
            Select Hospital
            </button>
        </div>
    )
}