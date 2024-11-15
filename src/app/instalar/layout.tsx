import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "|| Mensch Instalar",
  description: "Apoio para profissionais! Materiais selecionados para instaladores, eletricistas e técnicos em refrigeração.",
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
