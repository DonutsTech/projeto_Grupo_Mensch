import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "|| Mensch Instalar",
  description: "Apoio para profissionais! Materiais selecionados para instaladores, eletricistas e técnicos em refrigeração.",

  openGraph: {
    title: '|| Mensch Instalar',
    description: 'Apoio para profissionais! Materiais selecionados para instaladores, eletricistas e técnicos em refrigeração.',
    url: 'https://projeto-grupo-mensch.vercel.app/instalar', //alterar
    type: 'website',
    images: [{
      url: "https://projeto-grupo-mensch.vercel.app/og/instalarOG.png", //alterar
      width: 1200,
      height: 430,
      alt: 'Mensch Instalar',
    },],
    locale: 'pt_BR',
    siteName: 'Mensch Instalar',
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
