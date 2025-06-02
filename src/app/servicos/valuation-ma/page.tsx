import { Box, Container, Heading, Text, Stack, List, Button } from "@chakra-ui/react";
import { Metadata } from "next";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Valuation Empresarial e M&A | Avaliação de Empresas | Finhub São Paulo",
  description: "📊 Descubra o valor real da sua empresa com metodologias internacionais. Assessoria especializada em fusões, aquisições e entrada de sócios estratégicos em São Paulo.",
  keywords: "valuation empresarial, avaliação de empresas, M&A fusões aquisições, venda de empresa, entrada de sócios, due diligence, consultoria M&A são paulo, assessoria financeira fusões",
  openGraph: {
    title: "Valuation e M&A | Avaliação Empresarial | Finhub",
    description: "📊 Valuation empresarial com metodologias internacionais. Assessoria M&A para fusões, aquisições e sócios estratégicos.",
    url: "https://financialhub.com.br/servicos/valuation-ma",
    images: [
      {
        url: "https://financialhub.com.br/images/valuation-ma-og.png",
        width: 1200,
        height: 630,
        alt: "Valuation Empresarial e M&A - Finhub Assessoria",
      },
    ],
    type: "article",
  },
  alternates: {
    canonical: "https://financialhub.com.br/servicos/valuation-ma",
  },
};

const StructuredDataService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Valuation Empresarial e M&A",
    description: "Descubra o valor real da sua empresa com metodologias internacionais. Ideal para venda, fusão ou entrada de sócios estratégicos.",
    provider: {
      "@type": "FinancialService",
      name: "Finhub Assessoria",
      url: "https://financialhub.com.br"
    },
    areaServed: "Brasil",
    serviceType: "Business Valuation and M&A Advisory",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Valuation e M&A",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Valuation Empresarial",
            description: "Avaliação de empresas com metodologias internacionais"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Assessoria em M&A",
            description: "Consultoria especializada em fusões e aquisições"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default function ValuationMAPage() {
  return (
    <Box>
      <StructuredDataService />
      <Header />
      <Box as="main" py={{ base: 8, md: 16 }}>
        <Container maxW="6xl">
          <Stack gap={8}>
            <Box textAlign="center">
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} mb={4}>
                Valuation Empresarial e M&A
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="3xl" mx="auto">
                Descubra o valor real da sua empresa e encontre oportunidades estratégicas de crescimento
              </Text>
            </Box>

            <Stack gap={6}>
              <Box>
                <Heading as="h2" size="xl" mb={4} color="blue.700">
                  📊 Valuation Empresarial Especializado
                </Heading>
                <Text mb={4}>
                  Utilizamos metodologias internacionalmente reconhecidas para determinar o valor justo da sua empresa:
                </Text>
                <List.Root>
                  <List.Item>
                    <strong>Fluxo de Caixa Descontado (DCF):</strong> Projeção detalhada dos resultados futuros
                  </List.Item>
                  <List.Item>
                    <strong>Múltiplos de Mercado:</strong> Comparação com empresas similares do setor
                  </List.Item>
                  <List.Item>
                    <strong>Valor Patrimonial Ajustado:</strong> Análise do patrimônio líquido atualizado
                  </List.Item>
                  <List.Item>
                    <strong>Análise de Precedentes:</strong> Transações comparáveis no mercado
                  </List.Item>
                </List.Root>
              </Box>

              <Box>
                <Heading as="h2" size="xl" mb={4} color="purple.600">
                  🤝 Assessoria em Fusões e Aquisições (M&A)
                </Heading>
                <Stack gap={4}>
                  <Box p={4} bg="purple.50" borderRadius="lg" border="1px solid" borderColor="purple.200">
                    <Heading as="h3" size="lg" mb={2} color="purple.700">Venda de Empresa</Heading>
                    <Text>Estruturação completa do processo de venda, desde o valuation até a negociação final</Text>
                  </Box>
                  <Box p={4} bg="blue.50" borderRadius="lg" border="1px solid" borderColor="blue.200">
                    <Heading as="h3" size="lg" mb={2} color="blue.700">Aquisições Estratégicas</Heading>
                    <Text>Identificação e avaliação de oportunidades de aquisição para acelerar o crescimento</Text>
                  </Box>
                  <Box p={4} bg="green.50" borderRadius="lg" border="1px solid" borderColor="green.200">
                    <Heading as="h3" size="lg" mb={2} color="green.700">Entrada de Sócios</Heading>
                    <Text>Captação de investidores estratégicos e estruturação de sociedades</Text>
                  </Box>
                  <Box p={4} bg="orange.50" borderRadius="lg" border="1px solid" borderColor="orange.200">
                    <Heading as="h3" size="lg" mb={2} color="orange.700">Due Diligence</Heading>
                    <Text>Análise detalhada de riscos e oportunidades em processos de M&A</Text>
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Heading as="h2" size="xl" mb={4} color="green.600">
                  ✅ Quando Fazer um Valuation?
                </Heading>
                <List.Root>
                  <List.Item>🎯 <strong>Venda da empresa:</strong> Conhecer o valor justo para negociação</List.Item>
                  <List.Item>🤝 <strong>Entrada de sócios:</strong> Definir participação societária adequada</List.Item>
                  <List.Item>💰 <strong>Captação de investimento:</strong> Estabelecer valor para rodadas de investimento</List.Item>
                  <List.Item>📈 <strong>Planejamento estratégico:</strong> Monitorar evolução do valor da empresa</List.Item>
                  <List.Item>⚖️ <strong>Questões legais:</strong> Processos judiciais, divórcios, sucessão</List.Item>
                  <List.Item>🏛️ <strong>Compliance fiscal:</strong> Adequação para reorganizações societárias</List.Item>
                </List.Root>
              </Box>

              <Box>
                <Heading as="h2" size="xl" mb={4} color="red.600">
                  🎯 Nosso Processo de Trabalho
                </Heading>
                <Stack gap={4}>
                  <Box p={4} bg="gray.50" borderRadius="lg" border="1px solid" borderColor="gray.200">
                    <Text fontWeight="bold" mb={2}>1. Análise Inicial Gratuita</Text>
                    <Text>Entendimento do negócio e definição da metodologia adequada</Text>
                  </Box>
                  <Box p={4} bg="gray.50" borderRadius="lg" border="1px solid" borderColor="gray.200">
                    <Text fontWeight="bold" mb={2}>2. Coleta de Dados</Text>
                    <Text>Levantamento de informações financeiras e operacionais detalhadas</Text>
                  </Box>
                  <Box p={4} bg="gray.50" borderRadius="lg" border="1px solid" borderColor="gray.200">
                    <Text fontWeight="bold" mb={2}>3. Análise e Modelagem</Text>
                    <Text>Aplicação das metodologias de valuation e construção do modelo financeiro</Text>
                  </Box>
                  <Box p={4} bg="gray.50" borderRadius="lg" border="1px solid" borderColor="gray.200">
                    <Text fontWeight="bold" mb={2}>4. Relatório Final</Text>
                    <Text>Entrega de laudo técnico completo com recomendações estratégicas</Text>
                  </Box>
                </Stack>
              </Box>

              <Box textAlign="center" p={8} bg="blue.50" borderRadius="xl">
                <Heading as="h2" size="xl" mb={4} color="blue.700">
                  Descubra o Valor da Sua Empresa
                </Heading>
                <Text mb={6} fontSize="lg">
                  Solicite uma análise inicial gratuita e entenda o potencial do seu negócio
                </Text>
                <Link href="/contato">
                  <Button size="lg" colorScheme="blue">
                    Solicitar Análise Gratuita
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