'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LogoutButton = async () => {
  const router = useRouter();
  const Logout = async () => {
    await axios.get('/api/logout');
    router.push('/');
  };
  return (
    <button
      className="m-0 p-0 text-xs italic text-[#003445] underline"
      onClick={async () => await Logout()}
    >
      logout
    </button>
  );
};

export default LogoutButton;
