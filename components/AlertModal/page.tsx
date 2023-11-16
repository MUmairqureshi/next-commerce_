import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle } from 'lucide-react';
import Link from 'next/link';

const AlertModal = ({ Data }: { Data: any }) => {
  const handleClick = () => {
    Data.closeState(false);
  };
  return (
    <div className="absolute top-0 z-20  flex h-full w-full items-center justify-center backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-4 border-2 border-slate-100 bg-white px-20 py-12 shadow-lg">
        {Data.title == 'Success!' ? <CheckCircle2 size={49} /> : <XCircle size={49} />}
        <h1 className="text-lg font-semibold">{Data.message}</h1>
        {Data.href ? (
          <Link className="w-full" href={Data.href}>
            <Button className="w-full bg-[#003445] text-white" onClick={handleClick}>
              Ok
            </Button>
          </Link>
        ) : (
          <Button className="w-full bg-[#003445] text-white" onClick={handleClick}>
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
};

export default AlertModal;
