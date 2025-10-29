import { TableCardProps } from "@/interface";
import Image from "next/image";

const TableCard: React.FC<{ card: TableCardProps }> = ({ card }) => {
    return (
        <div className="flex flex-wrap flex-row w-full justify-center items-center gap-4 z-10">
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
                <p className="gap-2">{card.description} {card.link?.[0] && (
                    card.link.map((url, index) =>(
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 no-underline gap-2 ">Check this out</a>
                    ))
                )}</p>

                {/**{card.link.map((url, index) => (
  <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
    Link {index + 1}
  </a>
))} 
 or single 
 {/**(
                    <a href={card.link[0]} target="_blank" rel="noopener noreferrer" className="text-blue-400 no-underline">
                    Check this out
                </a>*}*/}
            </div>
        </div>
    )
}

export default TableCard;