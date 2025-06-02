import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { CTASection } from "../components/cta";
import { Metadata } from "next";
import { TestimonialsSection } from "../components/testimonials";
import { HeroSection } from "../components/hero";
import { SolutionsSection } from "../components/solutions";
import { WhyUsSection } from "../components/why-us";
import { AboutSection } from "../components/about";

export const metadata: Metadata = {
  title: "Financial Hub Assessoria – Soluções Financeiras Inteligentes para Empresas",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  description:
    "Conectamos sua empresa aos melhores recursos do mercado: crédito, tecnologia, expansão internacional e muito mais. Soluções financeiras personalizadas com estratégia e agilidade.",
  keywords:
    "assessoria financeira, captação de recursos, crédito empresarial, valuation, M&A, expansão internacional, energia sustentável, mini-banco, seguros empresariais, tecnologia financeira, IA",
  openGraph: {
    title: "Financial Hub Assessoria – Soluções Financeiras Inteligentes",
    description:
      "Conectamos sua empresa aos melhores recursos do mercado: crédito, tecnologia, expansão internacional e muito mais.",
    url: "https://financialhub.com.br",
    siteName: "Financial Hub Assessoria",
    images: [
      {
        url: "https://financialhub.com.br/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Financial Hub Assessoria - Soluções Financeiras Inteligentes",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Hub Assessoria – Soluções Financeiras Inteligentes",
    description:
      "Conectamos sua empresa aos melhores recursos do mercado: crédito, tecnologia, expansão internacional e muito mais.",
    images: ["https://financialhub.com.br/images/twitter-image.png"],
  },
  alternates: {
    canonical: "https://financialhub.com.br",
  },
};

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Financial Hub Assessoria",
    description:
      "Assessoria financeira especializada em conectar empresas às melhores soluções do mercado — de crédito à tecnologia, de valuation à expansão internacional.",
    url: "https://financialhub.com.br",
    telephone: "+5511942989475",
    email: "contato@financialhub.com.br",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.instagram.com/finhubassessoria/",
      "https://linkedin.com/company/financial-hub-assessoria"
    ],
    serviceType: "Financial Advisory Services",
    areaServed: "BR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default function Home() {
  return (
    <Box>
      <StructuredData />
      <Header />
      <Box as="main" id="main-content">
        <HeroSection />
        <SolutionsSection />
        <WhyUsSection />
        <TestimonialsSection />
        <AboutSection />
        <CTASection />
      </Box>
      <Footer />
    </Box>
  );
}
