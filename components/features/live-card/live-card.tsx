'use client';

import { useRouter } from "next/navigation";

interface LiveCardProps {
  id: string;
  avatar: string;
  name: string;
  memberCount?: string
  onlineCount?: string;
};

const LiveCard = ({
  id,
  avatar,
  name,
  memberCount,
  onlineCount,
}: LiveCardProps) => {
  const router = useRouter();
  return (
    <div
      className="relative group bg-primary-2 py-5 sm:py-10 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-primary-2/80 hover:smooth-hover"
      onClick={() => router.push(`/live/${id}}`, { scroll: false })}
    >
      <img className="w-20 h-20 object-cover object-center rounded-full" src={avatar} alt="cuisine" />
      <h4 className="text-white text-2xl font-bold capitalize text-center">{name}</h4>
      <p className="text-white/80">{memberCount} members</p>
      <p className="absolute top-2 text-black inline-flex items-center text-xs">{onlineCount} Online <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>
  );
};
export default LiveCard;