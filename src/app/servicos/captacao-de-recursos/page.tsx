import { Box, Container, Heading, Text, Stack, List, Button } from "@chakra-ui/react";
import { Metadata } from "next";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Captação de Recursos Empresariais | +50 Instituições Financeiras | Finhub",
  description: "💰 Conectamos sua empresa a mais de 50 bancos, fintechs e fundos. Crédito de R$ 500 mil a R$ 10 milhões+ com as melhores taxas do mercado em São Paulo.",
  keywords: "captação de recursos empresariais, crédito empresarial são paulo, financiamento empresarial, empréstimo para empresa, capital de giro, crédito para pme, fundo de investimento empresa",
  openGraph: {
    title: "Captação de Recursos Empresariais | +50 Instituições | Finhub",
    description: "💰 Conectamos sua empresa a +50 bancos e fundos. Crédito de R$ 500 mil a R$ 10 milhões+",
    url: "https://finhubassessoria.com.br/servicos/captacao-de-recursos",
    images: [
      {
        url: "https://finhubassessoria.com.br/images/captacao-recursos-og.png",
        width: 1200,
        height: 630,
        alt: "Captação de Recursos Empresariais - Finhub Assessoria",
      },
    ],
    type: "article",
  },
  alternates: {
    canonical: "https://finhubassessoria.com.br/servicos/captacao-de-recursos",
  },
};

const StructuredDataService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Captação de Recursos Empresariais",
    description: "Conectamos sua empresa a mais de 50 instituições financeiras — bancos, fintechs, fundos e agências de fomento.",
    provider: {
      "@type": "FinancialService",
      name: "Finhub Assessoria",
      url: "https://finhubassessoria.com.br"
    },
    areaServed: "Brasil",
    serviceType: "Financial Advisory",
    offers: {
      "@type": "Offer",
      description: "Crédito de R$ 500 mil a R$ 10 milhões+",
      seller: {
        "@type": "Organization",
        name: "Finhub Assessoria"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default function CaptacaoRecursosPage() {
  return (
    <Box>
      <StructuredDataService />
      <Header />
      <Box as="main" py={{ base: 8, md: 16 }}>
        <Container maxW="6xl">
          <Stack gap={8}>
            <Box textAlign="center">
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} mb={4}>
                Captação de Recursos Empresariais
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="3xl" mx="auto">
                Conectamos sua empresa aos melhores recursos do mercado através de mais de 50 instituições financeiras parceiras
              </Text>
            </Box>

            <Stack gap={6}>
              <Box>
                <Heading as="h2" size="xl" mb={4} color="blue.700">
                  🏦 Nossas Parcerias Financeiras
                </Heading>
                <Text mb={4}>
                  Trabalhamos com uma rede exclusiva de mais de 50 instituições financeiras, incluindo:
                </Text>
                <List.Root>
                  <List.Item>
                    <strong>Bancos Tradicionais:</strong> Itaú, Bradesco, Santander, Banco do Brasil, Caixa
                  </List.Item>
                  <List.Item>
                    <strong>Fintechs:</strong> Nubank, Inter, C6 Bank, BTG Pactual, XP Investimentos
                  </List.Item>
                  <List.Item>
                    <strong>Fundos de Investimento:</strong> Fundos DI, FIDCs, Fundos de Crédito Privado
                  </List.Item>
                  <List.Item>
                    <strong>Agências de Fomento:</strong> BNDES, Desenvolve SP, FINEP
                  </List.Item>
                </List.Root>
              </Box>

              <Box>
                <Heading as="h2" size="xl" mb={4} color="green.600">
                  💰 Valores e Condições
                </Heading>
                <Stack gap={4}>
                  <Box p={6} bg="green.50" borderRadius="lg" border="1px solid" borderColor="green.200">
                    <Text fontSize="2xl" fontWeight="bold" color="green.700" mb={2}>
                      R$ 500 mil a R$ 10 milhões+
                    </Text>
                    <Text>Com as melhores taxas e prazos do mercado</Text>
                  </Box>
                  <List.Root>
                    <List.Item>✅ Taxas competitivas a partir de 1,2% ao mês</List.Item>
                    <List.Item>✅ Prazos de até 60 meses</List.Item>
                    <List.Item>✅ Carência para início do pagamento</List.Item>
                    <List.Item>✅ Garantias flexíveis</List.Item>
                  </List.Root>
                </Stack>
              </Box>

              <Box>
                <Heading as="h2" size="xl" mb={4} color="purple.600">
                  🎯 Tipos de Crédito Disponíveis
                </Heading>
                <Stack gap={4}>
                  <Box p={4} bg="gray.50" borderRadius="lg">
                    <Heading as="h3" size="lg" mb={2}>Capital de Giro</Heading>
                    <Text>Para necessidades operacionais e fluxo de caixa</Text>
                  </Box>
                  <Box p={4} bg="gray.50" borderRadius="lg">
                    <Heading as="h3" size="lg" mb={2}>Financiamento de Equipamentos</Heading>
                    <Text>Para aquisição de máquinas e tecnologia</Text>
                  </Box>
                  <Box p={4} bg="gray.50" borderRadius="lg">
                    <Heading as="h3" size="lg" mb={2}>Crédito para Expansão</Heading>
                    <Text>Para crescimento e novos projetos</Text>
                  </Box>
                  <Box p={4} bg="gray.50" borderRadius="lg">
                    <Heading as="h3" size="lg" mb={2}>Antecipação de Recebíveis</Heading>
                    <Text>Para melhorar o fluxo de caixa rapidamente</Text>
                  </Box>
                </Stack>
              </Box>

              <Box textAlign="center" p={8} bg="blue.50" borderRadius="xl">
                <Heading as="h2" size="xl" mb={4} color="blue.700">
                  Pronto para Captar Recursos?
                </Heading>
                <Text mb={6} fontSize="lg">
                  Agende uma avaliação gratuita e descubra as melhores opções para sua empresa
                </Text>
                <Link href="/contato">
                  <Button size="lg" colorScheme="blue">
                    Solicitar Avaliação Gratuita
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 