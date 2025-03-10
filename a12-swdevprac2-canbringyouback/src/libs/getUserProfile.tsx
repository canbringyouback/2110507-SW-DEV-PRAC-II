export default async function getUserProfile(token:string){
const response=await fetch("https://a09-swdevprac2-backend.vercel.app:443/api/v1/auth/me",{
    method:"GET",
    headers:{
        authorization:`Bearer ${token}`,

    },
})
if(!response.ok){
    throw new Error("Failed to fetch user profile")

}
return await response.json()
}













