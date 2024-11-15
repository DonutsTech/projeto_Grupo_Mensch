import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "|| Mensch Mind",
  description: "Conhecimento e transformação se encontram! Cursos para líderes, gestores e empreendedores que buscam crescer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
