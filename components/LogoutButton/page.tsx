"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

const LogoutButton = async () => {
    const router=useRouter();
    const Logout= async ()=>{
        await axios.get("/api/logout")
        router.push("/")
    }
  return (
    <button className="text-[#003445] text-xs underline italic p-0 m-0" onClick={async()=> await Logout()} >
                logout
                </button>
  )
}

export default LogoutButton;