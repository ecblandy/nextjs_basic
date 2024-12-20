// Server components --> Clients components

import Link from "next/link";

// import Button from "@/components/button";
export interface PostsProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface ResponseProps {
  posts: PostsProps[];
}

export const revalidate = 60;

export default async function Posts() {
  // Impede de ficar buscando os dados toda hora para renderizar a página. E armazena no cache!
  // Importante se o conteudo não muda com frequência.
  const response = await fetch("https://dummyjson.com/posts", {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });
  const data: ResponseProps = await response.json();

  async function handleFetchPosts() {
    "use server";
    console.log("CLICOU");
  }

  // Utilizando a action eu consigo obter dados do form sem precisar da reatividade como onclick do lado client.
  async function handleSearchUsers(formData: FormData) {
    "use server";
    const userId = formData.get("userId");
    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
    const data: ResponseProps = await response.json();

    console.log(data);
  }

  return (
    <>
      <h1 className="text-center mt-5 mb-2 font-bold">Todos os posts</h1>
      <button onClick={handleFetchPosts}>CLIQUE</button>

      <form action={handleSearchUsers} className="flex gap-2 my-4">
        <input
          type="text"
          placeholder="ID do usuário"
          className="border border-gray-200 p-2"
          name="userId"
        />
        <button className="bg-blue-500 text-white p-2">Buscar usuario</button>
      </form>
      {/* <Button /> */}
      <div className="flex flex-col gap-4">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-gray-200 p-4 mx-2 rounded-md">
            <h2 className="font-bold">Titulo: {post.title}</h2>
            <p>body: {post.body}</p>
            <Link className="text-blue-500" href={`/posts/${post.id}`}>
              Ver detalhes desse post
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
