import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Stack,
} from "@chakra-ui/react";
import {
  Users,
  Network,
  Award,
  MapPin,
  Settings,
  CheckCircle,
} from "lucide-react";

export const WhyUsSection = () => {
  const differentials = [
    {
      icon: Users,
      title: "Atendimento consultivo e personalizado",
      description:
        "Cada empresa é única. Desenvolvemos estratégias personalizadas que se encaixam perfeitamente na sua realidade e objetivos específicos.",
      color: "blue",
    },
    {
      icon: Network,
      title: "Rede com +50 parceiros financeiros e tecnológicos",
      description:
        "Nossa extensa rede de contatos garante que você tenha acesso às melhores oportunidades e condições do mercado.",
      color: "green",
    },
    {
      icon: Award,
      title: "Experiência em operações complexas",
      description:
        "Anos de experiência nos permitem estruturar e executar operações complexas com segurança e eficiência comprovadas.",
      color: "purple",
    },
    {
      icon: MapPin,
      title: "Atuação nacional com base em São Paulo",
      description:
        "Presença nacional com o dinamismo e conectividade do principal centro financeiro do país.",
      color: "orange",
    },
    {
      icon: Settings,
      title: "Soluções integradas de crédito, tecnologia e expansão",
      description:
        "Oferecemos um ecossistema completo de soluções que trabalham de forma integrada para maximizar seus resultados.",
      color: "teal",
    },
  ];

  const highlights = [
    "Especialistas em conexões estratégicas",
    "Metodologia própria comprovada",
    "Inteligência de mercado atualizada",
    "Conformidade regulatória total",
    "Transparência em todas as operações",
  ];

  return (
    <Box py={{ base: 16, md: 24 }} bg="white" as="section" id="por-que-nos">
      <Container maxW="8xl">
        <VStack gap={16}>
          {/* Header */}
          <VStack gap={6} textAlign="center" maxW="4xl">
            <Badge
              colorPalette="blue"
              fontSize="sm"
              px={4}
              py={2}
              borderRadius="full"
              fontWeight="medium"
            >
              Por que a Financial Hub?
            </Badge>
            
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="extrabold"
              lineHeight="1.2"
            >
              Muito além da assessoria.{" "}
              <Text as="span" color="blue.600">
                Somos especialistas
              </Text>{" "}
              em conexões estratégicas.
            </Heading>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              lineHeight="1.6"
              fontWeight="medium"
            >
              Nosso time alia experiência prática com inteligência de mercado
              para entregar as melhores oportunidades financeiras para sua
              empresa.
            </Text>
          </VStack>

          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={16}
            align="start"
            w="full"
          >
            {/* Left side - Differentials */}
            <VStack gap={8} flex={1}>
              <Heading
                fontSize="2xl"
                fontWeight="bold"
                color="gray.900"
                alignSelf="start"
              >
                Nossos Diferenciais
              </Heading>
              
              <VStack gap={6} w="full">
                {differentials.map((differential, index) => {
                  const IconComponent = differential.icon;
                  return (
                    <HStack
                      key={index}
                      gap={4}
                      align="start"
                      p={6}
                      bg="gray.50"
                      borderRadius="xl"
                      w="full"
                      _hover={{
                        bg: "gray.100",
                        transform: "translateX(8px)",
                      }}
                      transition="all 0.3s ease"
                    >
                      <Box
                        p={3}
                        bg={`${differential.color}.100`}
                        borderRadius="lg"
                        flexShrink={0}
                      >
                        <IconComponent
                          size={24}
                          color={`var(--acp-colors-${differential.color}-600)`}
                        />
                      </Box>
                      
                      <VStack align="start" gap={2} flex={1}>
                        <Heading
                          fontSize="lg"
                          fontWeight="bold"
                          color="gray.900"
                          lineHeight="1.3"
                        >
                          {differential.title}
                        </Heading>
                        
                        <Text
                          color="gray.600"
                          fontSize="md"
                          lineHeight="1.5"
                        >
                          {differential.description}
                        </Text>
                      </VStack>
                    </HStack>
                  );
                })}
              </VStack>
            </VStack>

            {/* Right side - Highlights */}
            <VStack gap={8} flex={1}>
              <Heading
                fontSize="2xl"
                fontWeight="bold"
                color="gray.900"
                alignSelf="start"
              >
                Nossa Expertise
              </Heading>
              
              <Box
                p={8}
                bg="blue.50"
                borderRadius="2xl"
                border="1px solid"
                borderColor="blue.100"
                w="full"
              >
                <VStack gap={6} align="start">
                  {highlights.map((highlight, index) => (
                    <HStack key={index} gap={3} align="start">
                      <CheckCircle
                        size={20}
                        color="var(--acp-colors-blue-600)"
                        style={{ marginTop: "2px", flexShrink: 0 }}
                      />
                      <Text
                        fontWeight="medium"
                        color="gray.700"
                        fontSize="md"
                        lineHeight="1.5"
                      >
                        {highlight}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>

              {/* Stats */}
              <SimpleGrid columns={2} gap={4} w="full">
                <Box
                  p={6}
                  bg="white"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.200"
                  textAlign="center"
                  _hover={{
                    borderColor: "blue.200",
                    boxShadow: "md",
                  }}
                  transition="all 0.3s ease"
                >
                  <Heading
                    fontSize="3xl"
                    fontWeight="extrabold"
                    color="blue.600"
                  >
                    50+
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontWeight="medium">
                    Parceiros Financeiros
                  </Text>
                </Box>
                
                <Box
                  p={6}
                  bg="white"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.200"
                  textAlign="center"
                  _hover={{
                    borderColor: "blue.200",
                    boxShadow: "md",
                  }}
                  transition="all 0.3s ease"
                >
                  <Heading
                    fontSize="3xl"
                    fontWeight="extrabold"
                    color="green.600"
                  >
                    R$ 10M+
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontWeight="medium">
                    Volume Disponível
                  </Text>
                </Box>
              </SimpleGrid>
            </VStack>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
}; 