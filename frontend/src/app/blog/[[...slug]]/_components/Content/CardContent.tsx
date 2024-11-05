import Image from "next/image";
import Link from "next/link";




interface CardContentProps {
  title: string
  subtitle?: string
  description?: string
  srcImage: string
  category?: string
  locale?: string
  date: string
}


const CardContent: React.FC<CardContentProps> = ({title, subtitle, description, srcImage, category, locale, date}) => {
  return (
    <div className="minh-[13.31rem] w-full border-b border-border flex items-start">
      <div className="min-h-[13.31rem] w-full flex flex-row justify-between gap-4 pb-8">
        <div className="w-[24rem] flex justify-center">
          <Link href="" className="h-[13.31rem] w-[24rem] relative">
            <Image
              className="rounded-xl object-cover"
              src={srcImage}
              alt={title}
              fill
            />
          </Link>
        </div>
        <div className="h-52 w-w-full flex flex-col gap-1 ">
          <div>
            <p className="font-semibold text-base">{subtitle}</p>
          </div>
          <div>
            <Link href="" className="font-bold text-2xl hover:underline">{title}</Link>
          </div>
          <div>
            <p className="text-base">{description}</p>
          </div>
          <div><p className="text-xs">{date} — Em {category} no {locale}</p></div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
