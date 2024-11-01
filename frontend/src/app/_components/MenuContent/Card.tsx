import Image from "next/image";
import Link from "next/link";

const Card: React.FC = () => {
    return (
        <Link href="" className="flex flex-row w-full h-36 justify-between items-center border-b border-border last:border-b-0 hover:underline">
            <div className="h-28 w-7/12 flex items-center justify-center">
                <p className="text-base text-balance leading-tight group-hover:underline">
                CIEE e Google ofertam 70 mil bolsas de estudos na área de
                tecnologia; veja como participar
                </p>
            </div>
            <div className="w-5/12 flex justify-center">
                <div className="h-28 w-full relative">
                    <Image  className="rounded-2xl object-cover" src="https://i.ibb.co/3z7vTkC/image.png" alt="" fill/>
                </div>
            </div>
        </Link>
    )
}

export default Card;
