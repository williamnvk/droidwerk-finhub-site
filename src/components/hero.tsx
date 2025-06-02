"use client";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Badge,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  const highlights = [
    "Mais de 50 parceiros financeiros",
    "R$ 500 mil a R$ 10 milhões+",
    "Atuação nacional",
  ];

  return (
    <Box
      minH="100vh"
      bg="gradient-to-br"
      bgGradient="linear(to-br, blue.50, white, blue.50)"
      py={{ base: 20, md: 32 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        width="400px"
        height="400px"
        bg="blue.100"
        borderRadius="full"
        opacity="0.3"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        width="300px"
        height="300px"
        bg="blue.200"
        borderRadius="full"
        opacity="0.2"
        zIndex={0}
      />

      <Container maxW="8xl" position="relative" zIndex={1}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={{ base: 16, lg: 20 }}
        >
          {/* Content */}
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            gap={8}
            flex={1}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Badge
              colorPalette="blue"
              fontSize="sm"
              px={4}
              py={2}
              borderRadius="full"
              fontWeight="medium"
            >
              <Flex align="center" gap={2}>
                <TrendingUp size={16} />
                <Text>Soluções Financeiras Inteligentes</Text>
              </Flex>
            </Badge>

            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="extrabold"
              lineHeight="1.1"
              letterSpacing="tight"
            >
              <Text as="span" color="blue.600">
                Transforme
              </Text>{" "}
              sua empresa com soluções financeiras{" "}
              <Text as="span" color="blue.600">
                inteligentes
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              maxW="2xl"
              fontWeight="medium"
              lineHeight="1.6"
            >
              Conectamos você aos melhores recursos do mercado: crédito,
              tecnologia, expansão internacional e muito mais — tudo com
              estratégia e agilidade.
            </Text>

            {/* Highlights */}
            <VStack align={{ base: "center", lg: "flex-start" }} gap={3}>
              {highlights.map((highlight, index) => (
                <HStack key={index} gap={3}>
                  <CheckCircle size={20} color="var(--acp-colors-green-500)" />
                  <Text fontWeight="medium" color="gray.700">
                    {highlight}
                  </Text>
                </HStack>
              ))}
            </VStack>

            {/* CTA Buttons */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              gap={4}
              pt={4}
              w="full"
              justify={{ base: "center", lg: "flex-start" }}
            >
              <NextLink
                href="https://api.whatsapp.com/send/?phone=%2B5511942989475&text=Ol%C3%A1.+Gostaria+de+solicitar+uma+avalia%C3%A7%C3%A3o+gratuita+da+Financial+Hub+Assessoria+&type=phone_number&app_absent=0"
                passHref
                target="_blank"
                legacyBehavior
              >
                <Button
                  as="a"
                  size="lg"
                  colorPalette="blue"
                  variant="solid"
                  fontWeight="bold"
                  px={8}
                  py={6}
                  fontSize="lg"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}
                  transition="all 0.3s"
                >
                  Solicite uma Avaliação Gratuita
                  <ArrowRight size={20} />
                </Button>
              </NextLink>

              <NextLink href="/sobre" passHref legacyBehavior>
                <Button
                  as="a"
                  size="lg"
                  variant="outline"
                  colorPalette="blue"
                  fontWeight="medium"
                  px={8}
                  py={6}
                  fontSize="lg"
                  _hover={{
                    transform: "translateY(-2px)",
                    bg: "blue.50",
                  }}
                  transition="all 0.3s"
                >
                  Conheça nossas soluções
                </Button>
              </NextLink>
            </Stack>

            <Text fontSize="sm" color="gray.500" pt={2}>
              Primeira consulta gratuita • Sem compromisso
            </Text>
          </VStack>

          {/* Visual Element */}
          <Box
            flex={1}
            display={{ base: "none", lg: "block" }}
            position="relative"
          >
            <Box
              width="500px"
              height="400px"
              bg="gradient-to-br"
              bgGradient="linear(to-br, blue.500, blue.600)"
              borderRadius="3xl"
              position="relative"
              overflow="hidden"
              boxShadow="2xl"
            >
              {/* Decorative elements inside the box */}
              <Box
                position="absolute"
                top="20%"
                left="20%"
                width="100px"
                height="100px"
                bg="whiteAlpha.200"
                borderRadius="xl"
                transform="rotate(12deg)"
              />
              <Box
                position="absolute"
                bottom="20%"
                right="20%"
                width="80px"
                height="80px"
                bg="whiteAlpha.300"
                borderRadius="full"
              />
              <Box
                position="absolute"
                top="50%"
                right="30%"
                width="60px"
                height="60px"
                bg="whiteAlpha.200"
                borderRadius="lg"
                transform="rotate(-15deg)"
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}; 