import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

const AlertModal = ({Data}:{Data:any}) => {
  const handleClick=()=>{
    Data.closeState(false)
  }
    return (
    <div className="w-full h-full backdrop-blur-sm  z-20 absolute top-0 flex justify-center items-center">
      <div className="bg-white gap-4 shadow-lg border-slate-100 border-2 flex justify-center items-center flex-col py-12 px-20">
        {Data.title=="Success!"?(<CheckCircle2 size={49}/>):
        (<XCircle size={49}/>)}
      <h1 className="text-lg font-semibold">{Data.message}</h1>
      {Data.href?(
        <Link className="w-full" href={Data.href}>
          <Button className="bg-[#003445] text-white w-full" onClick={handleClick}>Ok</Button>
        </Link>)
          :(<Button className="bg-[#003445] text-white w-full" onClick={handleClick}>Try Again</Button>)}

      
      </div>
      </div>
  )
}

export default AlertModal