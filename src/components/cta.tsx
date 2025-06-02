import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  Badge,
  Flex,
  HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowRight, Star, Phone } from "lucide-react";

export const CTASection = () => (
  <Box
    py={24}
    bg="green.600"
    borderRadius={{ md: "xl" }}
    mx={{ md: 8 }}
    position="relative"
    overflow="hidden"
  >
    <Box
      position="absolute"
      top="-10%"
      right="-5%"
      width="300px"
      height="300px"
      bg="whiteAlpha.100"
      borderRadius="full"
      zIndex={0}
    />
    <Box
      position="absolute"
      bottom="-15%"
      left="-10%"
      width="400px"
      height="400px"
      bg="whiteAlpha.100"
      borderRadius="full"
      zIndex={0}
    />
    <Container maxW="8xl" textAlign="center" position="relative" zIndex={1}>
      <VStack gap={10}>
        <HStack justify="center">
          <Badge
            bg="white"
            fontSize="sm"
            px={4}
            py={2}
            borderRadius="full"
            color="green.500"
            fontWeight="bold"
            boxShadow="md"
          >
            <Flex align="center" gap={2}>
              <Star size={16} />
              <Text>Sua empresa no próximo nível</Text>
            </Flex>
          </Badge>
        </HStack>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "5xl" }}
          color="white"
          fontWeight="extrabold"
          lineHeight="1.2"
        >
          Vamos levar sua empresa a um novo nível?
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          maxW="4xl"
          mx="auto"
          color="whiteAlpha.900"
          fontWeight="medium"
        >
          Preencha o formulário e fale com um dos nossos especialistas. A
          primeira conversa é gratuita e sem compromisso. Entenda quais
          soluções se encaixam no seu momento empresarial.
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={6}
          pt={4}
          justify="center"
        >
          <NextLink
            href="https://api.whatsapp.com/send/?phone=%2B5511942989475&text=Ol%C3%A1.+Gostaria+de+falar+com+um+especialista+da+Financial+Hub+Assessoria+&type=phone_number&app_absent=0"
            passHref
            target="_blank"
            legacyBehavior
          >
            <Button
              as="a"
              size="lg"
              variant="solid"
              bg="white"
              color="green.500"
              fontWeight="bold"
              px={8}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "xl",
                bg: "white",
                color: "green.500",
              }}
              transition="all 0.3s"
            >
              <Phone size={18} />
              Fale com um Especialista
            </Button>
          </NextLink>
          <NextLink href="/sobre" passHref legacyBehavior>
            <Button
              as="a"
              size="lg"
              variant="ghost"
              colorPalette="green"
              color="white"
              fontWeight="medium"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "xl",
                bg: "green.500",
                color: "white",
              }}
            >
              Conheça nossa empresa
              <ArrowRight size={18} />
            </Button>
          </NextLink>
        </Stack>
        <Text fontSize="sm" color="whiteAlpha.800" pt={2}>
          Primeira consulta gratuita • Sem compromisso • Atendimento personalizado
        </Text>
      </VStack>
    </Container>
  </Box>
);
