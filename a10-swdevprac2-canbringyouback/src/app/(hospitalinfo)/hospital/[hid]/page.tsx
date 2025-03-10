import Image from "next/image"
import getHospital from "@/libs/getHospital"
export default async function HospitalDetailPage({params}:{params:{hid:string}}) {
   
    const hospitalDetail =await getHospital(params.hid) 
   
    return (
        <main className="text-center p-5">
            <h1 className='text-2xl font-medium border-b-2 border-blue-500  inline-block'>{hospitalDetail.data.name}</h1>
    <div className="flex flex-row my-5">
        <Image src={hospitalDetail.data.picture}
        alt ='Hospital'
        width={0} height={0} sizes="100vw"
       className='w-[30%] bg-black rounded-lg'/>
    <div className='text-md mx-5 text-left'>Name: {(hospitalDetail.data.name)}
    
    <div >Address: {(hospitalDetail.data.address)}</div>
   
     <div >District: {(hospitalDetail.data.district)}</div>
    
     <div >Postal Code: {(hospitalDetail.data.postalcode)}</div>
      
     <div>Tel: {(hospitalDetail.data.tel)}</div>
    </div>
    </div>
    </main>
  );
}

