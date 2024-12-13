// Server components --> Clients components
import Button from "@/components/button";
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
  console.log(data);

  return (
    <>
      <h1 className="text-center mt-5 mb-2 font-bold">Todos os posts</h1>
      <Button />
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
