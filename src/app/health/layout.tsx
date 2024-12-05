import type { Metadata } from "next";
import "../globals.css";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import Image from "next/image";
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
    url: 'https://grupomensch.com.br/health', //alterar
    type: 'website',
    images: [{
      url: "https://grupomensch.com.br/og/healthOG.png", //alterar
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
      <Script id='fb-pixel' strategy='afterInteractive'>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '937219011162733');
          fbq('track', 'PageView');
        `}
      </Script>
      {/* <Menu page={'about'} /> */}
      {children}
      {/* <Footer /> */}
      <noscript>
        <Image
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=937219011162733&ev=PageView&noscript=1"
          alt={'facebook pixel no script image'}
        />
      </noscript>
      <GoogleAnalytics gaId="G-Z2SYV3CJPP" />
    </>
  );
}
