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
  Alert,
  Flex,
} from "@chakra-ui/react";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Scale,
  CheckCircle2,
  Users2Icon,
  TargetIcon,
} from "lucide-react";

export const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Fortalecer empresas com inteligência financeira e estratégica.",
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

  const differentials = [
    "Metodologia própria comprovada",
    "Rede com +50 parceiros financeiros e tecnológicos",
    "Atuação personalizada para cada cliente",
    "Experiência em operações complexas",
  ];

  return (
    <Box
      py={{ base: 12, md: 20 }}
      as="section"
      id="quem-somos"
      role="region"
      aria-labelledby="about-heading"
    >
      <Container maxW="6xl">
        <VStack gap={{ base: 12, md: 16 }}>
          {/* Header */}
          <VStack gap={4} textAlign="center" maxW="3xl" mx="auto">
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
                <TargetIcon size={16} />
                <Text color="white">Quem Somos</Text>
              </Flex>
            </Badge>

            <Heading
              id="about-heading"
              fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
              fontWeight="bold"
              lineHeight="1.3"
              color="gray.900"
              _dark={{ color: "white" }}
            >
              <Text as="span" color="green.500" _dark={{ color: "green.400" }}>
                Especialistas
              </Text>{" "}
              em transformar estratégia em ação
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              lineHeight="1.6"
              maxW="2xl"
            >
              Conectamos empresas às melhores soluções do mercado — de crédito à
              tecnologia, de valuation à expansão internacional.
            </Text>
          </VStack>

          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 8, lg: 12 }}
            align="start"
            w="full"
          >
            {/* Left side - Mission, Vision, Values */}
            <VStack gap={4} flex={1}>
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <HStack gap={3} align="start" key={index} w="full">
                    <Box
                      p={4}
                      bg={`${value.color}.100`}
                      _dark={{ bg: `${value.color}.900` }}
                      borderRadius="md"
                      flexShrink={0}
                    >
                      <IconComponent
                        size={16}
                        style={{
                          color: `var(--chakra-colors-${value.color}-600)`,
                        }}
                        aria-hidden="true"
                      />
                    </Box>

                    <VStack align="start" gap={0} flex={1}>
                      <Heading
                        fontSize="md"
                        fontWeight="semibold"
                        color="gray.900"
                        _dark={{ color: "white" }}
                      >
                        {value.title}
                      </Heading>

                      <Text
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                        fontSize="sm"
                        lineHeight="1.5"
                        fontStyle={
                          value.title === "Valores" ? "italic" : "normal"
                        }
                        fontWeight={
                          value.title === "Valores" ? "medium" : "normal"
                        }
                      >
                        {value.description}
                      </Text>
                    </VStack>
                  </HStack>
                );
              })}
            </VStack>

            {/* Right side - Differentials and Compliance */}
            <VStack gap={6} flex={1}>
              {/* Regulatory Compliance - Mandatory Information */}
              <Alert.Root
                status="info"
                variant="subtle"
                bg="blue.50"
                _dark={{
                  bg: "blue.900/20",
                  borderColor: "blue.800",
                }}
                border="1px solid"
                borderColor="blue.100"
                borderRadius="lg"
                role="region"
                aria-labelledby="compliance-heading"
              >
                <Alert.Indicator asChild>
                  <Shield size={18} />
                </Alert.Indicator>
                <VStack gap={3} align="start" flex={1}>
                  <Heading
                    id="compliance-heading"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="blue.800"
                    _dark={{ color: "blue.200" }}
                  >
                    Conformidade Regulatória
                  </Heading>

                  <Text
                    color="blue.700"
                    _dark={{ color: "blue.300" }}
                    lineHeight="1.4"
                  >
                    A Finhub atua exclusivamente como intermediadora estratégica
                    entre clientes e instituições habilitadas pelo BACEN, CVM,
                    SUSEP e demais órgãos reguladores. Não realizamos captação,
                    intermediação financeira direta ou gestão de recursos de
                    terceiros.
                  </Text>
                </VStack>
              </Alert.Root>

              {/* Legal Notice */}
              <Alert.Root
                status="warning"
                variant="subtle"
                bg="yellow.50"
                _dark={{
                  bg: "yellow.900/20",
                  borderColor: "yellow.800",
                }}
                border="1px solid"
                borderColor="yellow.100"
                borderRadius="lg"
                role="region"
                aria-labelledby="legal-heading"
              >
                <Alert.Indicator asChild>
                  <Scale size={18} />
                </Alert.Indicator>
                <VStack gap={2} align="start" flex={1}>
                  <Heading
                    id="legal-heading"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="yellow.800"
                    _dark={{ color: "yellow.200" }}
                  >
                    Aviso Legal
                  </Heading>

                  <Text
                    color="yellow.700"
                    _dark={{ color: "yellow.300" }}
                    lineHeight="1.4"
                  >
                    A Finhub não oferece garantias de aprovação, concessão de
                    crédito ou retorno financeiro. Recomendamos análise
                    criteriosa dos contratos junto às instituições executoras
                    das operações.
                  </Text>
                </VStack>
              </Alert.Root>
            </VStack>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};
