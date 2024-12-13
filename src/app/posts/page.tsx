// Server components --> Clients components
// import Button from "@/components/button";
interface PostsProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostsProps[];
}

export default async function Posts() {
  const response = await fetch("https://dummyjson.com/posts");
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
          </div>
        ))}
      </div>
    </>
  );
}
