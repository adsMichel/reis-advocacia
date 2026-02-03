import type { Metadata } from "next";
import "./globals.css";
import WhatsappButton from "../components/WhatsappButton";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  // O título deve ter entre 50-60 caracteres para não ser cortado no Google
  title: "Dr. Alan Reis | Advocacia Especializada em [Brasília]",
  
  // A descrição deve ter entre 140-160 caracteres
  description: "Escritório de advocacia especializado em Direito Civil, Trabalhista e Família em [Brasília]. Atendimento humanizado, ético e focado em resultados rápidos.",
  
  keywords: ["advogado em [Brasília]", "direito civil", "divórcio", "causas trabalhistas", "consultoria jurídica"],
  
  authors: [{ name: "Alan Reis" }],
  
  // Como o site aparecerá quando compartilhado (WhatsApp, LinkedIn, etc)
  openGraph: {
    title: "Dr. Alan Reis | Advocacia Especializada",
    description: "Defendendo seus direitos com excelência jurídica e transparência.",
    url: "https://www.seusite.com.br",
    siteName: "Reis Advocacia",
    images: [
      {
        url: "/og-image.jpg", // Coloque uma foto do escritório/advogado na pasta public com este nome
        width: 1200,
        height: 630,
        alt: "Reis Advocacia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Configuração para robôs de busca
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="antialiased text-slate-900 bg-white">
        <JsonLd />
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}