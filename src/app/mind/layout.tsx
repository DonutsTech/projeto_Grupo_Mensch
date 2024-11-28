import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "|| Mensch Mind",
  description: "Conhecimento e transformação se encontram! Cursos para líderes, gestores e empreendedores que buscam crescer.",

  openGraph: {
    title: '|| Mensch Mind',
    description: 'Conhecimento e transformação se encontram! Cursos para líderes, gestores e empreendedores que buscam crescer.',
    url: 'https://grupomensch.com.br/mind', //alterar
    type: 'website',
    images: [{
      url: "https://grupomensch.com.br/og/mindOG.png", //alterar
      width: 1200,
      height: 430,
      alt: 'Mensch Mind',
    },],
    locale: 'pt_BR',
    siteName: 'Mensch Mind',
  },
  robots: {
    index: true,
    follow: true,
  }
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
