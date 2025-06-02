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
} from "@chakra-ui/react";
import {
  DollarSign,
  Building,
  Zap,
  TrendingUp,
  CreditCard,
  Globe,
  Shield,
  Bot,
  ArrowRight,
  Target,
  Rocket,
  TrendingDown,
  Lightbulb,
} from "lucide-react";

export const SolutionsSection = () => {
  return (
    <Box
      py={{ base: 20, md: 32 }}
      bg="gray.50"
      as="section"
      id="solucoes"
      position="relative"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="radial(circle at 20% 50%, blue.50 0%, transparent 50%), radial(circle at 80% 20%, green.50 0%, transparent 50%)"
        opacity="0.5"
        pointerEvents="none"
      />

      <Container maxW="8xl" position="relative">
        <VStack gap={20}>
          {/* Header */}
          <VStack gap={8} textAlign="center" maxW="5xl">
            <Badge
              colorPalette="green"
              fontSize="md"
              px={6}
              py={3}
              borderRadius="full"
              fontWeight="bold"
            >
              <Lightbulb size={20} /> Nossas Soluções
            </Badge>

            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="black"
              lineHeight="1.1"
              letterSpacing="-0.02em"
            >
              O que sua empresa{" "}
              <Text
                as="span"
                bgImage="linear-gradient(45deg, {colors.green.600}, {colors.green.500})"
                bgClip="text"
              >
                precisa está aqui
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "xl", md: "xl" }}
              color="fg.muted"
              maxW="3xl"
            >
              Transformamos desafios empresariais em oportunidades de
              crescimento com soluções financeiras completas e inteligentes.
            </Text>
          </VStack>

          {/* Bento Grid */}
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(12, 1fr)",
            }}
            templateRows={{
              base: "auto",
              md: "repeat(6, minmax(200px, auto))",
            }}
            gap={6}
            w="full"
          >
            <GridItem colSpan={{ base: 1, md: 7 }} rowSpan={{ base: 1, md: 3 }}>
              <Card.Root
                size="lg"
                bgImage="linear-gradient(135deg, {colors.green.500} 0%, {colors.green.600} 100%)"
                color="white"
                height="full"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "2xl",
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                border="none"
              >
                <Card.Body p={8} position="relative" height="full">
                  <VStack align="start" gap={6} height="full">
                    <HStack gap={4}>
                      <Box p={4} bg="white" borderRadius="2xl" boxShadow="lg">
                        <DollarSign
                          size={32}
                          color="var(--acp-colors-green-600)"
                        />
                      </Box>
                      <Badge colorPalette="green" variant="subtle">
                        DESTAQUE
                      </Badge>
                    </HStack>

                    <VStack align="start" gap={4} flex={1}>
                      <Heading
                        fontSize={{ base: "2xl", md: "6xl", lg: "8xl" }}
                        fontWeight="black"
                        lineHeight="1"
                      >
                        Captação de Recursos
                      </Heading>

                      <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        lineHeight="1.6"
                        opacity="0.95"
                        fontWeight="medium"
                      >
                        Conectamos sua empresa a{" "}
                        <strong>mais de 50 instituições financeiras</strong> —
                        bancos, fintechs, fundos e agências de fomento.
                      </Text>

                      <Box
                        bg="white"
                        color="green.700"
                        p={4}
                        borderRadius="xl"
                        fontWeight="bold"
                        fontSize="lg"
                        boxShadow="md"
                      >
                        💰 De R$ 500 mil a R$ 10 milhões+ com as melhores taxas
                      </Box>
                    </VStack>

                    <Button
                      bg="white"
                      color="green.600"
                      size="lg"
                      _hover={{
                        bg: "green.50",
                        transform: "scale(1.02)",
                      }}
                      fontWeight="bold"
                      borderRadius="xl"
                      px={8}
                    >
                      <HStack gap={2}>
                        <Text>Solicitar Avaliação</Text>
                        <ArrowRight size={20} />
                      </HStack>
                    </Button>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Soluções em Tecnologia & IA - SEGUNDO DESTAQUE */}
            <GridItem colSpan={{ base: 1, md: 5 }} rowSpan={{ base: 1, md: 3 }}>
              <Card.Root
                size="lg"
                bg="linear-gradient(135deg, {colors.blue.500} 0%, {colors.blue.600} 100%)"
                color="white"
                height="full"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "2xl",
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                border="none"
              >
                <Card.Body p={6} position="relative" height="full">
                  <VStack align="start" gap={5} height="full">
                    <HStack gap={3}>
                      <Box p={3} bg="white" borderRadius="xl" boxShadow="lg">
                        <Bot size={24} color="var(--acp-colors-blue-600)" />
                      </Box>
                      <Badge colorPalette="green" variant="subtle">
                        INOVAÇÃO
                      </Badge>
                    </HStack>

                    <VStack align="start" gap={3} flex={1}>
                      <Heading
                        fontSize={{ base: "xl", md: "6xl" }}
                        fontWeight="black"
                        lineHeight="1.2"
                      >
                        Tecnologia & IA
                      </Heading>

                      <Text
                        fontSize={{ base: "md", md: "xl" }}
                        lineHeight="1.5"
                      >
                        Digitalize a gestão financeira com automações e
                        inteligência artificial para decisões baseadas em dados.
                      </Text>

                      <Box
                        bg="blue.400"
                        p={3}
                        borderRadius="lg"
                        fontSize="sm"
                        fontWeight="bold"
                      >
                        ⚡ Transformação digital financeira
                      </Box>
                    </VStack>

                    <Button
                      bg="white"
                      color="blue.600"
                      size="md"
                      _hover={{
                        bg: "blue.50",
                        transform: "scale(1.02)",
                      }}
                      fontWeight="bold"
                      borderRadius="lg"
                      fontSize="sm"
                    >
                      <HStack gap={2}>
                        <Text>Conhecer Soluções</Text>
                        <Rocket size={16} />
                      </HStack>
                    </Button>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Valuation e M&A */}
            <GridItem colSpan={{ base: 1, md: 4 }} rowSpan={{ base: 1, md: 2 }}>
              <Card.Root
                size="lg"
                bg="white"
                height="full"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                  borderColor: "purple.200",
                }}
                transition="all 0.3s ease"
                borderWidth="1px"
                borderColor="gray.100"
              >
                <Card.Body p={6}>
                  <VStack align="start" gap={4} height="full">
                    <Box p={3} bg="purple.100" borderRadius="xl">
                      <TrendingUp
                        size={24}
                        color="var(--acp-colors-purple-600)"
                      />
                    </Box>

                    <VStack align="start" gap={3} flex={1}>
                      <Heading fontSize="xl" fontWeight="bold">
                        Valuation & M&A
                      </Heading>

                      <Text color="fg.muted" fontSize="md" lineHeight="1.5">
                        Metodologias internacionais para venda, fusão ou entrada
                        de sócios estratégicos.
                      </Text>

                      <Badge
                        colorPalette="purple"
                        variant="subtle"
                        fontSize="xs"
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        📊 Avaliação profissional
                      </Badge>
                    </VStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Crédito para Construção */}
            <GridItem colSpan={{ base: 1, md: 4 }} rowSpan={{ base: 1, md: 2 }}>
              <Card.Root
                size="lg"
                bg="white"
                height="full"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                  borderColor: "orange.200",
                }}
                transition="all 0.3s ease"
                borderWidth="1px"
                borderColor="gray.100"
              >
                <Card.Body p={6}>
                  <VStack align="start" gap={4} height="full">
                    <Box p={3} bg="orange.100" borderRadius="xl">
                      <Building
                        size={24}
                        color="var(--acp-colors-orange-600)"
                      />
                    </Box>

                    <VStack align="start" gap={3} flex={1}>
                      <Heading fontSize="xl" fontWeight="bold">
                        Crédito Construção
                      </Heading>

                      <Text color="fg.muted" fontSize="md" lineHeight="1.5">
                        Viabilize obras e projetos de expansão com crédito
                        estruturado.
                      </Text>

                      <Badge
                        colorPalette="orange"
                        variant="subtle"
                        fontSize="xs"
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        🏗️ Financiamento especializado
                      </Badge>
                    </VStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Economia com Energia */}
            <GridItem colSpan={{ base: 1, md: 4 }} rowSpan={{ base: 1, md: 2 }}>
              <Card.Root
                size="lg"
                bg="white"
                height="full"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                  borderColor: "yellow.200",
                }}
                transition="all 0.3s ease"
                borderWidth="1px"
                borderColor="gray.100"
              >
                <Card.Body p={6}>
                  <VStack align="start" gap={4} height="full">
                    <Box p={3} bg="yellow.100" borderRadius="xl">
                      <Zap size={24} color="var(--acp-colors-yellow-600)" />
                    </Box>

                    <VStack align="start" gap={3} flex={1}>
                      <Heading fontSize="xl" fontWeight="bold">
                        Economia Energia
                      </Heading>

                      <Text color="fg.muted" fontSize="md" lineHeight="1.5">
                        Reduza até 35% na conta de luz com soluções
                        sustentáveis.
                      </Text>

                      <Badge
                        colorPalette="yellow"
                        variant="subtle"
                        fontSize="xs"
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        ⚡ Sustentabilidade rentável
                      </Badge>
                    </VStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Mini-Banco */}
            <GridItem colSpan={{ base: 1, md: 3 }} rowSpan={{ base: 1, md: 1 }}>
              <Card.Root
                size="lg"
                bg="white"
                height="full"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                  borderColor: "blue.200",
                }}
                transition="all 0.3s ease"
                borderWidth="1px"
                borderColor="gray.100"
              >
                <Card.Body p={5}>
                  <HStack gap={4}>
                    <Box p={2} bg="blue.100" borderRadius="lg">
                      <CreditCard
                        size={20}
                        color="var(--acp-colors-blue-600)"
                      />
                    </Box>
                    <VStack align="start" gap={1} flex={1}>
                      <Heading fontSize="lg" fontWeight="bold">
                        Mini-Banco
                      </Heading>
                      <Text color="fg.muted" fontSize="sm">
                        Ofereça crédito aos seus clientes
                      </Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Expansão Internacional */}
            <GridItem colSpan={{ base: 1, md: 3 }} rowSpan={{ base: 1, md: 1 }}>
              <Card.Root
                size="lg"
                bg="white"
                height="full"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                  borderColor: "teal.200",
                }}
                transition="all 0.3s ease"
                borderWidth="1px"
                borderColor="gray.100"
              >
                <Card.Body p={5}>
                  <HStack gap={4}>
                    <Box p={2} bg="teal.100" borderRadius="lg">
                      <Globe size={20} color="var(--acp-colors-teal-600)" />
                    </Box>
                    <VStack align="start" gap={1} flex={1}>
                      <Heading fontSize="lg" fontWeight="bold">
                        Expansão Global
                      </Heading>
                      <Text color="fg.muted" fontSize="sm">
                        Atuação internacional segura
                      </Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Seguros Empresariais */}
            <GridItem colSpan={{ base: 1, md: 3 }} rowSpan={{ base: 1, md: 1 }}>
              <Card.Root
                size="lg"
                bg="white"
                height="full"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                  borderColor: "red.200",
                }}
                transition="all 0.3s ease"
                borderWidth="1px"
                borderColor="gray.100"
              >
                <Card.Body p={5}>
                  <HStack gap={4}>
                    <Box p={2} bg="red.100" borderRadius="lg">
                      <Shield size={20} color="var(--acp-colors-red-600)" />
                    </Box>
                    <VStack align="start" gap={1} flex={1}>
                      <Heading fontSize="lg" fontWeight="bold">
                        Seguros
                      </Heading>
                      <Text color="fg.muted" fontSize="sm">
                        Proteção empresarial completa
                      </Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Mais Soluções */}
            <GridItem colSpan={{ base: 1, md: 3 }} rowSpan={{ base: 1, md: 1 }}>
              <Card.Root
                size="lg"
                bg="gray.100"
                height="full"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                  bg: "gray.200",
                }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                <Card.Body p={5}>
                  <HStack gap={4} justify="center">
                    <Box p={2} bg="gray.300" borderRadius="lg">
                      <Target size={20} color="var(--acp-colors-gray-600)" />
                    </Box>
                    <VStack align="start" gap={1}>
                      <Heading fontSize="lg" fontWeight="bold" color="gray.700">
                        +Soluções
                      </Heading>
                      <Text color="fg.muted" fontSize="sm">
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
