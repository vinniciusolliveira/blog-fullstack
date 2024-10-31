import Image from "next/image";

const CardContent: React.FC = () => {
  return (
    <div className="minh-[13.31rem] w-full border-b border-zinc-700 flex items-start">
      <div className="min-h-[13.31rem] w-full flex flex-row justify-between gap-4 pb-8">
        <div className="w-[24rem] flex justify-center">
          <div className="h-[13.31rem] w-[24rem] relative">
            <Image
              className="rounded-xl object-cover"
              src="https://i.ibb.co/5Gxhpr8/images.jpg"
              alt=""
              fill
            />
          </div>
        </div>
        <div className="h-52 w-w-full flex flex-col gap-1 ">
          <div>
            <p className="font-semibold text-base">Ceara</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
                CIEE e Google ofertam 70 mil bolsas de estudos na área de
                tecnologia; veja como participar
            </p>
          </div>
          <div>
            <p className="text-base">
                Curso obteve conceito máximo em todas as dimensões avaliadas:
                metodologia de ensino, professores e infraestrutura
            </p>
          </div>
          <div><p className="text-xs">Há 18 horas -- Em Eleições 2024 no Ceará</p></div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
