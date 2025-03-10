import Link from "next/link";
import Card from "./Card";
export default async function HospitalCatalog({hospitalsJson}:{hospitalsJson:Promise<HospitalJson>}){
const hospitalJsonReady=await hospitalsJson
return (<>
<div className="text-center text-xl">Explore {hospitalJsonReady.count} models in our catalog</div>
<div className="m-5 flex flex-row content-around justify-around flex-wrap p-2.5">
  {  hospitalJsonReady.data.map((hospital:HospitalItem)=>(
    <Link key={hospital.id} href={`/hospital/${hospital.id}`} className="w-1/5">
        <Card key={hospital.id} hospitalName={hospital.name} imgSrc={hospital.picture} /></Link>
    ))}
</div>
</>)
}

