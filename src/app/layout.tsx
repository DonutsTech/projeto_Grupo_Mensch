import type { Metadata } from "next";
import "./globals.css";
// import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import Image from "next/image";

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
          fbq('init', '555609490731974');
          fbq('track', 'PageView');
        `}
      </Script>
      <body>
        {/* <Menu page={''}/> */}
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-FE9N7BP8ZW" />
        <noscript>
          <Image height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=555609490731974&ev=PageView&noscript=1"  alt={'facebook pixel no script image'} />
        </noscript>
      </body>
    </html>
  );
}
