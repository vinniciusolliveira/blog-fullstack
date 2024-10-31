import Image from "next/image";
import Link from "next/link";

const Card: React.FC = () => {
    return (
        <Link href="" className="flex flex-row w-full h-36 justify-between items-center border-b last:border-b-0 hover:underline text-black">
            <div className="h-28 w-8/12 flex items-center justify-center">
                <p className="text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex porro facilis quam! Asperiores, aperiam ducimus nobis cum
                </p>
            </div>
            <div className="w-4/12 flex justify-center">
                <div className="h-28 w-28 relative">
                    <Image  className="rounded-2xl object-cover" src="https://i.ibb.co/5Gxhpr8/images.jpg" alt="" fill/>
                </div>
            </div>
        </Link>
    )
}

export default Card;
