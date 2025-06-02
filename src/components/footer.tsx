import {
  Container,
  Link as ChakraLink,
  Text,
  HStack,
  Box,
  Separator,
  VStack,
  Stack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const Footer = () => (
  <Box>
    <Container maxW="8xl" py={{ base: 12, md: 16 }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        gap={{ base: 8, lg: 12 }}
        mb={12}
      >
        {/* Company Info */}
        <VStack align="start" gap={4}>
          <Heading fontSize="xl" fontWeight="bold" color="white">
            Financial Hub Assessoria
          </Heading>
          <Text fontSize="sm" color="gray.300" lineHeight="1.6">
            A Financial Hub Assessoria conecta empresas a soluções financeiras
            completas, com foco em performance, expansão e sustentabilidade.
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="medium">
            São Paulo - SP
          </Text>
        </VStack>

        {/* Services */}
        <VStack align="start" gap={4}>
          <Heading fontSize="lg" fontWeight="semibold" color="white">
            Soluções
          </Heading>
          <VStack align="start" gap={2}>
            <ChakraLink
              as={NextLink}
              href="/#solucoes"
              fontSize="sm"
              color="gray.300"
              _hover={{ color: "green.300" }}
            >
              Captação de Recursos
            </ChakraLink>
            <ChakraLink
              as={NextLink}
              href="/#solucoes"
              fontSize="sm"
              color="gray.300"
              _hover={{ color: "green.300" }}
            >
              Valuation e M&A
            </ChakraLink>
            <ChakraLink
              as={NextLink}
              href="/#solucoes"
              fontSize="sm"
              color="gray.300"
              _hover={{ color: "green.300" }}
            >
              Expansão Internacional
            </ChakraLink>
            <ChakraLink
              as={NextLink}
              href="/#solucoes"
              fontSize="sm"
              color="gray.300"
              _hover={{ color: "green.300" }}
            >
              Tecnologia & IA
            </ChakraLink>
          </VStack>
        </VStack>

        {/* Company */}
        <VStack align="start" gap={4}>
          <Heading fontSize="lg" fontWeight="semibold" color="white">
            Empresa
          </Heading>
          <VStack align="start" gap={2}>
            <ChakraLink
              as={NextLink}
              href="/#quem-somos"
              fontSize="sm"
              color="gray.300"
              _hover={{ color: "green.300" }}
            >
              Quem Somos
            </ChakraLink>
            <ChakraLink
              as={NextLink}
              href="/#por-que-nos"
              fontSize="sm"
              color="gray.300"
              _hover={{ color: "green.300" }}
            >
              Por que nós
            </ChakraLink>
            <ChakraLink
              as={NextLink}
              href="/#depoimentos"
              fontSize="sm"
              color="gray.300"
              _hover={{ color: "green.300" }}
            >
              Depoimentos
            </ChakraLink>
            <ChakraLink
              as={NextLink}
              href="/contato"
              fontSize="sm"
              color="gray.300"
              _hover={{ color: "green.300" }}
            >
              Contato
            </ChakraLink>
          </VStack>
        </VStack>

        {/* Contact */}
        <VStack align="start" gap={4}>
          <Heading fontSize="lg" fontWeight="semibold" color="white">
            Contato
          </Heading>
          <VStack align="start" gap={2}>
            <ChakraLink
              href="tel:+5511942989475"
              fontSize="sm"
              color="gray.300"
              _hover={{ color: "green.300" }}
            >
              (11) 94298-9475
            </ChakraLink>
            <ChakraLink
              href="mailto:contato@financialhub.com.br"
              fontSize="sm"
              color="gray.300"
              _hover={{ color: "green.300" }}
            >
              contato@financialhub.com.br
            </ChakraLink>
            <ChakraLink
              href="https://www.financialhub.com.br"
              target="_blank"
              fontSize="sm"
              color="gray.300"
              _hover={{ color: "green.300" }}
            >
              www.financialhub.com.br
            </ChakraLink>
          </VStack>
        </VStack>
      </SimpleGrid>

      <Separator mb={8} borderColor="gray.700" />

      <Stack
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align="center"
        gap={6}
      >
        <Text
          color="gray.400"
          fontSize="sm"
          textAlign={{ base: "center", lg: "left" }}
        >
          © 2025 Financial Hub Assessoria. Todos os direitos reservados
        </Text>

        <HStack gap={6} justify="center">
          <ChakraLink
            href="https://www.instagram.com/finhubassessoria/"
            target="_blank"
            aria-label="Instagram"
            color="gray.400"
            _hover={{ color: "green.300" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </ChakraLink>
          <ChakraLink
            href="https://linkedin.com/company/financial-hub-assessoria"
            target="_blank"
            aria-label="LinkedIn"
            color="gray.400"
            _hover={{ color: "green.300" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </ChakraLink>
        </HStack>

        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: 2, md: 6 }}
          align="center"
          fontSize="sm"
        >
          <ChakraLink
            as={NextLink}
            href="/politica-de-privacidade"
            color="gray.400"
            _hover={{ color: "green.300" }}
          >
            Política de Privacidade
          </ChakraLink>
          <ChakraLink
            as={NextLink}
            href="/termos-de-uso"
            color="gray.400"
            _hover={{ color: "green.300" }}
          >
            Termos de Uso
          </ChakraLink>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
