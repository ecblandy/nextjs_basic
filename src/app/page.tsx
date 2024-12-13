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

export default function Home() {
  return (
    <>
      <h1>Página Home</h1>
    </>
  );
}
