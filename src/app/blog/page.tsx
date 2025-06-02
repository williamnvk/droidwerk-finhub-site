import { Box, Container, Heading, Text, Stack, Card } from "@chakra-ui/react";
import { Metadata } from "next";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Finhub | Conteúdo sobre Finanças Empresariais e Assessoria",
  description: "📚 Artigos especializados sobre captação de recursos, valuation, M&A, expansão internacional e soluções financeiras para empresas. Conteúdo educativo e atualizado.",
  keywords: "blog finanças empresariais, conteúdo assessoria financeira, artigos captação recursos, dicas valuation empresa, guia M&A fusões, educação financeira empresarial",
  openGraph: {
    title: "Blog Finhub | Conteúdo sobre Finanças Empresariais",
    description: "📚 Artigos especializados sobre assessoria financeira, captação de recursos e soluções empresariais.",
    url: "https://financialhub.com.br/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://financialhub.com.br/blog",
  },
};

const blogPosts = [
  {
    id: "captacao-recursos-guia-completo",
    title: "Captação de Recursos: Guia Completo para Empresas",
    excerpt: "Descubra as melhores estratégias para captar recursos e financiar o crescimento da sua empresa com segurança e eficiência.",
    category: "Captação de Recursos",
    readTime: "8 min",
    publishDate: "2025-01-10"
  },
  {
    id: "valuation-quando-fazer",
    title: "Quando Fazer o Valuation da Sua Empresa?",
    excerpt: "Entenda os momentos ideais para avaliar sua empresa e como isso pode impactar estrategicamente seus negócios.",
    category: "Valuation",
    readTime: "6 min",
    publishDate: "2025-01-08"
  },
  {
    id: "expansao-internacional-primeiros-passos",
    title: "Expansão Internacional: Primeiros Passos",
    excerpt: "Guia prático para empresas que desejam expandir para outros países de forma segura e estruturada.",
    category: "Expansão Internacional",
    readTime: "10 min",
    publishDate: "2025-01-05"
  },
  {
    id: "energia-sustentavel-empresas",
    title: "Como Economizar 35% na Conta de Luz da Sua Empresa",
    excerpt: "Soluções energéticas sustentáveis que reduzem custos e melhoram a sustentabilidade do seu negócio.",
    category: "Energia Sustentável",
    readTime: "5 min",
    publishDate: "2025-01-03"
  },
  {
    id: "ma-fusoes-aquisicoes-guia",
    title: "M&A: Guia de Fusões e Aquisições para PMEs",
    excerpt: "Tudo que você precisa saber sobre processos de M&A e como eles podem acelerar o crescimento da sua empresa.",
    category: "M&A",
    readTime: "12 min",
    publishDate: "2025-01-01"
  },
  {
    id: "mini-banco-empresarial",
    title: "Mini-Banco: Como Criar Sua Linha de Crédito",
    excerpt: "Aprenda a criar uma operação de crédito própria para oferecer financiamento aos seus clientes.",
    category: "Soluções Financeiras",
    readTime: "7 min",
    publishDate: "2024-12-28"
  }
];

const StructuredDataBlog = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Finhub Assessoria",
    description: "Conteúdo especializado sobre finanças empresariais, captação de recursos, valuation e soluções financeiras",
    url: "https://financialhub.com.br/blog",
    publisher: {
      "@type": "Organization",
      name: "Finhub Assessoria",
      url: "https://financialhub.com.br"
    },
    blogPost: blogPosts.map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://financialhub.com.br/blog/${post.id}`,
      datePublished: post.publishDate,
      author: {
        "@type": "Organization",
        name: "Finhub Assessoria"
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default function BlogPage() {
  return (
    <Box>
      <StructuredDataBlog />
      <Header />
      <Box as="main" py={{ base: 8, md: 16 }}>
        <Container maxW="6xl">
          <Stack gap={8}>
            <Box textAlign="center">
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} mb={4}>
                Blog Finhub
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="3xl" mx="auto">
                Conteúdo especializado sobre finanças empresariais, assessoria e soluções estratégicas
              </Text>
            </Box>

            <Stack gap={6}>
              {blogPosts.map((post) => (
                <Card.Root key={post.id} p={6} _hover={{ transform: "translateY(-2px)", shadow: "lg" }} transition="all 0.2s">
                  <Link href={`/blog/${post.id}`}>
                    <Stack gap={4}>
                      <Box>
                        <Text fontSize="sm" color="blue.600" fontWeight="medium" mb={2}>
                          {post.category} • {post.readTime} de leitura
                        </Text>
                        <Heading as="h2" size="lg" mb={3} color="gray.800">
                          {post.title}
                        </Heading>
                        <Text color="gray.600" lineHeight="1.6">
                          {post.excerpt}
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="sm" color="gray.500">
                          Publicado em {new Date(post.publishDate).toLocaleDateString('pt-BR')}
                        </Text>
                      </Box>
                    </Stack>
                  </Link>
                </Card.Root>
              ))}
            </Stack>

            <Box textAlign="center" p={8} bg="blue.50" borderRadius="xl">
              <Heading as="h2" size="xl" mb={4} color="blue.700">
                Precisa de Assessoria Especializada?
              </Heading>
              <Text mb={6} fontSize="lg">
                Nossa equipe está pronta para ajudar sua empresa a encontrar as melhores soluções financeiras
              </Text>
              <Link href="/contato">
                <button 
                  style={{
                    backgroundColor: "#3182ce",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  Fale com um Especialista
                </button>
              </Link>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 