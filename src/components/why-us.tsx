import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Badge,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  Users,
  Network,
  Award,
  MapPin,
  Settings,
  ShieldQuestionIcon,
} from "lucide-react";

export const WhyUsSection = () => {
  const differentials = [
    {
      icon: Users,
      title: "Atendimento Consultivo",
      description: "Estratégias personalizadas para sua realidade",
      color: "green",
    },
    {
      icon: Network,
      title: "+50 Parceiros",
      description: "Acesso às melhores condições do mercado",
      color: "blue",
    },
    {
      icon: Award,
      title: "Operações Complexas",
      description: "Experiência comprovada em grandes transações",
      color: "red",
    },
    {
      icon: MapPin,
      title: "Atuação Nacional",
      description: "Base em SP, presença em todo Brasil",
      color: "green",
    },
    {
      icon: Settings,
      title: "Soluções Integradas",
      description: "Crédito, tecnologia e expansão em um só lugar",
      color: "gray",
    },
  ];

  return (
    <Box
      py={{ base: 12, md: 16, lg: 20 }}
      as="section"
      id="por-que-nos"
      bg="white"
      rounded="lg"
      m={{ base: 4, md: 8, lg: 16 }}
      role="region"
      aria-labelledby="why-us-heading"
    >
      <Container maxW="6xl">
        <VStack gap={{ base: 8, md: 10, lg: 12 }}>
          {/* Header */}
          <VStack gap={4} textAlign="center" maxW="3xl">
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
                <ShieldQuestionIcon size={16} />
                <Text color="white">Por que a Financial Hub?</Text>
              </Flex>
            </Badge>

            <Heading
              id="why-us-heading"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="extrabold"
              lineHeight="1.2"
              color="gray.900"
              as="h2"
            >
              Especialistas em{" "}
              <Text as="span" color="green.500">
                conexões estratégicas
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              fontWeight="medium"
            >
              Experiência + inteligência de mercado = melhores oportunidades
              financeiras
            </Text>
          </VStack>

          {/* Differentials Grid - All cards with same size */}
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3, xl: 5 }}
            gap={{ base: 0, md: 6 }}
            w="full"
            role="list"
            aria-label="Nossos diferenciais"
          >
            {differentials.map((differential, index) => {
              const IconComponent = differential.icon;
              return (
                <VStack
                  key={index}
                  gap={4}
                  p={{ base: 4, md: 6 }}
                  borderRadius="xl"
                  borderWidth={{ base: 0, md: 1 }}
                  borderColor="gray.200"
                  textAlign="center"
                  role="listitem"
                  tabIndex={0}
                  _focus={{
                    outline: "2px solid",
                    outlineColor: `${differential.color}.500`,
                    outlineOffset: "2px",
                  }}
                  minH={{ base: "auto", md: "200px" }}
                  justifyContent="flex-start"
                >
                  <Box
                    p={3}
                    bg={`${differential.color}.100`}
                    borderRadius="full"
                    w={12}
                    h={12}
                    border="1px solid"
                    borderColor={`${differential.color}.200`}
                    aria-hidden="true"
                  >
                    <Icon color={`${differential.color}.700`}>
                      <IconComponent size={24} />
                    </Icon>
                  </Box>

                  <VStack gap={2}>
                    <Heading
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="bold"
                      color="gray.900"
                      lineHeight="1.3"
                      as="h3"
                    >
                      {differential.title}
                    </Heading>

                    <Text
                      color="gray.600"
                      fontSize={{ base: "xs", md: "sm" }}
                      lineHeight="1.4"
                    >
                      {differential.description}
                    </Text>
                  </VStack>
                </VStack>
              );
            })}
          </SimpleGrid>

          {/* Stats */}
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            gap={{ base: 4, md: 6 }}
            w="full"
            maxW="4xl"
            role="list"
            aria-label="Estatísticas da empresa"
          >
            <VStack gap={1} textAlign="center" role="listitem">
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="extrabold"
                color="green.600"
                as="h4"
              >
                R$ 500K
              </Heading>
              <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
                Valor Mínimo
              </Text>
            </VStack>

            <VStack gap={1} textAlign="center" role="listitem">
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="extrabold"
                color="green.600"
                as="h4"
              >
                35%
              </Heading>
              <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
                Economia Energia
              </Text>
            </VStack>

            <VStack gap={1} textAlign="center" role="listitem">
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="extrabold"
                color="green.600"
                as="h4"
              >
                8+
              </Heading>
              <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
                Tipos de Soluções
              </Text>
            </VStack>

            <VStack gap={1} textAlign="center" role="listitem">
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="extrabold"
                color="green.600"
                as="h4"
              >
                1ª
              </Heading>
              <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
                Consulta Gratuita
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
