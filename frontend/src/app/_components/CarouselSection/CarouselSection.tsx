"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import CarouselCard from "./CarouselCard";

const carouselOptions = {
  loop: true,
};
const carouselPlugins = [
  Autoplay({
    delay: 2500,
    stopOnFocusIn: false,
    stopOnMouseEnter: true,
    stopOnInteraction: false
  }),
  WheelGesturesPlugin(),
]

const CarouselCardProps = {
  title: "CIEE e Google ofertam 70 mil bolsas de estudos na área de tecnologia; veja como participar",
  subtitle: "Ceará",
  description: "Curso obteve conceito máximo em todas as dimensões avaliadas: metodologia de ensino, professores e infraestrutura",
  srcImage: "https://i.ibb.co/3z7vTkC/image.png",
  category: "Eleições 2024",
  locale: "Ceará",
  date: "Há 18 horas"
}

const CarouselSection: React.FC = () => {

  return (
    <div className="min-h-full h-full w-full">
      <Carousel opts={carouselOptions} plugins={carouselPlugins} className="min-h-full h-full w-full">
      <CarouselContent className="text-white min-h-full h-full">
        <CarouselItem className="h-full w-full"><CarouselCard title={CarouselCardProps.title} subtitle={CarouselCardProps.subtitle} description={CarouselCardProps.description} srcImage={CarouselCardProps.srcImage} category={CarouselCardProps.category} locale={CarouselCardProps.locale} date={CarouselCardProps.date}/></CarouselItem>
        <CarouselItem className="h-full w-full"><CarouselCard title={CarouselCardProps.title} subtitle={CarouselCardProps.subtitle} description={CarouselCardProps.description} srcImage={CarouselCardProps.srcImage} category={CarouselCardProps.category} locale={CarouselCardProps.locale} date={CarouselCardProps.date}/></CarouselItem>
        <CarouselItem className="h-full w-full"><CarouselCard title={CarouselCardProps.title} subtitle={CarouselCardProps.subtitle} description={CarouselCardProps.description} srcImage={CarouselCardProps.srcImage} category={CarouselCardProps.category} locale={CarouselCardProps.locale} date={CarouselCardProps.date}/></CarouselItem>
      </CarouselContent>
    </Carousel>
    </div>
  );
};

export default CarouselSection;
