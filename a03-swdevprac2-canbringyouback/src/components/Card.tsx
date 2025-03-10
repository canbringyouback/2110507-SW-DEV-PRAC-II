import styles from './card.module.css'
import Image from 'next/image';


export default function Card(){
    return (
   <div className={styles.card}>
    <div className={styles.cardimg}>
        <Image src={'/image/HPV.jpg'}
        alt ='HPV Vaccine Picture'
        fill={true}
        objectFit='cover'/>
        </div>
        <div className={styles.cardText}>
                <h3>Gardasil</h3>
                <h4>ป้องกันมะเร็งปากมดลูก</h4>
                <h4>รับวันละ 50 ท่าน</h4>
            </div>
   </div>

    )
}