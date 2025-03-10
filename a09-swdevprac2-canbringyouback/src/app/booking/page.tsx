import {FormControl,TextField,Select,MenuItem} from '@mui/material';
import DateReserve from '@/components/DateReserve';
export default function Booking(){

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
        <div className="text-xl font-medium">New Reservation</div>
        <div className="w-fit space-y-2">
        
        <FormControl variant="standard" className='w-auto space-y-3 bg-gray-100'>
        
        <TextField variant='standard' name="Name-Lastname" label="Name-Lastname"></TextField>
        
        <TextField variant='standard' name="Citizen ID" label="Citizen ID"></TextField>
         <div className="text-md text-left text-gray-600">Hospital</div>
        <Select variant='standard' name="hospital" id="hospital" className='w-auto h-[2em]'>
           <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
           <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
           <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
        </Select>
        <DateReserve/>
        <button  name ="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">Book Vaccine</button>
        </FormControl>
        </div>
        </main>);
}