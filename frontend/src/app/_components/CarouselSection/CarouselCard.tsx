import Image from "next/image";
import Link from "next/link";


interface CarouselCardProps {
  title: string
  subtitle: string
  description: string
  srcImage: string
  category: string
  locale: string
  date: string
}


const CarouselCard: React.FC<CarouselCardProps> = ({title, subtitle, description, srcImage, category, locale, date}) => {
  return (
    <div className="relative h-full w-full flex items-end group">
      <Image src={srcImage} alt={title} fill className="object-cover"/>
      <div className="relative w-full bg-gradient-to-b from-transparent to-zinc-900 group-hover:to-black h-32">
      <div className="h-full flex flex-col text-white p-4">
          <div className="h-2/5">
            <Link href="" className="font-bold text-2xl hover:underline">{title}</Link>
          </div>
          <div className="h-2/5">
            <p className="text-base">{description}</p>
          </div>
          <div className="flex items-end flex-row justify-between h-1/5">
            <p className="font-semibold text-base">{subtitle}</p>
            <p className="text-xs">{date} — Em {category} no {locale}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;