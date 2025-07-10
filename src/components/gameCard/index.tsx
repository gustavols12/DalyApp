import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";
import { BsArrowRightCircle } from "react-icons/bs";

interface GameCardProps {
  data: GameProps;
}

export function GameCard({ data }: GameCardProps) {
  return (
    <Link href={`/game/${data.id}`}>
      <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">
        <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
          <Image
            className="rounded-lg object-cover "
            src={data.image_url}
            alt={data.title}
            fill={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 44vw"
          />
        </div>
        <div className=" flex items-center justify-between mt-4">
          <p className="font-bold text-sm px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden">
            {data.title}
          </p>
          <BsArrowRightCircle size={24} color="#000" />
        </div>
      </section>
    </Link>
  );
}
