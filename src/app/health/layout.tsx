import type { Metadata } from "next";
import "../globals.css";
import Head from "next/head";
// import Menu from "@/components/Menu";
// import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "|| Mensch Health",
  description: "Viver com Saúde e Propósito.",
  icons: {
    icon: "/favicon_mh.ico",
  },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "|| Mensch Health",
    description: "Viver com Saúde e Propósito.",
    url: 'https://projeto-grupo-mensch.vercel.app/health', //alterar
    type: 'website',
    images: [{
      url: "https://projeto-grupo-mensch.vercel.app/og/healthOG.png", //alterar
      width: 1200,
      height: 430,
      alt: "Mensch Health",
    },],
    locale: 'pt_BR',
    siteName: 'Mensch Health',
  },

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
