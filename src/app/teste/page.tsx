"use client";

import { useEffect, useState } from "react";

interface PostsProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function Teste() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <>
      <h1 className="text-center mt-5 mb-2 font-bold">Página cliente</h1>
      <div className="flex flex-col gap-4">
        {posts.map((post: any) => (
          <div key={post.id} className="bg-gray-200 p-4 mx-2 rounded-md">
            <h2 className="font-bold">Titulo: {post.title}</h2>
            <p>body: {post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
