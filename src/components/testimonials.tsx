import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Badge,
  HStack,
  SimpleGrid,
  Avatar,
} from "@chakra-ui/react";
import { CheckIcon, Users2Icon } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "A Financial Hub conectou nossa empresa a um fundo com excelentes condições de crédito. Hoje estamos em plena expansão com energia limpa e financiamento estruturado.",
      name: "Carlos M.",
      role: "Diretor de Operações",
      company: "Grupo Energia Renovável",
      rating: 5,
      avatarColor: "green.500",
      accent: "green",
      impact: "R$ 2,5M captados em crédito",
    },
    {
      quote:
        "O valuation da nossa empresa superou nossas expectativas. A metodologia internacional e o suporte estratégico foram fundamentais para a entrada do nosso sócio investidor.",
      name: "Maria Silva",
      role: "CEO",
      company: "TechSolutions Brasil",
      rating: 5,
      avatarColor: "blue.500",
      accent: "blue",
      impact: "Valuation 40% acima do esperado",
    },
    {
      quote:
        "Conseguimos expandir para a Argentina com total segurança jurídica e fiscal. O apoio da Financial Hub foi essencial para nossa internacionalização.",
      name: "Roberto Santos",
      role: "Diretor Comercial",
      company: "Export & Import Ltda",
      rating: 5,
      avatarColor: "green.500",
      accent: "green",
      impact: "Expansão internacional concluída",
    },
    {
      quote:
        "A criação do nosso mini-banco revolucionou o relacionamento com nossos clientes. Agora oferecemos financiamento próprio com excelente margem de lucro.",
      name: "Ana Paula",
      role: "Diretora Financeira",
      company: "AutoPeças Premium",
      rating: 5,
      avatarColor: "orange.500",
      accent: "orange",
      impact: "30% de aumento na margem",
    },
  ];

  const cardBg = "white";
  const textColor = "gray.700";
  const borderColor = "gray.100";

  return (
    <Box
      py={{ base: 4, md: 6, lg: 8, xl: 16 }}
      as="section"
      id="depoimentos"
      aria-labelledby="testimonials-heading"
    >
      <Container maxW="6xl" position="relative" zIndex="1">
        <VStack gap={4} textAlign="center">
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
              <Users2Icon size={16} />
              <Text color="white"> Histórias de Sucesso</Text>
            </Flex>
          </Badge>
          <Heading
            as="h2"
            id="testimonials-heading"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
          >
            <Text as="span" color="green.500">
              Quem confia,{" "}
            </Text>
            cresce com a gente
          </Heading>
          <Text
            fontSize="lg"
            maxW="2xl"
            color="gray.600"
            _dark={{ color: "gray.300" }}
          >
            Empresas que contaram com a Financial Hub encontraram soluções que
            mudaram seu patamar. Veja o que nossos clientes dizem:
          </Text>
        </VStack>

        <SimpleGrid
          mt={{ base: 4, md: 4, lg: 8, xl: 12 }}
          columns={{ base: 1, md: 2 }}
          gap={{ base: 2, md: 2, lg: 4, xl: 8 }}
          w="full"
          as="ul"
          aria-label="Depoimentos de clientes"
          listStyleType="none"
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              bg={cardBg}
              boxShadow="xl"
              border="1px solid"
              borderColor={borderColor}
              p={0}
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "2xl",
                borderColor: `${testimonial.accent}.200`,
              }}
              as="li"
              role="article"
              aria-labelledby={`testimonial-${index}-author`}
            >
              <Box p={{ base: 4, md: 8 }} pt={{ base: 4, md: 10 }}>
                <HStack
                  mb={6}
                  gap={2}
                  aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}
                >
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar
                        key={i}
                        color="var(--acp-colors-orange-300)"
                        aria-hidden="true"
                      />
                    ))}
                </HStack>

                <Box position="relative" mb={4}>
                  <Text
                    fontSize={{ base: "md", lg: "md" }}
                    fontStyle="italic"
                    color={textColor}
                    lineHeight="1.3"
                    as="blockquote"
                  >
                    "{testimonial.quote}"
                  </Text>
                </Box>

                <HStack gap={2} mb={3}>
                  <CheckIcon
                    color={`var(--acp-colors-${testimonial.accent}-500)`}
                    aria-hidden="true"
                  />
                  <Text
                    fontWeight="medium"
                    fontSize="sm"
                    color={`${testimonial.accent}.700`}
                  >
                    {testimonial.impact}
                  </Text>
                </HStack>

                <Flex align="center" justify="space-between">
                  <HStack gap={4}>
                    <Avatar.Root
                      size="md"
                      bg={testimonial.avatarColor}
                      color="white"
                      fontWeight="bold"
                      aria-hidden="true"
                    >
                      <Avatar.Fallback>
                        {testimonial.name.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar.Root>
                    <VStack align="start" gap={0}>
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        id={`testimonial-${index}-author`}
                        color="gray.900"
                      >
                        {testimonial.name}
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        {testimonial.role}
                      </Text>
                    </VStack>
                  </HStack>
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
