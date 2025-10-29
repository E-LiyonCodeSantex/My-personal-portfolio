import { ServicesCardProps } from "@/interface/index";
import Image from "next/image";

const ServicesCard: React.FC<{ card: ServicesCardProps }> = ({ card }) => {
    return (
        <div className="w-full overflow-hidden p-4 border-1 border-white/40 shadow rounded-lg mb-6 shadow-white-40">
            <Image
                src={card.image}
                alt="Top left"
                width={200}
                height={200}
                className="float-left mr-4 mb-2 object-cover border-1 shadow-sm rounded-lg shadow-white-40"
            />
            <div className="text-justify">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-4">
                    <Image src={card.icon} alt=""
                    width={50}
                    height={50}
                    object-cover
                        className="rounded" />
                    <h1 className="font-bold text-xl">{card.title}</h1>
                </div>
                <p className="text-justify text-sm">
                    {card.text.description}
                    <a href="mailto:eelyondesign@gmail.com?subject=Project%20Inquiry&body=Hi%20there,%20I%20would%20like%20to%20discuss%20a%20project..." className="text-blue-400 ml-1">
                        Click here
                    </a>
                    {" "}to reach out to my team. Or you want help building a simple UI/UX design for a cross platform application?{" "}
                    <a href="mailto:eelyondesign@gmail.com?subject=Project%20Inquiry&body=Hi%20there,%20I%20would%20like%20to%20discuss%20a%20project..." className="text-blue-400">
                        Let’s talk
                    </a>
                </p>
            </div>
        </div>
    )
}


export default ServicesCard;