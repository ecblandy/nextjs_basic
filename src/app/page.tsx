import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aula NextJs do Zero!",
  description: "Aprendendo NextJs",
  openGraph: {
    title: "Aprendendo seilasuasuhuahs",
    description: "HAUSUASUHSA",
    images: ["https://sujeitoprogramador.com/steve.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
// Tempo para atualizar a página de forma dinamica --> Deixando de ser statica mas perde em performace.
export const revalidate = 60;

export default function Home() {
  const randomNumber = Math.random() * 10;

  return (
    <>
      <h1>Página Home</h1>
      <p>{randomNumber}</p>
    </>
  );
}
