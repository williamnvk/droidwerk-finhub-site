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
} from "@chakra-ui/react";
import { Target, Eye, Heart, Award } from "lucide-react";

export const AboutSection = () => {
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
      color: "green",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Confiança. Transparência. Performance. Inovação.",
      color: "purple",
    },
  ];

  const pillars = [
    "Metodologia própria comprovada",
    "Profundo conhecimento do ecossistema empresarial brasileiro",
    "Atuação personalizada para cada cliente",
    "Conformidade total com regulamentações vigentes",
  ];

  return (
    <Box py={{ base: 16, md: 24 }} bg="gray.50" as="section" id="quem-somos">
      <Container maxW="8xl">
        <VStack gap={16}>
          {/* Header */}
          <VStack gap={6} textAlign="center" maxW="4xl">
            <Badge
              colorPalette="green"
              fontSize="sm"
              px={4}
              py={2}
              borderRadius="full"
              fontWeight="medium"
            >
              Quem Somos
            </Badge>
            
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="extrabold"
              lineHeight="1.2"
            >
              <Text as="span" color="green.600">
                Especialistas
              </Text>{" "}
              em transformar estratégia em ação.
            </Heading>
          </VStack>

          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={16}
            align="start"
            w="full"
          >
            {/* Left side - About text */}
            <VStack gap={8} flex={1.2} align="start">
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.700"
                lineHeight="1.7"
                fontWeight="medium"
              >
                Somos uma assessoria financeira especializada em conectar
                empresas às melhores soluções do mercado — de crédito à
                tecnologia, de valuation à expansão internacional.
              </Text>
              
              <Text
                fontSize="lg"
                color="gray.600"
                lineHeight="1.6"
              >
                Atuamos de forma personalizada, com metodologia própria e
                profundo conhecimento do ecossistema empresarial brasileiro.
                Nossa missão é simplificar o complexo mundo financeiro e
                conectar sua empresa às oportunidades certas.
              </Text>

              {/* Pillars */}
              <Box w="full">
                <Heading
                  fontSize="xl"
                  fontWeight="bold"
                  color="gray.900"
                  mb={6}
                >
                  Nossos Pilares
                </Heading>
                
                <VStack gap={4} align="start">
                  {pillars.map((pillar, index) => (
                    <HStack key={index} gap={3} align="start">
                      <Box
                        width="8px"
                        height="8px"
                        bg="green.500"
                        borderRadius="full"
                        mt="8px"
                        flexShrink={0}
                      />
                      <Text
                        color="gray.700"
                        fontSize="md"
                        lineHeight="1.6"
                        fontWeight="medium"
                      >
                        {pillar}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            </VStack>

            {/* Right side - Mission, Vision, Values */}
            <VStack gap={6} flex={1}>
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card.Root
                    key={index}
                    variant="elevated"
                    size="lg"
                    bg="white"
                    w="full"
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "xl",
                    }}
                    transition="all 0.3s ease"
                  >
                    <Card.Body p={6}>
                      <VStack align="start" gap={4}>
                        <HStack gap={3}>
                          <Box
                            p={2}
                            bg={`${value.color}.100`}
                            borderRadius="lg"
                          >
                            <IconComponent
                              size={20}
                              color={`var(--acp-colors-${value.color}-600)`}
                            />
                          </Box>
                          
                          <Heading
                            fontSize="lg"
                            fontWeight="bold"
                            color="gray.900"
                          >
                            {value.title}
                          </Heading>
                        </HStack>
                        
                        <Text
                          color="gray.600"
                          fontSize="md"
                          lineHeight="1.6"
                          fontStyle={value.title === "Valores" ? "italic" : "normal"}
                          fontWeight={value.title === "Valores" ? "semibold" : "normal"}
                        >
                          {value.description}
                        </Text>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                );
              })}

              {/* Compliance notice */}
              <Box
                p={6}
                bg="green.50"
                borderRadius="xl"
                border="1px solid"
                borderColor="green.100"
                w="full"
              >
                <VStack gap={3} align="start">
                  <HStack gap={2}>
                    <Award size={20} color="var(--acp-colors-green-600)" />
                    <Heading fontSize="md" fontWeight="bold" color="green.800">
                      Conformidade Regulatória
                    </Heading>
                  </HStack>
                  
                  <Text fontSize="sm" color="green.700" lineHeight="1.5">
                    Atuamos em total conformidade com as regulamentações do
                    BACEN, CVM e SUSEP, garantindo segurança jurídica em todas
                    as nossas operações.
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
}; 