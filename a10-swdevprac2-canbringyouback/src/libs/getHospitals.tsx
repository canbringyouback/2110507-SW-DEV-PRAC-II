export default async function getHospitals(){
   await new Promise((resolve)=>setTimeout(resolve,1000))
 const response = await fetch('https://a09-swdevprac2-backend.vercel.app/api/v1/hospitals')
 if(!response.ok){
    throw new Error("Fail to fetch hospitals")
 }
 return await response.json()

}