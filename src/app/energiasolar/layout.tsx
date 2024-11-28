import type { Metadata } from "next";
import "../globals.css";
import Head from "next/head";
// import Menu from "@/components/Menu";
// import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "|| Mensch Energia Solar",
  description: "Solução completa para economia e sustentabilidade! Projetos eficientes, suporte pós-venda e transformação de energia.",
  icons: {
    icon: "/favicon_mes.ico",
  },
  openGraph: {
    title: '|| Mensch Energia Solar',
    description: 'Solução completa para economia e sustentabilidade! Projetos eficientes, suporte pós-venda e transformação de energia.',
    url: 'https://grupomensch.com.br/energiasolar', //alterar
    type: 'website',
    images: [{
      url: 'https://grupomensch.com.br/og/solarOG.png', //alterar
      width: 1200,
      height: 430,
      alt: 'Mensch Energia Solar',
    }],
    locale: 'pt_BR',
    siteName: 'Mensch Energia Solar',
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
      <Head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" sizes="32x32" />
      </Head>
      {/* <Menu page={'about'} /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}
