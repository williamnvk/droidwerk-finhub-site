import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Card,
  Button,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import {
  DollarSign,
  Building,
  Zap,
  TrendingUp,
  CreditCard,
  Globe,
  Shield,
  ArrowRight,
  Target,
  Banknote,
  Brain,
} from "lucide-react";

export const SolutionsSection = () => {
  return (
    <Box py={{ base: 16, md: 24 }} as="section" id="solucoes">
      <Container maxW="6xl">
        <VStack gap={16}>
          {/* Header Section */}
          <VStack gap={6} textAlign="center" maxW="4xl">
            <Badge
              colorPalette="gray"
              fontSize="sm"
              px={4}
              py={3}
              borderRadius="full"
              fontWeight="medium"
              bg="gray.800"
              backdropFilter="blur(10px)"
            >
              <Flex align="center" gap={2}>
                <TrendingUp size={16} />
                <Text color="white">Nossas Soluções</Text>
              </Flex>
            </Badge>

            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Soluções sob medida para{" "}
              <Text as="span" color="green.600" _dark={{ color: "green.400" }}>
                sua realidade empresarial
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              maxW="3xl"
              lineHeight="1.6"
            >
              Do básico ao sofisticado, oferecemos soluções completas que
              aceleram o crescimento da sua empresa com estratégia, agilidade e
              resultados comprovados.
            </Text>
          </VStack>

          {/* Grid Solutions */}
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(12, 1fr)",
            }}
            gap={6}
            w="full"
          >
            {/* Captação de Recursos - Principal */}
            <GridItem colSpan={{ base: 1, md: 8 }}>
              <Card.Root size="lg" height="full" bg="white">
                <Card.Body p={8}>
                  <VStack align="start" gap={6} height="full">
                    <HStack gap={4}>
                      <Box
                        p={4}
                        bg="green.50"
                        _dark={{ bg: "green.900" }}
                        borderRadius="lg"
                      >
                        <DollarSign
                          size={32}
                          color="var(--acp-colors-green-600)"
                        />
                      </Box>
                      <VStack align="start" gap={1}>
                        <Badge
                          colorPalette="green"
                          variant="subtle"
                          fontSize="xs"
                          px={3}
                          py={1}
                        >
                          DESTAQUE
                        </Badge>
                        <Text fontSize="sm" color="fg.muted">
                          +50 instituições parceiras
                        </Text>
                      </VStack>
                    </HStack>

                    <VStack align="start" gap={4} flex={1}>
                      <Heading
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="bold"
                        color="gray.900"
                      >
                        Captação de Recursos
                      </Heading>

                      <Text
                        fontSize={{ base: "md", md: "lg" }}
                        lineHeight="1.6"
                        color="fg.muted"
                      >
                        Conectamos sua empresa a mais de 50 instituições
                        financeiras — bancos, fintechs, fundos e agências de
                        fomento para viabilizar seu crescimento.
                      </Text>

                      <Text fontSize="sm" color="fg.muted">
                        De R$ 500 mil a R$ 10 milhões (ou +) com as melhores
                        taxas
                      </Text>
                    </VStack>

                    <Button
                      colorPalette="green"
                      size="lg"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "md",
                      }}
                      transition="all 0.2s ease"
                    >
                      <HStack gap={2}>
                        <Text>Solicitar Avaliação</Text>
                        <ArrowRight size={18} />
                      </HStack>
                    </Button>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Tecnologia & IA */}
            <GridItem colSpan={{ base: 1, md: 4 }}>
              <Card.Root
                size="lg"
                height="full"
                _hover={{
                  borderColor: "gray.300",
                  boxShadow: "md",
                }}
                transition="all 0.3s ease"
              >
                <Card.Body p={6}>
                  <VStack align="start" gap={4} height="full">
                    <Box p={3} bg="green.50" borderRadius="lg">
                      <Brain size={24} color="var(--acp-colors-gray-600)" />
                    </Box>

                    <VStack align="start" gap={3} flex={1}>
                      <Heading fontSize="2xl" fontWeight="bold">
                        Tecnologia & IA
                      </Heading>

                      <Text fontSize="lg" lineHeight="1.5" color="fg.muted">
                        Digitalize a gestão financeira com automações e
                        inteligência artificial para decisões baseadas em dados.
                      </Text>
                    </VStack>

                    <Button
                      variant="outline"
                      size="sm"
                      colorPalette="gray"
                      w="full"
                    >
                      Conhecer Soluções
                    </Button>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Valuation & M&A */}
            <GridItem colSpan={{ base: 1, md: 4 }}>
              <Card.Root
                size="lg"
                bg="white"
                height="full"
                borderWidth="1px solid"
                _dark={{
                  bg: "gray.800",
                }}
                _hover={{
                  borderColor: "gray.300",
                  boxShadow: "md",
                }}
                transition="all 0.3s ease"
              >
                <Card.Body p={6}>
                  <VStack align="start" gap={4} height="full">
                    <Box
                      p={3}
                      bg="green.50"
                      _dark={{ bg: "green.900" }}
                      borderRadius="lg"
                    >
                      <TrendingUp
                        size={24}
                        color="var(--acp-colors-green-600)"
                      />
                    </Box>

                    <VStack align="start" gap={3} flex={1}>
                      <Heading
                        fontSize="xl"
                        fontWeight="bold"
                        color="gray.900"
                        _dark={{ color: "white" }}
                      >
                        Valuation & M&A
                      </Heading>

                      <Text
                        fontSize="sm"
                        color="fg.muted"
                        _dark={{ color: "gray.300" }}
                        lineHeight="1.5"
                      >
                        Descubra o valor real da sua empresa com metodologias
                        internacionais. Ideal para venda, fusão ou entrada de
                        sócios.
                      </Text>
                    </VStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Crédito para Construção */}
            <GridItem colSpan={{ base: 1, md: 4 }}>
              <Card.Root
                size="lg"
                bg="white"
                height="full"
                border="1px solid"
                borderColor="gray.200"
                _dark={{
                  bg: "gray.800",
                  borderColor: "gray.700",
                }}
                _hover={{
                  borderColor: "gray.300",
                  boxShadow: "md",
                }}
                transition="all 0.3s ease"
              >
                <Card.Body p={6}>
                  <VStack align="start" gap={4} height="full">
                    <Box
                      p={3}
                      bg="orange.50"
                      _dark={{ bg: "orange.900" }}
                      borderRadius="lg"
                    >
                      <Building
                        size={24}
                        color="var(--acp-colors-orange-600)"
                      />
                    </Box>

                    <VStack align="start" gap={3} flex={1}>
                      <Heading
                        fontSize="xl"
                        fontWeight="bold"
                        color="gray.900"
                        _dark={{ color: "white" }}
                      >
                        Crédito Construção
                      </Heading>

                      <Text
                        fontSize="sm"
                        color="fg.muted"
                        _dark={{ color: "gray.300" }}
                        lineHeight="1.5"
                      >
                        Viabilize obras, loteamentos e projetos de expansão com
                        crédito estruturado e apoio técnico especializado.
                      </Text>
                    </VStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Economia com Energia */}
            <GridItem colSpan={{ base: 1, md: 4 }}>
              <Card.Root
                size="lg"
                bg="white"
                height="full"
                border="1px solid"
                borderColor="gray.200"
                _dark={{
                  bg: "gray.800",
                  borderColor: "gray.700",
                }}
                _hover={{
                  borderColor: "gray.300",
                  boxShadow: "md",
                }}
                transition="all 0.3s ease"
              >
                <Card.Body p={6}>
                  <VStack align="start" gap={4} height="full">
                    <Box
                      p={3}
                      bg="yellow.50"
                      _dark={{ bg: "yellow.900" }}
                      borderRadius="lg"
                    >
                      <Zap size={24} color="var(--acp-colors-yellow-600)" />
                    </Box>

                    <VStack align="start" gap={3} flex={1}>
                      <Heading
                        fontSize="xl"
                        fontWeight="bold"
                        color="gray.900"
                        _dark={{ color: "white" }}
                      >
                        Economia Energia
                      </Heading>

                      <Text
                        fontSize="sm"
                        color="fg.muted"
                        _dark={{ color: "gray.300" }}
                        lineHeight="1.5"
                      >
                        Implante soluções energéticas sustentáveis e reduza até
                        35% na conta de luz da sua empresa.
                      </Text>
                    </VStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Mini-Banco */}
            <GridItem colSpan={{ base: 1, md: 3 }}>
              <Card.Root
                size="lg"
                bg="white"
                height="full"
                border="1px solid"
                borderColor="gray.200"
                _dark={{
                  bg: "gray.800",
                  borderColor: "gray.700",
                }}
                _hover={{
                  borderColor: "gray.300",
                  boxShadow: "md",
                }}
                transition="all 0.3s ease"
              >
                <Card.Body p={5}>
                  <HStack gap={3}>
                    <Box
                      p={2}
                      bg="green.50"
                      _dark={{ bg: "green.900" }}
                      borderRadius="md"
                    >
                      <CreditCard
                        size={20}
                        color="var(--acp-colors-green-600)"
                      />
                    </Box>
                    <VStack align="start" gap={0} flex={1}>
                      <Heading
                        fontSize="md"
                        fontWeight="semibold"
                        color="gray.900"
                        _dark={{ color: "white" }}
                      >
                        Mini-Banco
                      </Heading>
                      <Text fontSize="xs" color="fg.muted">
                        Ofereça crédito aos seus clientes
                      </Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Expansão Internacional */}
            <GridItem colSpan={{ base: 1, md: 3 }}>
              <Card.Root
                size="lg"
                bg="white"
                height="full"
                border="1px solid"
                borderColor="gray.200"
                _dark={{
                  bg: "gray.800",
                  borderColor: "gray.700",
                }}
                _hover={{
                  borderColor: "gray.300",
                  boxShadow: "md",
                }}
                transition="all 0.3s ease"
              >
                <Card.Body p={5}>
                  <HStack gap={3}>
                    <Box
                      p={2}
                      bg="green.50"
                      _dark={{ bg: "green.900" }}
                      borderRadius="md"
                    >
                      <Globe size={20} color="var(--acp-colors-green-600)" />
                    </Box>
                    <VStack align="start" gap={0} flex={1}>
                      <Heading
                        fontSize="md"
                        fontWeight="semibold"
                        color="gray.900"
                        _dark={{ color: "white" }}
                      >
                        Expansão Global
                      </Heading>
                      <Text fontSize="xs" color="fg.muted">
                        Atuação internacional segura
                      </Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Seguros Empresariais */}
            <GridItem colSpan={{ base: 1, md: 3 }}>
              <Card.Root
                size="lg"
                bg="white"
                height="full"
                border="1px solid"
                borderColor="gray.200"
                _dark={{
                  bg: "gray.800",
                  borderColor: "gray.700",
                }}
                _hover={{
                  borderColor: "gray.300",
                  boxShadow: "md",
                }}
                transition="all 0.3s ease"
              >
                <Card.Body p={5}>
                  <HStack gap={3}>
                    <Box
                      p={2}
                      bg="red.50"
                      _dark={{ bg: "red.900" }}
                      borderRadius="md"
                    >
                      <Shield size={20} color="var(--acp-colors-red-600)" />
                    </Box>
                    <VStack align="start" gap={0} flex={1}>
                      <Heading
                        fontSize="md"
                        fontWeight="semibold"
                        color="gray.900"
                        _dark={{ color: "white" }}
                      >
                        Seguros
                      </Heading>
                      <Text fontSize="xs" color="fg.muted">
                        Proteção empresarial completa
                      </Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Mais Soluções */}
            <GridItem colSpan={{ base: 1, md: 3 }}>
              <Card.Root
                size="lg"
                bg="gray.100"
                height="full"
                border="1px solid"
                borderColor="gray.200"
                _dark={{
                  bg: "gray.700",
                  borderColor: "gray.600",
                }}
                _hover={{
                  bg: "gray.200",
                  borderColor: "gray.300",
                  _dark: {
                    bg: "gray.600",
                    borderColor: "gray.500",
                  },
                }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                <Card.Body p={5}>
                  <HStack gap={3} justify="center">
                    <Box
                      p={2}
                      bg="gray.200"
                      _dark={{ bg: "gray.600" }}
                      borderRadius="md"
                    >
                      <Target size={20} color="var(--acp-colors-gray-50)" />
                    </Box>
                    <VStack align="start" gap={0}>
                      <Heading
                        fontSize="md"
                        fontWeight="semibold"
                        color="gray.700"
                        _dark={{ color: "gray.300" }}
                      >
                        Mais Soluções
                      </Heading>
                      <Text fontSize="xs" color="fg.muted">
                        Descubra outras opções
                      </Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};
