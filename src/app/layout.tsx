import type { Metadata } from "next";
import "./globals.css";
// import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "|| Grupo Mensch",
  description: "Ser Mensch é agir com integridade, empatia e compromisso, honrando a Deus e fazendo o bem.",
  icons: {
    icon: "/favicon_gm.ico",
  },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "|| Grupo Mensch",
    description: "Ser Mensch é agir com integridade, empatia e compromisso, honrando a Deus e fazendo o bem.",
    url: 'https://grupomensch.com.br/', //alterar
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

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {/* <Menu page={''}/> */}
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-FE9N7BP8ZW" />
      </body>
    </html>
  );
}
