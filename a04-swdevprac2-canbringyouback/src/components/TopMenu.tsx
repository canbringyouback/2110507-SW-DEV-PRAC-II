import styles from './topmenu.module.css'
import Image from 'next/image'
import TopmenuItem from './TopMenuItem';

export default function Topmenu(){

    return (
        <div className={styles.menucontainer}>
          <Image src={'/image/logo.png'} className="h-full w-auto"
         alt='logo' width={0} height={0} sizes="100vh"/>
          <TopmenuItem title='Booking' pageRef='/booking'/>
        </div>
    )
    ;
}

