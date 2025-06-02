import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Stack,
  Card,
  SimpleGrid,
} from "@chakra-ui/react";
import type { Metadata } from "next";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { CTASection } from "../../components/cta";
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre a Financial Hub Assessoria | Especialistas em Soluções Financeiras",
  description:
    "Conheça a Financial Hub Assessoria, especializada em conectar empresas às melhores soluções do mercado. Missão, visão, valores e nossa expertise em soluções financeiras.",
  keywords:
    "Financial Hub Assessoria, assessoria financeira, soluções empresariais, captação de recursos, sobre empresa, missão visão valores",
  openGraph: {
    title: "Sobre a Financial Hub Assessoria | Especialistas em Soluções Financeiras",
    description:
      "Conheça a Financial Hub Assessoria, especializada em conectar empresas às melhores soluções do mercado. Missão, visão, valores e nossa expertise.",
    url: "https://financialhub.com.br/sobre",
    siteName: "Financial Hub Assessoria",
    images: [
      {
        url: "https://financialhub.com.br/images/about-og.png",
        width: 1200,
        height: 630,
        alt: "Financial Hub Assessoria - Sobre nossa empresa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://financialhub.com.br/sobre",
  },
};

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Financial Hub Assessoria",
    url: "https://financialhub.com.br",
    description:
      "Assessoria financeira especializada em conectar empresas às melhores soluções do mercado — de crédito à tecnologia, de valuation à expansão internacional.",
    areaServed: "BR",
    serviceType: "Financial Advisory Services",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    telephone: "+5511942989475",
    email: "contato@financialhub.com.br",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default function SobrePage() {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Fortalecer empresas com inteligência financeira e estratégica.",
      color: "blue",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser referência nacional em assessoria empresarial moderna, ética e eficaz.",
      color: "green",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Confiança. Transparência. Performance. Inovação.",
      color: "purple",
    },
  ];

  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Parceiros Financeiros",
      color: "blue",
    },
    {
      icon: TrendingUp,
      number: "R$ 10M+",
      label: "Volume Disponível",
      color: "green",
    },
    {
      icon: Award,
      number: "100%",
      label: "Conformidade Legal",
      color: "purple",
    },
  ];

  return (
    <Box>
      <StructuredData />
      <Header />

      <Box as="main" id="main-content">
        {/* Hero Section */}
        <Box
          py={{ base: 20, md: 32 }}
          bg="gradient-to-br"
          bgGradient="linear(to-br, blue.600, blue.800)"
          color="white"
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top="10%"
            right="5%"
            width="300px"
            height="300px"
            bg="whiteAlpha.100"
            borderRadius="full"
            zIndex={0}
          />
          <Box
            position="absolute"
            bottom="10%"
            left="5%"
            width="400px"
            height="400px"
            bg="whiteAlpha.100"
            borderRadius="full"
            zIndex={0}
          />

          <Container maxW="8xl" position="relative" zIndex={1}>
            <VStack gap={8} textAlign="center" maxW="4xl" mx="auto">
              <Badge
                bg="whiteAlpha.200"
                color="white"
                fontSize="sm"
                px={4}
                py={2}
                borderRadius="full"
                fontWeight="medium"
              >
                Sobre a Financial Hub
              </Badge>

              <Heading
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="extrabold"
                lineHeight="1.1"
              >
                Especialistas em{" "}
                <Text as="span" color="blue.200">
                  transformar estratégia
                </Text>{" "}
                em ação
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight="1.6"
                maxW="3xl"
                color="whiteAlpha.900"
              >
                Somos uma assessoria financeira especializada em conectar
                empresas às melhores soluções do mercado — de crédito à
                tecnologia, de valuation à expansão internacional.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Nossa História */}
        <Container maxW="8xl" py={{ base: 16, md: 24 }}>
          <VStack gap={16}>
            <VStack gap={6} textAlign="center" maxW="4xl">
              <Badge
                colorPalette="blue"
                fontSize="sm"
                px={4}
                py={2}
                borderRadius="full"
                fontWeight="medium"
              >
                Nossa História
              </Badge>

              <Heading
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                lineHeight="1.2"
              >
                Uma jornada de excelência e inovação
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                lineHeight="1.6"
              >
                Atuamos de forma personalizada, com metodologia própria e
                profundo conhecimento do ecossistema empresarial brasileiro.
                Nossa missão é simplificar o complexo mundo financeiro e
                conectar sua empresa às oportunidades certas.
              </Text>
            </VStack>

            {/* Missão, Visão, Valores */}
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card.Root
                    key={index}
                    variant="elevated"
                    size="lg"
                    bg="white"
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "xl",
                    }}
                    transition="all 0.3s ease"
                    height="full"
                  >
                    <Card.Body p={8}>
                      <VStack align="start" gap={6}>
                        <Box
                          p={4}
                          bg={`${value.color}.100`}
                          borderRadius="xl"
                          display="inline-block"
                        >
                          <IconComponent
                            size={32}
                            color={`var(--acp-colors-${value.color}-600)`}
                          />
                        </Box>

                        <VStack align="start" gap={3}>
                          <Heading
                            fontSize="2xl"
                            fontWeight="bold"
                            color="gray.900"
                          >
                            {value.title}
                          </Heading>

                          <Text
                            color="gray.600"
                            fontSize="lg"
                            lineHeight="1.6"
                            fontStyle={value.title === "Valores" ? "italic" : "normal"}
                            fontWeight={value.title === "Valores" ? "semibold" : "normal"}
                          >
                            {value.description}
                          </Text>
                        </VStack>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                );
              })}
            </SimpleGrid>
          </VStack>
        </Container>

        {/* Estatísticas */}
        <Box bg="gray.50" py={{ base: 16, md: 24 }}>
          <Container maxW="8xl">
            <VStack gap={16}>
              <VStack gap={6} textAlign="center" maxW="4xl">
                <Badge
                  colorPalette="blue"
                  fontSize="sm"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontWeight="medium"
                >
                  Números que Falam
                </Badge>

                <Heading
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="bold"
                  lineHeight="1.2"
                >
                  Resultados que comprovam nossa expertise
                </Heading>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <Card.Root
                      key={index}
                      variant="elevated"
                      size="lg"
                      bg="white"
                      textAlign="center"
                      _hover={{
                        transform: "translateY(-4px)",
                        boxShadow: "xl",
                      }}
                      transition="all 0.3s ease"
                    >
                      <Card.Body p={8}>
                        <VStack gap={4}>
                          <Box
                            p={4}
                            bg={`${stat.color}.100`}
                            borderRadius="full"
                            display="inline-block"
                          >
                            <IconComponent
                              size={32}
                              color={`var(--acp-colors-${stat.color}-600)`}
                            />
                          </Box>

                          <Heading
                            fontSize="4xl"
                            fontWeight="extrabold"
                            color={`${stat.color}.600`}
                          >
                            {stat.number}
                          </Heading>

                          <Text
                            fontSize="lg"
                            fontWeight="medium"
                            color="gray.700"
                          >
                            {stat.label}
                          </Text>
                        </VStack>
                      </Card.Body>
                    </Card.Root>
                  );
                })}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* Conformidade */}
        <Container maxW="8xl" py={{ base: 16, md: 24 }}>
          <Card.Root
            variant="elevated"
            size="lg"
            bg="blue.50"
            border="1px solid"
            borderColor="blue.100"
          >
            <Card.Body p={12}>
              <VStack gap={8} textAlign="center">
                <HStack gap={3}>
                  <Award size={32} color="var(--acp-colors-blue-600)" />
                  <Heading fontSize="2xl" fontWeight="bold" color="blue.800">
                    Conformidade Regulatória Total
                  </Heading>
                </HStack>

                <Text fontSize="lg" color="blue.700" lineHeight="1.6" maxW="4xl">
                  A Finhub atua exclusivamente como intermediadora estratégica
                  entre clientes e instituições devidamente habilitadas pelo
                  Banco Central do Brasil (BACEN), Comissão de Valores
                  Mobiliários (CVM), SUSEP e demais órgãos reguladores
                  competentes. Não realizamos captação, intermediação financeira
                  direta ou gestão de recursos de terceiros.
                </Text>

                <Stack
                  direction={{ base: "column", md: "row" }}
                  gap={4}
                  fontSize="sm"
                  color="blue.600"
                  fontWeight="medium"
                >
                  <Text>BACEN Compliance</Text>
                  <Text>CVM Compliance</Text>
                  <Text>SUSEP Compliance</Text>
                </Stack>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Container>

        {/* CTA Section */}
        <CTASection />
      </Box>

      <Footer />
    </Box>
  );
}
