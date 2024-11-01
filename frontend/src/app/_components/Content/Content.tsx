import CardContent from "./CardContent";

const CardContentProps = {
    title: "CIEE e Google ofertam 70 mil bolsas de estudos na área de tecnologia; veja como participar",
    subtitle: "Ceará",
    description: "Curso obteve conceito máximo em todas as dimensões avaliadas: metodologia de ensino, professores e infraestrutura",
    srcImage: "https://i.ibb.co/3z7vTkC/image.png",
    category: "Eleições 2024",
    locale: "Ceará",
    date: "Há 18 horas"
  }

const Content: React.FC = () => {
    return (
        <div className="flex flex-col gap-8">
            <CardContent title={CardContentProps.title} subtitle={CardContentProps.subtitle} description={CardContentProps.description} srcImage={CardContentProps.srcImage} category={CardContentProps.category} locale={CardContentProps.locale} date={CardContentProps.date}/>
            <CardContent title={CardContentProps.title} subtitle={CardContentProps.subtitle} description={CardContentProps.description} srcImage={CardContentProps.srcImage} category={CardContentProps.category} locale={CardContentProps.locale} date={CardContentProps.date}/>
            <CardContent title={CardContentProps.title} subtitle={CardContentProps.subtitle} description={CardContentProps.description} srcImage={CardContentProps.srcImage} category={CardContentProps.category} locale={CardContentProps.locale} date={CardContentProps.date}/>
            <CardContent title={CardContentProps.title} subtitle={CardContentProps.subtitle} description={CardContentProps.description} srcImage={CardContentProps.srcImage} category={CardContentProps.category} locale={CardContentProps.locale} date={CardContentProps.date}/>
            <CardContent title={CardContentProps.title} subtitle={CardContentProps.subtitle} description={CardContentProps.description} srcImage={CardContentProps.srcImage} category={CardContentProps.category} locale={CardContentProps.locale} date={CardContentProps.date}/>
            <CardContent title={CardContentProps.title} subtitle={CardContentProps.subtitle} description={CardContentProps.description} srcImage={CardContentProps.srcImage} category={CardContentProps.category} locale={CardContentProps.locale} date={CardContentProps.date}/>
            <CardContent title={CardContentProps.title} subtitle={CardContentProps.subtitle} description={CardContentProps.description} srcImage={CardContentProps.srcImage} category={CardContentProps.category} locale={CardContentProps.locale} date={CardContentProps.date}/>
            <CardContent title={CardContentProps.title} subtitle={CardContentProps.subtitle} description={CardContentProps.description} srcImage={CardContentProps.srcImage} category={CardContentProps.category} locale={CardContentProps.locale} date={CardContentProps.date}/>
            <CardContent title={CardContentProps.title} subtitle={CardContentProps.subtitle} description={CardContentProps.description} srcImage={CardContentProps.srcImage} category={CardContentProps.category} locale={CardContentProps.locale} date={CardContentProps.date}/>
            <CardContent title={CardContentProps.title} subtitle={CardContentProps.subtitle} description={CardContentProps.description} srcImage={CardContentProps.srcImage} category={CardContentProps.category} locale={CardContentProps.locale} date={CardContentProps.date}/>
        </div>
    );
};

export default Content;