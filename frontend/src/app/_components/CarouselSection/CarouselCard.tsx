import Image from "next/image";


const CarouselCard: React.FC = () => {
  return (
    <div className="relative h-full w-full flex items-end group">
      <Image src="https://i.ibb.co/3z7vTkC/image.png" alt="" fill className="object-cover"/>
      <div className="relative w-full bg-gradient-to-b from-transparent to-zinc-900 group-hover:to-black h-32">
      <div className="h-full flex flex-col text-white p-4">
          <div className="h-2/5">
            <p className="font-bold text-2xl">
                CIEE e Google ofertam 70 mil bolsas de estudos na área de
                tecnologia; veja como participar
            </p>
          </div>
          <div className="h-2/5">
            <p className="text-base">
                Curso obteve conceito máximo em todas as dimensões avaliadas:
                metodologia de ensino, professores e infraestrutura
            </p>
          </div>
          <div className="flex items-end flex-row justify-between h-1/5">
            <p className="font-semibold text-base">Ceara</p>
            <p className="text-xs">Há 18 horas -- Em Eleições 2024 no Ceará</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;