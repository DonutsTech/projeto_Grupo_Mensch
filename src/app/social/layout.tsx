import type { Metadata } from "next";
import "../globals.css";
import Menu from "@/components/Menu";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "|| Vem Ser Mesch",
  description: "Na Mensch, nosso compromisso é Impactar Vidas, servir e transformar.",

  openGraph: {
    title: '|| Vem Ser Mesch',
    description: 'Na Mensch, nosso compromisso é Impactar Vidas, servir e transformar.',
    url: 'https://grupomensch.com.br/social', //alterar
    type: 'website',
    images: [{
      url: "https://grupomensch.com.br/og/grupoOG.png", //alterar
      width: 1200,
      height: 430,
      alt: "Grupo Mensch",
    },],
    locale: 'pt_BR',
    siteName: 'Grupo Mensch',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Menu page={'social'} />
      {children}
      {/* <Footer /> */}
    </>
  );
}
