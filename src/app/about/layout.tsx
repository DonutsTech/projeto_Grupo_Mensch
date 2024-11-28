import type { Metadata } from "next";
import "../globals.css";
import Menu from "@/components/Menu";
// import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "|| Sobre Nós",
  description: "Ser Mensch é uma maneira de viver. Integridade, honra e fazer o bem nos impulsionam.",

  openGraph: {
    title: "|| Sobre Nós",
    description: "Ser Mensch é uma maneira de viver. Integridade, honra e fazer o bem nos impulsionam.",
    url: 'https://grupomensch.com.br/about', //alterar
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
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Menu page={'about'} />
      {children}
      {/* <Footer /> */}
    </>
  );
}
