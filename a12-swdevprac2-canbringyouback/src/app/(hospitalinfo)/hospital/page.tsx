import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
export default function Hospital() {
const hospitals=getHospitals();
  return (
    <main className="text-center p-5">
      <h1 className="text-2xl border-b-2 border-blue-500  inline-block font-medium">Select your hospital</h1>
      <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
      
   <HospitalCatalog hospitalsJson={hospitals}/>
   </Suspense>
     </main>
  );
}
