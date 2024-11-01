import Link from "next/link";



const Footer: React.FC = () => {
    return (
        <div className="text-zinc-500 border-t border-border">
            <div className="h-96 bg-muted/10">
            </div>
            <div className="h-16 bg-background flex justify-center items-center border-t border-border">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">© 2024 <Link className="font-medium underline underline-offset-4" href="#">Vinicius Oliveira</Link> | Todos os Direitos Reservados nos Termos da Licença</p>
            </div>
        </div>
    );
};

export default Footer;