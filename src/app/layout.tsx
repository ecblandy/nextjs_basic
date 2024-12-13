import { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Aula NextJs do Zero!",
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

export default function RootLayout({
  // Renderiza a página
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Basicamente funciona como HTML, posso usar componente para encapsular a pagina. --> Mostra em todas as páginas
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
