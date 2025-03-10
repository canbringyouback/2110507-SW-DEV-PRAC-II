import styles from './card.module.css'
import Image from 'next/image';


export default function Card({hospitalName,imgSrc}:{hospitalName:string,imgSrc:string}){
    return (
   <div className="w-1/5 h-[40vh] rounded-lg shadow-lg bg-white">
    <div className="w-full h-[70%] relative rounded-t-lg">
        <Image src={imgSrc}
        alt ='Hospital'
        fill={true}
       className='object-cover rounded-t-lg'/>
        </div>
        <div className="content-center text-center font-serif text-2xl w-full h-[30%] p-[10px] text-black">
                <h3>{hospitalName}</h3>
            </div>
   </div>

    )
}