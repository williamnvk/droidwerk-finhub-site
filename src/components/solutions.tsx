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
  Bot,
  ArrowRight,
  Target,
  Rocket,
  TrendingDown,
  Lightbulb,
  Star,
  Sparkles,
  Banknote,
  Brain,
} from "lucide-react";

export const SolutionsSection = () => {
  return (
    <Box
      py={{ base: 20, md: 32 }}
      as="section"
      id="solucoes"
      position="relative"
      overflow="hidden"
    >
      {/* Enhanced Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="radial(circle at 20% 30%, green.100 0%, transparent 60%), radial(circle at 80% 70%, green.100 0%, transparent 60%), radial(circle at 60% 20%, green.50 0%, transparent 50%)"
        opacity="0.6"
        pointerEvents="none"
      />

      {/* Floating Elements */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        w="60px"
        h="60px"
        bg="green.200"
        borderRadius="full"
        opacity="0.1"
        animation="float 6s ease-in-out infinite"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="60%"
        right="8%"
        w="40px"
        h="40px"
        bg="green.300"
        borderRadius="full"
        opacity="0.15"
        animation="float 4s ease-in-out infinite reverse"
        pointerEvents="none"
      />

      <Container maxW="8xl" position="relative">
        <VStack gap={20}>
          {/* Enhanced Header */}
          <VStack gap={8} textAlign="center" maxW="5xl">
            <Badge
              colorPalette="green"
              fontSize="md"
              px={8}
              py={4}
              borderRadius="full"
              fontWeight="bold"
              bg="green.100"
              color="green.800"
              border="2px solid"
              borderColor="green.200"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "lg",
              }}
              transition="all 0.3s ease"
            >
              <HStack gap={2}>
                <Lightbulb size={20} />
                <Text>Nossas Soluções</Text>
              </HStack>
            </Badge>

            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="black"
              lineHeight="1.1"
              letterSpacing="-0.02em"
              textAlign="center"
            >
              O que sua empresa{" "}
              <Text
                as="span"
                bgImage="linear-gradient(45deg, {colors.green.500}, {colors.green.400}, {colors.green.500})"
                bgClip="text"
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "-4px",
                  left: "0",
                  right: "0",
                  height: "4px",
                  bgImage:
                    "linear-gradient(to-r, {colors.green.400}, {colors.green.400})",
                  borderRadius: "full",
                }}
              >
                precisa está aqui
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "xl", md: "xl" }}
              color="fg.muted"
              maxW="3xl"
              lineHeight="1.7"
            >
              Transformamos desafios empresariais em oportunidades de
              crescimento com soluções financeiras completas e inteligentes.
            </Text>
          </VStack>

          {/* Enhanced Bento Grid */}
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(12, 1fr)",
            }}
            templateRows={{
              base: "auto",
              md: "repeat(6, minmax(220px, auto))",
            }}
            gap={8}
            w="full"
          >
            {/* ENHANCED Captação de Recursos - HERO CARD */}
            <GridItem colSpan={{ base: 1, md: 7 }} rowSpan={{ base: 1, md: 3 }}>
              <Card.Root
                size="lg"
                height="full"
                position="relative"
                overflow="hidden"
                bg="bg.panel"
                border="none"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.4)",
                }}
                transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                boxShadow="0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              >
                {/* Animated Background */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bgImage="linear-gradient(135deg, {colors.green.500} 0%, {colors.green.600} 50%, {colors.emerald.600} 100%)"
                  opacity="1"
                />

                <Card.Body p={12} position="relative" height="full">
                  <VStack align="start" gap={8} height="full">
                    {/* Header with Enhanced Badge */}
                    <HStack gap={6} wrap="wrap">
                      <Box
                        p={5}
                        bg="bg.panel"
                        borderRadius="full"
                        boxShadow="xl"
                        _hover={{
                          transform: "scale(1.1) rotate(5deg)",
                        }}
                        transition="all 0.3s ease"
                      >
                        <DollarSign
                          size={48}
                          color="var(--acp-colors-green-600)"
                        />
                      </Box>
                      <HStack gap={2} align="start">
                        <Badge colorPalette="green" variant="solid">
                          <HStack gap={1}>
                            <Star size={14} fill="currentColor" />
                            <Text>DESTAQUE</Text>
                          </HStack>
                        </Badge>
                        <Badge>💰 +50 instituições parceiras</Badge>
                      </HStack>
                    </HStack>

                    <VStack align="start" gap={6} flex={1}>
                      <Heading
                        fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                        fontWeight="black"
                        lineHeight="0.9"
                        letterSpacing="-0.02em"
                      >
                        Captação de
                        <br />
                        <Text
                          textShadow="0 0 20px rgba(255,255,255,0.5)"
                          position="relative"
                        >
                          Recursos
                          <Sparkles
                            size={32}
                            style={{
                              position: "absolute",
                              top: "-10px",
                              right: "-40px",
                              animation: "pulse 2s ease-in-out infinite",
                            }}
                          />
                        </Text>
                      </Heading>

                      <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        lineHeight="1.6"
                        opacity="0.95"
                        fontWeight="medium"
                        maxW="500px"
                      >
                        Conectamos sua empresa a{" "}
                        <Text
                          as="strong"
                          textDecoration="underline"
                          textDecorationColor="blackAlpha.600"
                        >
                          mais de 50 instituições financeiras
                        </Text>{" "}
                        — bancos, fintechs, fundos e agências de fomento.
                      </Text>

                      {/* Enhanced Value Proposition */}
                      <Box
                        bg="blackAlpha.200"
                        backdropFilter="blur(10px)"
                        border="1px solid"
                        borderColor="blackAlpha.300"
                        color="bg.panel"
                        p={6}
                        borderRadius="2xl"
                        fontWeight="bold"
                        fontSize={{ base: "lg", md: "xl" }}
                        boxShadow="xl"
                        position="relative"
                        _hover={{
                          bg: "blackAlpha.300",
                          transform: "scale(1.02)",
                        }}
                        transition="all 0.3s ease"
                      >
                        <HStack gap={3}>
                          <Banknote size={24} />
                          <Text>
                            De R$ 500 mil a R$ 10 milhões+ com as melhores taxas
                          </Text>
                        </HStack>
                      </Box>
                    </VStack>

                    <Button
                      bg="bg.panel"
                      color="green.600"
                      size="xl"
                      _hover={{
                        bg: "green.50",
                        transform: "scale(1.05)",
                        boxShadow: "xl",
                      }}
                      fontWeight="bold"
                      borderRadius="xl"
                      px={10}
                      py={6}
                      fontSize="lg"
                      transition="all 0.3s ease"
                      boxShadow="lg"
                    >
                      <HStack gap={3}>
                        <Text>Solicitar Avaliação</Text>
                        <ArrowRight size={20} />
                      </HStack>
                    </Button>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* ENHANCED Tecnologia & IA - SECOND HERO CARD */}
            <GridItem colSpan={{ base: 1, md: 5 }} rowSpan={{ base: 1, md: 3 }}>
              <Card.Root
                size="lg"
                height="full"
                position="relative"
                overflow="hidden"
                bg="bg.panel"
                border="none"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
                }}
                transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                boxShadow="0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              >
                {/* Animated Tech Background */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bgGradient="linear(135deg, green.500 0%, green.600 30%, green.600 100%)"
                />

                {/* Tech Pattern Overlay */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  opacity="0.1"
                  bgImage="radial-gradient(circle at 25% 25%, bg.panel 2px, transparent 2px), radial-gradient(circle at 75% 75%, bg.panel 2px, transparent 2px)"
                  bgSize="30px 30px"
                  animation="float 8s ease-in-out infinite"
                />

                {/* Floating Tech Elements */}
                <Box
                  position="absolute"
                  top="30px"
                  right="20px"
                  w="80px"
                  h="80px"
                  bg="blackAlpha.200"
                  borderRadius="2xl"
                  animation="pulse 3s ease-in-out infinite"
                />

                <Card.Body
                  p={8}
                  position="relative"
                  height="full"
                  color="bg.panel"
                >
                  <VStack align="start" gap={6} height="full">
                    <HStack gap={4} wrap="wrap">
                      <Box
                        p={4}
                        bg="bg.panel"
                        borderRadius="xl"
                        boxShadow="xl"
                        _hover={{
                          transform: "scale(1.1) rotate(-5deg)",
                        }}
                        transition="all 0.3s ease"
                      >
                        <Brain size={28} color="var(--acp-colors-green-600)" />
                      </Box>
                      <VStack gap={2} align="start">
                        <Badge
                          bg="bg.panel"
                          color="green.700"
                          fontSize="sm"
                          px={4}
                          py={2}
                          borderRadius="full"
                          fontWeight="bold"
                        >
                          <HStack gap={1}>
                            <Sparkles size={14} fill="currentColor" />
                            <Text>INOVAÇÃO</Text>
                          </HStack>
                        </Badge>
                        <Badge
                          bg="blackAlpha.300"
                          color="bg.panel"
                          fontSize="xs"
                          px={3}
                          py={1}
                          borderRadius="full"
                        >
                          🤖 IA + Automação
                        </Badge>
                      </VStack>
                    </HStack>

                    <VStack align="start" gap={5} flex={1}>
                      <Heading
                        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                        fontWeight="black"
                        lineHeight="1.1"
                        letterSpacing="-0.02em"
                      >
                        Tecnologia
                        <br />
                        <Text
                          bgGradient="linear(to-r, bg.panel, green.200)"
                          bgClip="text"
                          textShadow="0 0 20px rgba(255,255,255,0.3)"
                        >
                          & IA
                        </Text>
                      </Heading>

                      <Text
                        fontSize={{ base: "md", md: "lg" }}
                        lineHeight="1.6"
                        opacity="0.95"
                      >
                        Digitalize a gestão financeira com{" "}
                        <Text
                          as="strong"
                          textDecoration="underline"
                          textDecorationColor="blackAlpha.500"
                        >
                          automações e inteligência artificial
                        </Text>{" "}
                        para decisões baseadas em dados.
                      </Text>

                      <Flex gap={3} wrap="wrap">
                        <Box
                          bg="blackAlpha.200"
                          backdropFilter="blur(10px)"
                          border="1px solid"
                          borderColor="blackAlpha.300"
                          p={4}
                          borderRadius="xl"
                          fontSize="sm"
                          fontWeight="bold"
                          _hover={{
                            bg: "blackAlpha.300",
                            transform: "scale(1.05)",
                          }}
                          transition="all 0.3s ease"
                        >
                          ⚡ Automação Financeira
                        </Box>
                        <Box
                          bg="blackAlpha.200"
                          backdropFilter="blur(10px)"
                          border="1px solid"
                          borderColor="blackAlpha.300"
                          p={4}
                          borderRadius="xl"
                          fontSize="sm"
                          fontWeight="bold"
                          _hover={{
                            bg: "blackAlpha.300",
                            transform: "scale(1.05)",
                          }}
                          transition="all 0.3s ease"
                        >
                          📊 Dashboard Inteligente
                        </Box>
                      </Flex>
                    </VStack>

                    <Button
                      bg="bg.panel"
                      color="green.600"
                      size="lg"
                      _hover={{
                        bg: "green.50",
                        transform: "scale(1.05)",
                        boxShadow: "xl",
                      }}
                      fontWeight="bold"
                      borderRadius="xl"
                      px={8}
                      py={5}
                      transition="all 0.3s ease"
                      boxShadow="lg"
                    >
                      <HStack gap={2}>
                        <Text>Conhecer Soluções</Text>
                        <Rocket size={18} />
                      </HStack>
                    </Button>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Enhanced Secondary Cards */}
            <GridItem colSpan={{ base: 1, md: 4 }} rowSpan={{ base: 1, md: 2 }}>
              <Card.Root
                size="lg"
                bg="bg.panel"
                height="full"
                border="1px solid"
                borderColor="green.100"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.15)",
                  borderColor: "green.200",
                  bg: "green.25",
                }}
                transition="all 0.4s ease"
                boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              >
                <Card.Body p={8}>
                  <VStack align="start" gap={6} height="full">
                    <Box
                      p={4}
                      bg="green.100"
                      borderRadius="xl"
                      _hover={{
                        bg: "green.200",
                        transform: "scale(1.1)",
                      }}
                      transition="all 0.3s ease"
                    >
                      <TrendingUp
                        size={28}
                        color="var(--acp-colors-green-600)"
                      />
                    </Box>

                    <VStack align="start" gap={4} flex={1}>
                      <Heading
                        fontSize="2xl"
                        fontWeight="bold"
                      >
                        Valuation & M&A
                      </Heading>

                      <Text color="fg.muted" fontSize="md" lineHeight="1.6">
                        Descubra o valor real da sua empresa com{" "}
                        <Text as="strong" color="green.600">
                          metodologias internacionais
                        </Text>
                        . Ideal para venda, fusão ou entrada de sócios
                        estratégicos.
                      </Text>

                      <Badge
                        colorPalette="green"
                        variant="subtle"
                        fontSize="sm"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontWeight="bold"
                      >
                        📊 Avaliação profissional
                      </Badge>
                    </VStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Enhanced Crédito para Construção */}
            <GridItem colSpan={{ base: 1, md: 4 }} rowSpan={{ base: 1, md: 2 }}>
              <Card.Root
                size="lg"
                bg="bg.panel"
                height="full"
                border="1px solid"
                borderColor="orange.100"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 25px -5px rgba(251, 146, 60, 0.15)",
                  borderColor: "orange.200",
                  bg: "orange.25",
                }}
                transition="all 0.4s ease"
                boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              >
                <Card.Body p={8}>
                  <VStack align="start" gap={6} height="full">
                    <Box
                      p={4}
                      bg="orange.100"
                      borderRadius="xl"
                      _hover={{
                        bg: "orange.200",
                        transform: "scale(1.1)",
                      }}
                      transition="all 0.3s ease"
                    >
                      <Building
                        size={28}
                        color="var(--acp-colors-orange-600)"
                      />
                    </Box>

                    <VStack align="start" gap={4} flex={1}>
                      <Heading
                        fontSize="2xl"
                        fontWeight="bold"
                       
                      >
                        Crédito Construção
                      </Heading>

                      <Text color="fg.muted" fontSize="md" lineHeight="1.6">
                        Viabilize obras, loteamentos e projetos de expansão com{" "}
                        <Text as="strong" color="orange.600">
                          crédito estruturado
                        </Text>{" "}
                        e apoio técnico especializado.
                      </Text>

                      <Badge
                        colorPalette="orange"
                        variant="subtle"
                        fontSize="sm"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontWeight="bold"
                      >
                        🏗️ Financiamento especializado
                      </Badge>
                    </VStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Enhanced Economia com Energia */}
            <GridItem colSpan={{ base: 1, md: 4 }} rowSpan={{ base: 1, md: 2 }}>
              <Card.Root
                size="lg"
                bg="bg.panel"
                height="full"
                border="1px solid"
                borderColor="yellow.100"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 25px -5px rgba(250, 204, 21, 0.15)",
                  borderColor: "yellow.200",
                  bg: "yellow.25",
                }}
                transition="all 0.4s ease"
                boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              >
                <Card.Body p={8}>
                  <VStack align="start" gap={6} height="full">
                    <Box
                      p={4}
                      bg="yellow.100"
                      borderRadius="xl"
                      _hover={{
                        bg: "yellow.200",
                        transform: "scale(1.1)",
                      }}
                      transition="all 0.3s ease"
                    >
                      <Zap size={28} color="var(--acp-colors-yellow-600)" />
                    </Box>

                    <VStack align="start" gap={4} flex={1}>
                      <Heading
                        fontSize="2xl"
                        fontWeight="bold"
                       
                      >
                        Economia Energia
                      </Heading>

                      <Text color="fg.muted" fontSize="md" lineHeight="1.6">
                        Implante soluções energéticas sustentáveis e{" "}
                        <Text as="strong" color="yellow.600">
                          reduza até 35% na conta de luz
                        </Text>{" "}
                        da sua empresa.
                      </Text>

                      <Badge
                        colorPalette="yellow"
                        variant="subtle"
                        fontSize="sm"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontWeight="bold"
                      >
                        ⚡ Sustentabilidade rentável
                      </Badge>
                    </VStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Enhanced Mini-Banco */}
            <GridItem colSpan={{ base: 1, md: 3 }} rowSpan={{ base: 1, md: 1 }}>
              <Card.Root
                size="lg"
                bg="bg.panel"
                height="full"
                border="1px solid"
                borderColor="green.100"
                _hover={{
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px -5px rgba(59, 130, 246, 0.2)",
                  borderColor: "green.200",
                  bg: "green.25",
                }}
                transition="all 0.3s ease"
                boxShadow="0 2px 4px -1px rgba(0, 0, 0, 0.1)"
              >
                <Card.Body p={6}>
                  <HStack gap={4}>
                    <Box
                      p={3}
                      bg="green.100"
                      borderRadius="lg"
                      _hover={{
                        bg: "green.200",
                        transform: "scale(1.1)",
                      }}
                      transition="all 0.3s ease"
                    >
                      <CreditCard
                        size={22}
                        color="var(--acp-colors-green-600)"
                      />
                    </Box>
                    <VStack align="start" gap={1} flex={1}>
                      <Heading fontSize="lg" fontWeight="bold">
                        Mini-Banco
                      </Heading>
                      <Text color="fg.muted" fontSize="sm" lineHeight="1.4">
                        Ofereça crédito aos seus clientes
                      </Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Enhanced Expansão Internacional */}
            <GridItem colSpan={{ base: 1, md: 3 }} rowSpan={{ base: 1, md: 1 }}>
              <Card.Root
                size="lg"
                bg="bg.panel"
                height="full"
                border="1px solid"
                borderColor="green.100"
                _hover={{
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px -5px rgba(20, 184, 166, 0.2)",
                  borderColor: "green.200",
                  bg: "green.25",
                }}
                transition="all 0.3s ease"
                boxShadow="0 2px 4px -1px rgba(0, 0, 0, 0.1)"
              >
                <Card.Body p={6}>
                  <HStack gap={4}>
                    <Box
                      p={3}
                      bg="green.100"
                      borderRadius="lg"
                      _hover={{
                        bg: "green.200",
                        transform: "scale(1.1)",
                      }}
                      transition="all 0.3s ease"
                    >
                      <Globe size={22} color="var(--acp-colors-green-600)" />
                    </Box>
                    <VStack align="start" gap={1} flex={1}>
                      <Heading fontSize="lg" fontWeight="bold">
                        Expansão Global
                      </Heading>
                      <Text color="fg.muted" fontSize="sm" lineHeight="1.4">
                        Atuação internacional segura
                      </Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Enhanced Seguros Empresariais */}
            <GridItem colSpan={{ base: 1, md: 3 }} rowSpan={{ base: 1, md: 1 }}>
              <Card.Root
                size="lg"
                bg="bg.panel"
                height="full"
                border="1px solid"
                borderColor="red.100"
                _hover={{
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px -5px rgba(239, 68, 68, 0.2)",
                  borderColor: "red.200",
                  bg: "red.25",
                }}
                transition="all 0.3s ease"
                boxShadow="0 2px 4px -1px rgba(0, 0, 0, 0.1)"
              >
                <Card.Body p={6}>
                  <HStack gap={4}>
                    <Box
                      p={3}
                      bg="red.100"
                      borderRadius="lg"
                      _hover={{
                        bg: "red.200",
                        transform: "scale(1.1)",
                      }}
                      transition="all 0.3s ease"
                    >
                      <Shield size={22} color="var(--acp-colors-red-600)" />
                    </Box>
                    <VStack align="start" gap={1} flex={1}>
                      <Heading fontSize="lg" fontWeight="bold">
                        Seguros
                      </Heading>
                      <Text color="fg.muted" fontSize="sm" lineHeight="1.4">
                        Proteção empresarial completa
                      </Text>
                    </VStack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </GridItem>

            {/* Enhanced Mais Soluções */}
            <GridItem colSpan={{ base: 1, md: 3 }} rowSpan={{ base: 1, md: 1 }}>
              <Card.Root
                size="lg"
                bg="gray.50"
                height="full"
                border="1px solid"
                borderColor="gray.200"
                _hover={{
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px -5px rgba(107, 114, 128, 0.2)",
                  bg: "gray.100",
                  borderColor: "gray.300",
                }}
                transition="all 0.3s ease"
                cursor="pointer"
                boxShadow="0 2px 4px -1px rgba(0, 0, 0, 0.1)"
              >
                <Card.Body p={6}>
                  <HStack gap={4} justify="center">
                    <Box
                      p={3}
                      bg="gray.200"
                      borderRadius="lg"
                      _hover={{
                        bg: "gray.300",
                        transform: "scale(1.1)",
                      }}
                      transition="all 0.3s ease"
                    >
                      <Target size={22} color="var(--acp-colors-gray-600)" />
                    </Box>
                    <VStack align="start" gap={1}>
                      <Heading fontSize="lg" fontWeight="bold" color="gray.700">
                        +Soluções
                      </Heading>
                      <Text color="fg.muted" fontSize="sm" lineHeight="1.4">
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
