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
  Flex,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import type { Metadata } from "next";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { CTASection } from "../../components/cta";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  TrendingUp,
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  Building,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: "Sobre a Finhub Assessoria | Especialistas em Soluções Financeiras",
  description:
    "Conheça a Finhub Assessoria, especializada em conectar empresas às melhores soluções do mercado. Missão, visão, valores e nossa expertise em soluções financeiras.",
  keywords:
    "Finhub Assessoria, assessoria financeira, soluções empresariais, captação de recursos, sobre empresa, missão visão valores",
  openGraph: {
    title: "Sobre a Finhub Assessoria | Especialistas em Soluções Financeiras",
    description:
      "Conheça a Finhub Assessoria, especializada em conectar empresas às melhores soluções do mercado. Missão, visão, valores e nossa expertise.",
    url: "https://finhubassessoria.com.br/sobre",
    siteName: "Finhub Assessoria",
    images: [
      {
        url: "https://finhubassessoria.com.br/images/about-og.png",
        width: 1200,
        height: 630,
        alt: "Finhub Assessoria - Sobre nossa empresa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://finhubassessoria.com.br/sobre",
  },
};

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Finhub Assessoria",
    url: "https://finhubassessoria.com.br",
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
    email: "contato@finhubassessoria.com.br",
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
      color: "green",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser referência nacional em assessoria empresarial moderna, ética e eficaz.",
      color: "blue",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Confiança. Transparência. Performance. Inovação.",
      color: "red",
    },
  ];

  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Parceiros Financeiros",
      description: "Instituições de confiança no mercado",
      color: "green",
    },
    {
      icon: TrendingUp,
      number: "R$ 10M+",
      label: "Volume Disponível",
      description: "Em linhas de crédito estruturadas",
      color: "green",
    },
    {
      icon: Award,
      number: "100%",
      label: "Conformidade Legal",
      description: "Operações regulamentadas",
      color: "blue",
    },
  ];

  const differentials = [
    {
      icon: Shield,
      title: "Atendimento Consultivo",
      description: "Personalizado para cada perfil empresarial",
    },
    {
      icon: Building,
      title: "Rede Estratégica",
      description: "Mais de 50 parceiros financeiros e tecnológicos",
    },
    {
      icon: Star,
      title: "Experiência Comprovada",
      description: "Operações complexas e resultados efetivos",
    },
    {
      icon: MapPin,
      title: "Atuação Nacional",
      description: "Base em São Paulo, alcance em todo Brasil",
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
          bgGradient="linear(to-br, gray.900, green.900)"
          color="white"
          position="relative"
          overflow="hidden"
        >
          {/* Background Elements */}
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

          <Container maxW="6xl" position="relative" zIndex={1}>
            <VStack gap={8} textAlign="center" maxW="4xl" mx="auto">
              <Badge
                colorPalette="green"
                fontSize="sm"
                px={4}
                py={3}
                borderRadius="full"
                fontWeight="medium"
                bg="green.600"
                backdropFilter="blur(10px)"
              >
                <Flex align="center" gap={2}>
                  <Building size={16} />
                  <Text color="white">Sobre a Finhub</Text>
                </Flex>
              </Badge>

              <Heading
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="extrabold"
                lineHeight="1.1"
                textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              >
                <Text as="span" color="green.400">
                  Especialistas
                </Text>{" "}
                em transformar estratégia em{" "}
                <Text as="span" color="green.400">
                  ação
                </Text>
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight="1.6"
                maxW="3xl"
                color="whiteAlpha.900"
                fontWeight="medium"
                textShadow="1px 1px 2px rgba(0,0,0,0.5)"
              >
                Somos uma assessoria financeira especializada em conectar
                empresas às melhores soluções do mercado — de crédito à
                tecnologia, de valuation à expansão internacional.
              </Text>

              <HStack gap={4} flexWrap="wrap" justify="center">
                <Badge variant="outline" colorPalette="green" size="lg" color="white">
                  +50 Parceiros
                </Badge>
                <Badge variant="outline" colorPalette="green" size="lg" color="white">
                  Atuação Nacional
                </Badge>
                <Badge variant="outline" colorPalette="green" size="lg" color="white">
                  100% Compliance
                </Badge>
              </HStack>
            </VStack>
          </Container>
        </Box>

        {/* Nossa História */}
        <Container maxW="6xl" py={{ base: 16, md: 24 }}>
          <Grid templateColumns={{ base: "1fr", lg: "5fr 7fr" }} gap={12} alignItems="center">
            <VStack align="start" gap={6}>
              <Badge
                colorPalette="green"
                fontSize="sm"
                px={4}
                py={2}
                borderRadius="full"
                fontWeight="medium"
                bg="green.600"
                variant="solid"
              >
                <Flex align="center" gap={2}>
                  <Target size={16} />
                  <Text color="white">Nossa História</Text>
                </Flex>
              </Badge>

              <Heading
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                lineHeight="1.2"
                color="gray.50"
              >
                Uma jornada de{" "}
                <Text as="span" color="green.600">
                  excelência e inovação
                </Text>
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                lineHeight="1.6"
              >
                Atuamos de forma personalizada, com metodologia própria e
                profundo conhecimento do ecossistema empresarial brasileiro.
                Nossa missão é simplificar o complexo mundo financeiro e
                conectar sua empresa às oportunidades certas.
              </Text>

              <VStack align="start" gap={3} w="full">
                {differentials.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <HStack key={index} gap={3} align="start">
                      <Box mt={1}>
                        <CheckCircle size={20} color="var(--acp-colors-green-600)" />
                      </Box>
                      <VStack align="start" gap={0}>
                        <Text fontWeight="bold" color="gray.50">{item.title}</Text>
                        <Text fontSize="sm" color="gray.300">{item.description}</Text>
                      </VStack>
                    </HStack>
                  );
                })}
              </VStack>
            </VStack>

            {/* Missão, Visão, Valores */}
            <VStack gap={6}>
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card.Root
                    key={index}
                    variant="elevated"
                    size="lg"
                    bg="white"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    transition="all 0.3s ease"
                    w="full"
                  >
                    <Card.Body p={6}>
                      <HStack gap={4} align="start">
                        <Box
                          p={3}
                          bg={`${value.color}.100`}
                          borderRadius="lg"
                          flexShrink={0}
                        >
                          <IconComponent
                            size={24}
                            color={`var(--acp-colors-${value.color}-600)`}
                          />
                        </Box>

                        <VStack align="start" gap={2} flex={1}>
                          <Heading
                            fontSize="xl"
                            fontWeight="bold"
                            color="gray.900"
                          >
                            {value.title}
                          </Heading>

                          <Text
                            color="gray.600"
                            fontSize="md"
                            lineHeight="1.5"
                            fontStyle={value.title === "Valores" ? "italic" : "normal"}
                            fontWeight={value.title === "Valores" ? "semibold" : "normal"}
                          >
                            {value.description}
                          </Text>
                        </VStack>
                      </HStack>
                    </Card.Body>
                  </Card.Root>
                );
              })}
            </VStack>
          </Grid>
        </Container>

      

        {/* Conformidade Regulatória */}
        <Box py={{ base: 16, md: 24 }}>
          <Container maxW="6xl">
            <Card.Root
              variant="elevated"
              size="lg"
              bg="white"
            >
              <Card.Body p={12}>
                <VStack gap={8} textAlign="center">
                  <HStack gap={3} justify="center">
                    <Shield size={32} color="var(--acp-colors-green-600)" />
                    <Heading fontSize="2xl" fontWeight="bold" color="gray.900">
                      Conformidade Regulatória Total
                    </Heading>
                  </HStack>

                  <Text fontSize="lg" color="gray.700" lineHeight="1.6" maxW="4xl">
                    A Finhub atua exclusivamente como intermediadora estratégica
                    entre clientes e instituições devidamente habilitadas pelo
                    Banco Central do Brasil (BACEN), Comissão de Valores
                    Mobiliários (CVM), SUSEP e demais órgãos reguladores
                    competentes.
                  </Text>

                  <Text fontSize="md" color="gray.600" maxW="4xl">
                    Não realizamos captação, intermediação financeira
                    direta ou gestão de recursos de terceiros. Todas as operações
                    são formalizadas diretamente entre cliente e instituição autorizada.
                  </Text>

                  <Stack
                    direction={{ base: "column", md: "row" }}
                    gap={6}
                    justify="center"
                  >
                    <HStack gap={2}>
                      <CheckCircle size={20} color="var(--acp-colors-green-600)" />
                      <Text fontSize="sm" color="green.600" fontWeight="medium">
                        BACEN Compliance
                      </Text>
                    </HStack>
                    <HStack gap={2}>
                      <CheckCircle size={20} color="var(--acp-colors-green-600)" />
                      <Text fontSize="sm" color="green.600" fontWeight="medium">
                        CVM Compliance
                      </Text>
                    </HStack>
                    <HStack gap={2}>
                      <CheckCircle size={20} color="var(--acp-colors-green-600)" />
                      <Text fontSize="sm" color="green.600" fontWeight="medium">
                        SUSEP Compliance
                      </Text>
                    </HStack>
                  </Stack>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Container>
        </Box>

        {/* Contato Rápido */}
        <Container maxW="6xl" py={{ base: 16, md: 24 }}>
          <Card.Root
            variant="elevated"
            size="lg"
            bg="gradient-to-r"
            bgGradient="linear(to-r, gray.900, green.800)"
            color="white"
          >
            <Card.Body p={12}>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12} alignItems="center">
                <VStack align="start" gap={6}>
                  <Badge
                    bg="whiteAlpha.200"
                    color="white"
                    fontSize="sm"
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontWeight="medium"
                  >
                    Entre em Contato
                  </Badge>

                  <Heading fontSize="3xl" fontWeight="bold">
                    Vamos conversar sobre seu projeto?
                  </Heading>

                  <Text fontSize="lg" color="whiteAlpha.900" lineHeight="1.6">
                    Nossa equipe está pronta para entender suas necessidades
                    e apresentar as melhores soluções para sua empresa.
                  </Text>

                  <VStack align="start" gap={3}>
                    <HStack gap={3}>
                      <Phone size={20} color="var(--acp-colors-green-400)" />
                      <Text>(11) 9429-89475</Text>
                    </HStack>
                    <HStack gap={3}>
                      <Mail size={20} color="var(--acp-colors-green-400)" />
                      <Text>contato@finhubassessoria.com.br</Text>
                    </HStack>
                    <HStack gap={3}>
                      <MapPin size={20} color="var(--acp-colors-green-400)" />
                      <Text>São Paulo - SP</Text>
                    </HStack>
                  </VStack>
                </VStack>

                <VStack gap={4}>
                  <NextLink
                    href="https://api.whatsapp.com/send/?phone=%2B5511942989475&text=Ol%C3%A1.+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Finub+Assessoria&type=phone_number&app_absent=0"
                    passHref
                    target="_blank"
                    legacyBehavior
                  >
                    <Button
                      as="a"
                      size="lg"
                      colorPalette="green"
                      variant="solid"
                      fontWeight="bold"
                      px={8}
                      py={6}
                      fontSize="lg"
                      bg="green.500"
                      color="black"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "xl",
                        bg: "green.400",
                      }}
                      transition="all 0.3s"
                      w="full"
                    >
                      Falar via WhatsApp
                      <ArrowRight size={20} />
                    </Button>
                  </NextLink>

                  <NextLink href="/contato" passHref legacyBehavior>
                    <Button
                      as="a"
                      size="lg"
                      variant="outline"
                      colorPalette="green"
                      fontWeight="medium"
                      px={8}
                      py={6}
                      fontSize="lg"
                      borderColor="green.400"
                      color="white"
                      bg="transparent"
                      _hover={{
                        transform: "translateY(-2px)",
                        bg: "whiteAlpha.100",
                        borderColor: "green.300",
                      }}
                      transition="all 0.3s"
                      w="full"
                    >
                      Formulário de Contato
                    </Button>
                  </NextLink>
                </VStack>
              </Grid>
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
