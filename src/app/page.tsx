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

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Finhub Assessoria – Soluções Financeiras Inteligentes para Empresas | São Paulo",
  description:
    "🏆 Conectamos sua empresa aos melhores recursos do mercado: crédito empresarial, valuation, M&A, expansão internacional e energia sustentável. +50 parceiros financeiros em São Paulo.",
  keywords:
    "assessoria financeira são paulo, captação de recursos empresariais, crédito empresarial, valuation empresa, M&A fusões aquisições, expansão internacional brasil, energia sustentável empresas, mini-banco empresarial, seguros empresariais, consultoria financeira sp, finhub assessoria",
  authors: [{ name: "Finhub Assessoria" }],
  creator: "Finhub Assessoria",
  publisher: "Finhub Assessoria",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Finhub Assessoria – Soluções Financeiras Inteligentes para Empresas",
    description:
      "🏆 Conectamos sua empresa aos melhores recursos: crédito, valuation, M&A, expansão internacional. +50 parceiros financeiros em São Paulo.",
    url: "https://financialhub.com.br",
    siteName: "Finhub Assessoria",
    images: [
      {
        url: "https://financialhub.com.br/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Finhub Assessoria - Soluções Financeiras Inteligentes para Empresas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@finhubassessoria",
    creator: "@finhubassessoria",
    title: "Finhub Assessoria – Soluções Financeiras Inteligentes para Empresas",
    description:
      "🏆 Conectamos sua empresa aos melhores recursos: crédito, valuation, M&A, expansão internacional. +50 parceiros financeiros em São Paulo.",
    images: ["https://financialhub.com.br/images/twitter-image.png"],
  },
  alternates: {
    canonical: "https://financialhub.com.br",
  },
  verification: {
    google: "seu-google-verification-code-aqui",
  },
  category: "Financial Services",
};

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": "https://financialhub.com.br/#organization",
        name: "Finhub Assessoria",
        alternateName: "Financial Hub Assessoria",
        description:
          "Assessoria financeira especializada em conectar empresas às melhores soluções do mercado — crédito, valuation, M&A, expansão internacional e tecnologia financeira.",
        url: "https://financialhub.com.br",
        telephone: "+5511942989475",
        email: "contato@financialhub.com.br",
        foundingDate: "2020",
        address: {
          "@type": "PostalAddress",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
          streetAddress: "São Paulo - SP"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-23.5505",
          longitude: "-46.6333"
        },
        sameAs: [
          "https://www.instagram.com/finhubassessoria/",
          "https://linkedin.com/company/financial-hub-assessoria"
        ],
        serviceType: "Financial Advisory Services",
        areaServed: {
          "@type": "Country",
          name: "Brasil"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços Financeiros",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Captação de Recursos",
                description: "Conectamos sua empresa a mais de 50 instituições financeiras"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Valuation e M&A",
                description: "Avaliação empresarial e assessoria em fusões e aquisições"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Expansão Internacional",
                description: "Apoio completo para exportar, importar ou abrir operação fora do Brasil"
              }
            }
          ]
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
          bestRating: "5"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://financialhub.com.br/#website",
        url: "https://financialhub.com.br",
        name: "Finhub Assessoria",
        description: "Soluções Financeiras Inteligentes para Empresas",
        publisher: {
          "@id": "https://financialhub.com.br/#organization"
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://financialhub.com.br/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://financialhub.com.br/#webpage",
        url: "https://financialhub.com.br",
        name: "Finhub Assessoria – Soluções Financeiras Inteligentes para Empresas",
        isPartOf: {
          "@id": "https://financialhub.com.br/#website"
        },
        about: {
          "@id": "https://financialhub.com.br/#organization"
        },
        description: "Conectamos sua empresa aos melhores recursos do mercado: crédito, tecnologia, expansão internacional e muito mais.",
        breadcrumb: {
          "@id": "https://financialhub.com.br/#breadcrumb"
        }
      }
    ]
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
