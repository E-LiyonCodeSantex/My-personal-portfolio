import { AboutUsCardProps } from "@/interface";
import Image from "next/image";

const AboutUsCard: React.FC<{ card: AboutUsCardProps }> = ({ card }) => {
    return (
        <div className="flex flex-wrap flex-row w-full justify-center items-center gap-4 ">
            <div className="w-[300px] h-[300px] border-1 rounded-tr-[15px] rounded-bl-[15px] border-gray-400">
                <Image
                    src={card.image}
                    alt={card.alt}
                    width={300}
                    height={200}
                    className="rounded-tr-[15px] rounded-bl-[15px] hover:scale-105 transition-transform duration-300 object-cover w-full h-full"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 w-full max-w-[400px]">
                <h1 className="font-semibold text-white">{card.title}</h1>
                <p>{card.description}</p>
            </div>
        </div>
    )
}

export default AboutUsCard;