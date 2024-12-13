import { Suspense } from "react";
import PostInfo from "./_components/post";

export default async function DetailPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Detalhes do post: {id}</h1>
      <Suspense fallback={<h1>Carregando..</h1>}>
        <PostInfo id={id}></PostInfo>
      </Suspense>
    </>
  );
}
