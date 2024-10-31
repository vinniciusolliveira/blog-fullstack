import Card from "./Card";



const MenuContent: React.FC = () => {
    return (
        <div className="max-h-[1426px] w-96 border rounded-2xl">
            <div className="h-16 flex items-center justify-center border-b">
                <h3 className="text-2xl text-black font-semibold">Escolhas dos Editores</h3>
            </div>
            <div className="flex justify-center">
                <div className="w-10/12">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                </div>
            </div>
            <div className="h-16 flex items-center justify-center border-t">
                <button>Mais conteúdos recomendados</button>
            </div>
        </div>
    )
}

export default MenuContent;