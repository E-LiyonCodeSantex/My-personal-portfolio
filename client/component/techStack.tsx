import { AboutUsCardProps } from "@/interface";
import Image from "next/image";

const TechStackCard: React.FC<{ card: AboutUsCardProps }> = ({ card }) => {
    return (
      <div className="w-full py-4">
          <div className="flex flex-col justify-center items-center gap-2 w-[168px] sm:w-[208px] h-[300px] sm:h-[350px] hover:scale-105 transition-transform duration-300 border-1 border-white/50 p-[4px] rounded-2xl glass">
           <div className="w-[160px] sm:w-[200px] sm:h-[200px] h-[150px] rounded-2xl border-1 border-white/50 border-1 border-white/50">
             <Image
                className="hover:scale-105 transition-transform duration-300 rounded-2xl border-1 border-white/50 object-cover w-full h-full"
                width={160}
                height={150}
                src={card.image} alt={card.alt} />
           </div>
                <div className="flex flex-col justify-center items-center gap-2 text-white">
                    <h1 className="font-bold text-l sm:text-2xl">{card.title}</h1>
                    <p className="font-medium text-sm">{card.description}</p>
                </div>
        </div>
      </div>
    )
}

export default TechStackCard;