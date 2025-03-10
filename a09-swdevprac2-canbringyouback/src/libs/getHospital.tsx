
export default async function getHospital(hid:string){
   // 
    const response = await fetch(`https://a09-swdevprac2-backend.vercel.app/api/v1/hospitals/${hid}`)
    if(!response.ok){
       throw new Error("Fail to fetch hospital")
    }
    return await response.json()
   
   }