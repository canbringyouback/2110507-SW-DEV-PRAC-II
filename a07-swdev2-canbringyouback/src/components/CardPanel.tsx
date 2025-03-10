"use client"
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Link from "next/link";

import { useReducer } from "react";

export default function Home() {
    const ini=(map:Map<string, number>)=>{
       
        map.set('Chulalongkorn Hospital',0);
        map.set('Rajavithi Hospital',0);
        map.set('Thammasat University Hospital',0);
        return map;
    }
    const ratingReducer=(map:Map<string, number>,a:{type:string,name:string,rating:number})=>
        {   switch(a.type){
            case 's':
                if(a.rating==null){a.rating=0;}
                return new Map(map.set(a.name,a.rating));
            case 'a':
                map.delete(a.name);
                return new Map(map);
            default:
                return map;
            }   
            
        }
        const[map,dispatchRating]=useReducer(ratingReducer,new Map<string, number>,ini);
       const mockHospitalRepo = [{hid:"001",name:"Chulalongkorn Hospital",image:"/image/chula.jpg"},
        {hid:"002",name:"Rajavithi Hospital",image:"/image/rajavithi.jpg"},
        {hid:"003",name:'Thammasat University Hospital' ,image:"/image/thammasat.jpg" }]
  return (
    <div>
      <div className="m-5 flex flex-row content-around,
        justify-around flex-wrap ">
         {  mockHospitalRepo.map((Item)=>
        (<Link href={`/hospital/${Item.hid}`} className="w-1/5"><Card hospitalName={Item.name} imgSrc={Item.image} onRating={(hospitalname:string,rating:number)=>dispatchRating({type:'s',name:hospitalname,rating:rating})}/></Link>
        ))}
       
      </div>
      <div className="w-full text-2xl font-medium">Hospital List with Ratings : {map.size}</div>
     {Array.from(map).map(([k,v])=><div data-testid={k} key={k} className="text-xl" onClick={()=>dispatchRating({type:'a',name:k,rating:0})}>{k} : {v}</div>)}

  

    </div>
  );
}
