import styles from './banner.module.css'
import Image from 'next/image'
export default function Banner(){
    return(
       <div className={styles.banner}>
             <Image src={'/image/vaccine.jpg'}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>Vaccine Service Center</h1>
                <h2>ฉีดวัคซีนฟรีทุกวันจันทร์-ศุกร์ 9.00-17.00 น.</h2>
            </div>
        </div>
    )
}