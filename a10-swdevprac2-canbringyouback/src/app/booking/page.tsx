import {FormControl,TextField,Select,MenuItem} from '@mui/material';
import DateReserve from '@/components/DateReserve';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth';
import getUserProfile from '@/libs/getUserProfile';


export default async function Booking(){
    const session= await getServerSession(authOptions)
    if(!session||!session.user.token) return null
    const profile =await getUserProfile(session.user.token)
    var createdAt =new Date(profile.data.createdAt);
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
        <div className="text-2xl">{profile.data.name}</div>
        <table className="table-auto border-separate border-spacing-2"><tbody>
            <tr><td>Email</td><td>{profile.data.email}</td></tr>
            <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
            <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table>
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