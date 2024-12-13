import { PostsProps } from "../../page";
export default async function PostInfo({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostsProps = await response.json();
  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  );
}
