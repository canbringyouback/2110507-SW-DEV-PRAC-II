import styles from './banner.module.css'
import Image from 'next/image'
export default function Banner(){
    return(
       <div className="block p-5 m-0 h-[50vh] w-[100vw] relative">
             <Image src={'/image/vaccine.jpg'}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className="relative text-center top-[20%] z-20">
                <h3 className='text-5xl font-medium subpixel-antialiased text-wrap'>Vaccine Service Center</h3>
                <h4 className='styles.bannerText text-3xl font-serif decoration-slate-50 subpixel-antialiased decoration-dotted underline decoration-orange-600'>ฉีดวัคซีนฟรีทุกวันจันทร์-ศุกร์ 9.00-17.00 น.</h4>
            </div>
        </div>
    )
}