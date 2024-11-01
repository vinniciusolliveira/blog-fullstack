import Image from "next/image";
import Link from "next/link";


interface MenuContentCardProps {
    title: string
    srcImage: string
}



const Card: React.FC<MenuContentCardProps> = ({ title, srcImage }) => {
    return (
        <Link href="" className="flex flex-row w-full h-36 justify-between items-center border-b border-border last:border-b-0 hover:underline">
            <div className="h-28 w-7/12 flex items-center justify-center">
                <p className="text-base text-balance leading-tight group-hover:underline">{title}</p>
            </div>
            <div className="w-5/12 flex justify-center">
                <div className="h-28 w-full relative">
                    <Image  className="rounded-2xl object-cover" src={srcImage} alt={title} fill/>
                </div>
            </div>
        </Link>
    )
}

export default Card;
