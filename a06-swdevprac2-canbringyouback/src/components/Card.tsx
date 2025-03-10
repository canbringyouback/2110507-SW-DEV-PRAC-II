"use client"

import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

export default function Card({hospitalName,imgSrc,onRating}:{hospitalName:string,imgSrc:string,onRating:Function}){
    const [value, setValue] = useState<number | null>(0);
   
    return (
        <InteractiveCard contentName={hospitalName}>
    <div className="w-full h-[70%] relative rounded-t-lg">
        <Image src={imgSrc}
        alt ='Hospital'
        fill={true}
       className='object-cover rounded-t-lg'/>
        </div>
        <div className="content-center text-left font-serif text-xl w-full h-[30%] p-[10px] text-black">
                <h3>{hospitalName}</h3>
                <Rating
  name={hospitalName+" Rating"}         
  id={hospitalName+" Rating"} 
  data-testid= {hospitalName+" Rating"} 
  value={value}
  onChange={(event, newValue) => {
    event.stopPropagation;
    setValue(newValue);
    onRating(hospitalName,newValue);
  }}
/>
            </div>
            
   </InteractiveCard>
    )
}