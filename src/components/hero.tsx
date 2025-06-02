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
  Tag,
  Center,
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
    <Center
      minH="100vh"
      py={{ base: 20, md: 32 }}
      position="relative"
      mt={"-72px"}
      overflow="hidden"
    >
      {/* Background Video */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="0"
        overflow="hidden"
      >
        <video
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            filter: "brightness(0.8) contrast(1.2) saturate(1.2) grayscale(1)",
          }}
          autoPlay
          muted
          loop
          playsInline
          src="video.mp4"
        />
        {/* Video Overlay for better text readability */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(22,163,74,0.3) 100%)"
          zIndex="1"
        />

        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 50%, rgba(22,163,74,0.3) 100%)"
          zIndex="5"
        />
      </Box>

      <Container maxW="6xl" position="relative" zIndex={2}>
        <VStack
          align={{ base: "center", lg: "flex-start" }}
          gap={{ base: 2, md: 4, lg: 8 }}
          flex={1}
          textAlign={{ base: "center", lg: "left" }}
        >
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
              <TrendingUp size={16} />
              <Text color="white">Soluções Financeiras Inteligentes</Text>
            </Flex>
          </Badge>

          <Heading
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="extrabold"
            lineHeight="1.1"
            letterSpacing="tight"
            color="white"
            textShadow="2px 2px 4px rgba(0,0,0,0.3)"
          >
            <Text as="span" color="green.400">
              Transforme
            </Text>{" "}
            sua empresa com soluções financeiras{" "}
            <Text as="span" color="green.400">
              inteligentes
            </Text>
          </Heading>

          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="gray.100"
            maxW="5xl"
            fontWeight="medium"
            lineHeight="1.6"
            textShadow="1px 1px 2px rgba(0,0,0,0.5)"
          >
            Conectamos você aos melhores recursos do mercado:{" "}
            <strong>crédito</strong>,&nbsp;
            <strong>tecnologia</strong>,&nbsp;
            <strong>expansão internacional</strong> e muito mais — tudo com
            estratégia e agilidade.
          </Text>

          <HStack gap={3} align="center">
            {highlights.map((highlight, index) => (
              <Tag.Root
                key={index}
                size="lg"
                variant="outline"
                backdropFilter="blur(2px)"
                rounded="full"
                colorPalette="green"
                py={2}
                px={4}
                color="white"
              >
                <Tag.Label>{highlight}</Tag.Label>
              </Tag.Root>
            ))}
          </HStack>

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
                colorPalette="green"
                variant="solid"
                fontWeight="bold"
                px={8}
                py={6}
                fontSize="lg"
                bg="green.500"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                  bg: "green.600",
                }}
                transition="all 0.3s"
                backdropFilter="blur(5px)"
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
                colorPalette="green"
                fontWeight="medium"
                px={8}
                py={6}
                fontSize="lg"
                borderColor="green.400"
                color="white"
                bg="rgba(0, 0, 0, 0.1)"
                backdropFilter="blur(2px)"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: "rgba(34, 197, 94, 0.2)",
                  borderColor: "green.300",
                }}
                transition="all 0.3s"
              >
                Conheça nossas soluções
              </Button>
            </NextLink>
          </Stack>

          <Text
            fontSize="sm"
            color="gray.200"
            pt={2}
            textShadow="1px 1px 2px rgba(0,0,0,0.5)"
          >
            Primeira consulta gratuita • Sem compromisso
          </Text>
        </VStack>
      </Container>
    </Center>
  );
};
