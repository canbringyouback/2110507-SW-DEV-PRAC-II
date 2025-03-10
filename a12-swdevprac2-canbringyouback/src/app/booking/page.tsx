"use client"
import {FormControl,TextField,Select,MenuItem} from '@mui/material';
import DateReserve from '@/components/DateReserve';
import { useState } from 'react';
import dayjs,{ Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { addBooking } from '@/redux/features/bookSlice';
import { removeBooking } from '@/redux/features/bookSlice';
import BookingList from "@/components/BookingList"
export default function Booking(){
    const [date,setDate]=useState<Dayjs|null>(null);
    const dispatch=useDispatch<AppDispatch>()
    const [name,setName]=useState<string>('')
    const [lastName,setLastName]=useState<string>('')
    const [id,setId]=useState<string>('')
    const [hospital,setHospital]=useState<string>('')
    const makeBooking=()=>{
        
         if(date?.isValid()&&name!=''&&lastName!=''&&id!=''&&hospital!=''){
            const item:BookingItem={
                name:name,
                surname:lastName,
                id:id,
                hospital:hospital,
                bookDate: dayjs(date).format("DD/MM/YYYY")
            }
            dispatch(addBooking(item))
            window.alert("การจองเสร็จสมบูรณ์");
         }
        else{
            let txt = '';

            if (!date?.isValid()) {
                txt += 'Invalid date. \n';
            }
            if (name === '') {
                txt += 'Name is required. \n';
            }
            if (lastName === '') {
                txt += 'Last name is required. \n';
            }
            if (id === '') {
                txt += 'ID is required. \n';
            }
            if (hospital === '') {
                txt += 'Hospital is required. \n';
            }
            window.alert(txt);
        }}

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
        <div className="text-xl font-medium">New Reservation</div>
        <div className="w-fit space-y-2">
        
        <FormControl variant="standard" className='w-auto space-y-3 bg-gray-100'>
        
        <TextField variant='standard' name="Name" label="Name" onChange={(e)=>{setName(e.target.value)}}></TextField>
        <TextField variant='standard' name="LastName" label="LastName" onChange={(e)=>{setLastName(e.target.value)}}></TextField>
        <TextField variant='standard' name="Citizen ID" label="Citizen ID" onChange={(e)=>{setId(e.target.value)}}></TextField>
         <div className="text-md text-left text-gray-600">Hospital</div>
        <Select variant='standard' name="hospital" id="hospital" className='w-auto h-[2em]' value={hospital} onChange={(e)=>{setHospital(e.target.value)}}>
           <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
           <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
           <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
        </Select>
        <DateReserve onDateChange={(value:Dayjs)=>{setDate(value)}}/>
        <button onClick={makeBooking}  name ="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">Book Vaccine</button>
        </FormControl>
        </div>
        </main>);
}