"use client"
import Banner from "@/components/Banner";
import Card from "@/components/Card";

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
     
  return (
    <div>
      <div className="m-5 flex flex-row content-around,
        justify-around flex-wrap ">
        <Card hospitalName='Chulalongkorn Hospital' imgSrc="/image/chula.jpg" onRating={(hospitalname:string,rating:number)=>dispatchRating({type:'s',name:hospitalname,rating:rating})}/>
        <Card hospitalName='Rajavithi Hospital' imgSrc="/image/rajavithi.jpg" onRating={(hospitalname:string,rating:number)=>dispatchRating({type:'s',name:hospitalname,rating:rating})}/>
        <Card hospitalName='Thammasat University Hospital' imgSrc="/image/thammasat.jpg" onRating={(hospitalname:string,rating:number)=>dispatchRating({type:'s',name:hospitalname,rating:rating})}/>
      </div>
      <div className="w-full text-2xl font-medium">Hospital List with Ratings : {map.size}</div>
     {Array.from(map).map(([k,v])=><div data-testid={k} key={k} className="text-xl" onClick={()=>dispatchRating({type:'a',name:k,rating:0})}>{k} : {v}</div>)}

  

    </div>
  );
}
