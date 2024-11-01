import type { Metadata } from "next";
import "../globals.css";
import Menu from "@/components/Menu";
// import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "|| Sobre Nós",
  description: "Generated by create next app",
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
