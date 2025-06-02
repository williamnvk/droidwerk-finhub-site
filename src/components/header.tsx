"use client";
import {
  Button,
  Flex,
  Heading,
  Text,
  Container,
  HStack,
  Box,
  IconButton,
  useDisclosure,
  VStack,
  Drawer,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowRightIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Header = () => {
  const { open: isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Soluções", href: "/#solucoes" },
    { name: "Por que nós", href: "/#por-que-nos" },
    { name: "Quem somos", href: "/#quem-somos" },
    { name: "Contato", href: "/contato" },
  ];

  const shadowValue = scrolled ? "sm" : "none";

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      bg="transparent"
      zIndex={1000}
      boxShadow={shadowValue}
      transition="all 0.3s ease"
    >
      <Container maxW="6xl" as="nav">
        <Flex justify="space-between" align="center" py={4} gap={8}>
          <NextLink href="/" passHref legacyBehavior>
            <Flex as="a" align="center" gap={2} cursor="pointer">
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="green.500"
              >
                Fin
                <Heading
                  as="span"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                >
                  hub
                </Heading>
              </Heading>
              <Text
                as="span"
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="medium"
                display={{ base: "none", md: "inline-block" }}
              >
                Assessoria Financeira
              </Text>
            </Flex>
          </NextLink>

          {/* Desktop Navigation */}
          <HStack
            display={{ base: "none", md: "flex" }}
            gap={8}
            flex={1}
            justify="end"
          >
            {navLinks.map((link) => (
              <NextLink
                key={link.name}
                href={link.href}
                passHref
                legacyBehavior
              >
                <Text
                  as="a"
                  fontSize="md"
                  fontWeight="medium"
                  _hover={{ color: "green.500" }}
                  transition="color 0.2s ease"
                >
                  {link.name}
                </Text>
              </NextLink>
            ))}
          </HStack>

          <HStack gap={4}>
            <NextLink
              href="https://api.whatsapp.com/send/?phone=%2B5511942989475&text=Ol%C3%A1.+Gostaria+de+falar+com+um+especialista+da+Financial+Hub+Assessoria+&type=phone_number&app_absent=0"
              passHref
              target="_blank"
              legacyBehavior
            >
              <Button
                as="a"
                colorPalette="green"
                variant="solid"
                size={{ base: "sm", md: "md" }}
                fontWeight="medium"
                _hover={{ transform: "translateY(-2px)" }}
                transition="all 0.2s ease"
                display={{ base: "none", md: "flex" }}
              >
                Fale conosco
                <ArrowRightIcon size={16} />
              </Button>
            </NextLink>

            <IconButton
              aria-label="Abrir menu"
              variant="ghost"
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
            >
              <Menu />
            </IconButton>
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer.Root open={isOpen} onOpenChange={onClose}>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <NextLink href="/" passHref legacyBehavior>
                <Flex as="a" align="center" gap={2} cursor="pointer">
                  <Box
                    width="32px"
                    height="32px"
                    bg="green.500"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    FH
                  </Box>
                  <Heading
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    color="green.500"
                  >
                    Financial Hub
                  </Heading>
                </Flex>
              </NextLink>
            </Drawer.Header>
            <Drawer.Body>
              <VStack align="start" pt={8} gap={6}>
                {navLinks.map((link) => (
                  <NextLink
                    key={link.name}
                    href={link.href}
                    passHref
                    legacyBehavior
                  >
                    <Text
                      as="a"
                      fontSize="lg"
                      fontWeight="medium"
                      onClick={onClose}
                      _hover={{ color: "green.500" }}
                    >
                      {link.name}
                    </Text>
                  </NextLink>
                ))}
                <NextLink
                  href="https://api.whatsapp.com/send/?phone=%2B5511942989475&text=Ol%C3%A1.+Gostaria+de+falar+com+um+especialista+da+Financial+Hub+Assessoria+&type=phone_number&app_absent=0"
                  passHref
                  target="_blank"
                  legacyBehavior
                >
                  <Button
                    as="a"
                    colorPalette="green"
                    variant="solid"
                    size={{ base: "sm", md: "md" }}
                    fontWeight="medium"
                    transition="all 0.2s ease"
                    w="full"
                    mt={4}
                  >
                    Fale conosco
                    <ArrowRightIcon size={16} />
                  </Button>
                </NextLink>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  );
};
