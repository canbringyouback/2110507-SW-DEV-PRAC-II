import Image from "next/image"

export default function HospitalDetailPage({params}:{params:{hid:string}}) {
   
    const mockHospitalRepo =new Map() 
    mockHospitalRepo.set("001",{name:"Chulalongkorn Hospital",image:"/image/chula.jpg"})
    mockHospitalRepo.set("002",{name:"Rajavithi Hospital",image:"/image/rajavithi.jpg"})
    mockHospitalRepo.set("003",{name:"Thammasat University Hospital",image:"/image/thammasat.jpg"})

    return (
        <main>
    <div className="flex flex-row my-5">
        <Image src={mockHospitalRepo.get(params.hid).image}
        alt ='Hospital'
        width={0} height={0} sizes="100vw"
       className='w-[30%] bg-black rounded-t-lg'/>
    <div className='tex-md mx-5 text-2xl'>{(mockHospitalRepo.get(params.hid).name)}</div>
    </div>
    </main>
  );
}

export async function generateStaticParams(){
    return [{cid:'001'},{cid:'002'},{cid:'003'}]
}
