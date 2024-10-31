"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
]

const CarouselSection: React.FC = () => {

  return (
    <div className="min-h-full h-full w-full">
      <Carousel opts={carouselOptions} plugins={carouselPlugins} className="min-h-full h-full w-full">
      <CarouselContent className="text-white min-h-full h-full">
        <CarouselItem className="h-full w-full"><CarouselCard/></CarouselItem>
        <CarouselItem className="h-full w-full"><CarouselCard/></CarouselItem>
        <CarouselItem className="h-full w-full"><CarouselCard/></CarouselItem>
      </CarouselContent>
    </Carousel>
    </div>
  );
};

export default CarouselSection;
