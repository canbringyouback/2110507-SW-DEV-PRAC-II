'use client'
import VideoPlayer from "./VideoPlayer"
import {useState} from "react"
import { useWindowListener } from "@/hooks/useWindowListener"

export default function PromoteCard(){
const [playing,setPlaying]=useState(true)
useWindowListener('contextmenu',(e)=>e.preventDefault())
return (
    <div className="relative w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
        <VideoPlayer isPlaying={playing} vdoSrc="/vdo/getvaccine.mp4"></VideoPlayer>
    <div className="m-5 text-black text-2xl">Get your vaccine today
        <button className="absolute text-base bottom-4 left-500 block rounded-3xl w-[100px] bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-s,"
        onClick={()=>setPlaying(!playing)}>{playing? 'Pause':'Play'}</button>
    </div>
    </div>
    
)


}