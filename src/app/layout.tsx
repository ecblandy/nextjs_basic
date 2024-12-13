import "./globals.css";
import { Header } from "@/components/header";
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
