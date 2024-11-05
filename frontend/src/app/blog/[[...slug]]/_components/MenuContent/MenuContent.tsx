import Card from "./Card";

const CardProps = {
    title: "CIEE e Google ofertam 70 mil bolsas de estudos na área de tecnologia; veja como participar",
    srcImage: "https://i.ibb.co/3z7vTkC/image.png"
}


const MenuContent: React.FC = () => {
    return (
        <div className="max-h-[98rem] w-96 border border-border rounded-2xl">
            <div className="h-16 flex items-center justify-center border-b border-border">
                <h3 className="text-2xl text-black font-semibold">Escolhas dos Editores</h3>
            </div>
            <div className="flex justify-center">
                <div className="w-10/12">
                <Card title={CardProps.title} srcImage={CardProps.srcImage}/>
                <Card title={CardProps.title} srcImage={CardProps.srcImage}/>
                <Card title={CardProps.title} srcImage={CardProps.srcImage}/>
                <Card title={CardProps.title} srcImage={CardProps.srcImage}/>
                <Card title={CardProps.title} srcImage={CardProps.srcImage}/>
                <Card title={CardProps.title} srcImage={CardProps.srcImage}/>
                <Card title={CardProps.title} srcImage={CardProps.srcImage}/>
                <Card title={CardProps.title} srcImage={CardProps.srcImage}/>
                <Card title={CardProps.title} srcImage={CardProps.srcImage}/>
                <Card title={CardProps.title} srcImage={CardProps.srcImage}/>
                </div>
            </div>
            <div className="h-16 flex items-center justify-center border-t border-border">
                <button>Mais conteúdos recomendados</button>
            </div>
        </div>
    )
}

export default MenuContent;