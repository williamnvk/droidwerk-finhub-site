import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ContatoPage } from "./contato";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entre em Contato | Finhub Assessoria",
  description:
    "Entre em contato conosco para descobrir como nossa análise de personalidade pode ajudar sua empresa a potencializar seus colaboradores.",
  keywords: [
    "contato",
    "análise de personalidade",
    "recursos humanos",
    "desenvolvimento profissional",
  ],
  openGraph: {
    title: "Entre em Contato | Finhub Assessoria",
    description:
      "Entre em contato conosco para descobrir como nossa análise de personalidade pode ajudar sua empresa a potencializar seus colaboradores.",
    url: "/contato",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://acpersonalidade.com.br/contato",
  },
};

export default function Contato() {
  return (
    <>
      <Header />
      <ContatoPage />
      <Footer />
    </>
  );
}
