import BlogPage from "./_components/BlogPage";
import PostPage from "./_components/PostPage";
import { notFound } from "next/navigation";

// Defina as categorias e subcategorias que você espera
const categories = ['noticias', 'tecnologia', 'entretenimento'];
const locals = ['brazil', 'usa', 'europe'];
const subcategories = ['eleicoes'];
const years = ['2022', '2023', '2024'];
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export default async function BlogRouter({
  params,
}: {
  params: {
    slug: string[];
  }
}) {
  const [local, category, subcategory, year, month, day, post] = params.slug;

  // Lógica para identificar o que renderizar
  if (locals.includes(local)) {
    if (category && categories.includes(category)) {
      if (subcategory && subcategories.includes(subcategory)) {
        // Verifique se existe um post primeiro
        if (post) {
          // Renderize a página do post
          return <PostPage postId={post} />;
        }

        // Se não houver um post, verifique os outros parâmetros
        if (year && years.includes(year)) {
          if (month && months.includes(month)) {
            if (day && days.includes(day)) {
              // Renderize a página para um dia específico
              return <h1>Posts de {day}/{month}/{year} na subcategoria {subcategory}</h1>;
            }
            // Renderize a página para um mês específico
            return <h1>Posts de {month}/{year} na subcategoria {subcategory}</h1>;
          }
          // Renderize a página para um ano específico
          return <h1>Posts de {year} na subcategoria {subcategory}</h1>;
        }

        // Renderize a página da subcategoria
        return <h1>Subcategoria: {subcategory}</h1>;
      }

      // Renderize a página da categoria
      return <h1>Categoria: {category}</h1>;
    }

    // Renderize a página para um local específico
    return <h1>Blog para {local}</h1>;
  }

  // Se não corresponder a nenhuma rota conhecida
  return notFound();
}
