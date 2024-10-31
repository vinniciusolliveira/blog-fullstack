"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Função para fechar o modal
  const handleClose = () => {
    setIsOpen(false);
    setQuery(""); // Limpa a pesquisa se necessário
  };

  // Função para lidar com o clique fora do modal
  const handleOutsideClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest(".modal-content") === null) {
      handleClose(); // Fecha o modal se o clique foi fora dele
    }
  };

  // Efeito para lidar com a tecla Esc
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose(); // Fecha o modal ao pressionar Esc
      }
    };

    // Adiciona o evento de escuta
    window.addEventListener("keydown", handleKeyDown);
    
    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Barra de pesquisa que abre o modal */}
      <div className="h-full flex items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="text-left w-full border border-zinc-700 bg-zinc-800 p-2 rounded-md text-zinc-400 hover:text-white"
        >
          <span className="flex items-center gap-2">
            <Search size={18} />
            <span>Buscar...</span>
          </span>
        </button>
      </div>

      {/* Modal de pesquisa */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOutsideClick} // Adiciona o manipulador de clique aqui
        >
          <div className={`${isOpen ? "-translate-y-0" : "-translate-y-4"} w-[31.875rem] h-96 bg-zinc-900 rounded-lg shadow-lg border border-zinc-700 transition ease-in-out delay-150 duration-300`}>
            <div className="h-12 flex flex-row justify-center items-center border-b border-zinc-700 p-1">
              <div className="w-1/12 flex justify-center items-center">
                <Search color="white" width={15} />
              </div>
              <div className="w-10/12 flex justify-center items-center">
                <Input
                  type="text"
                  className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0 focus:text-white text-zinc-400"
                  placeholder="Buscar..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="w-1/12 flex justify-center items-center">
                <button
                  className="text-zinc-300 hover:text-white"
                  onClick={handleClose} // Usa a função handleClose
                >
                  <X width={15} />
                </button>
              </div>
            </div>
            <div>
              <ScrollArea className="h-[21rem] w-full">
                <div className="p-4">
                  {/* Itens de exemplo */}
                  {Array.from({ length: 10 }, (_, index) => (
                    <div
                      key={index}
                      className="h-11 w-full hover:bg-zinc-800 rounded-sm flex items-center justify-start pl-2"
                    >
                      <p className="text-zinc-300 font-semibold">
                        Lorem Ipsum {index + 1}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
