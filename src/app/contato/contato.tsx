"use client";
import {
  Box,
  Button,
  Container,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Icon,
  Field,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toaster } from "@/components/ui/toaster";
import { Mail, Building } from "lucide-react";

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  companyName: yup.string().optional(),
  position: yup.string().optional(),
  employees: yup
    .number()
    .typeError("Número de funcionários deve ser um número")
    .positive("Número de funcionários deve ser positivo")
    .integer("Número de funcionários deve ser um número inteiro")
    .optional(),
  linkedin: yup.string().url("URL do LinkedIn inválida").optional(),
  message: yup.string().required("Mensagem é obrigatória"),
});

export const ContatoPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toaster.create({
        title: "Mensagem enviada.",
        description: "Entraremos em contato em breve.",
        type: "success",
        duration: 5000,
      });
      reset();
    } catch (error) {
      toaster.create({
        title: "Erro ao enviar mensagem.",
        description: "Tente novamente mais tarde.",
        type: "error",
        duration: 5000,
      });
    }
  };

  const bgColor = "bg.panel";
  const borderColor = "border";
  const headingColor = "green.500";
  const iconColor = "green.300";

  return (
    <Container
      maxW="8xl"
      py={{ base: 10, md: 20 }}
      minH={{ base: "auto", md: "calc(80vh - 72px)" }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={10}
        align="center"
        minH={{ base: "auto", md: "calc(80vh - 72px)" }}
      >
        <Box flex="1">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color={headingColor}
            mb={4}
          >
            Entre em contato
          </Heading>
          <Text fontSize="lg" mb={8} color="fg.muted">
            Estamos prontos para ajudar sua empresa a descobrir o potencial de
            seus colaboradores através de nossa análise de personalidade.
          </Text>

          <VStack gap={6} align="start" mb={8}>
            <Flex align="center">
              <Icon as={Mail} boxSize={5} color={iconColor} mr={3} />
              <Text
                as="a"
                // @ts-ignore
                href="mailto:contato@acpersonalidade.com.br"
                color="green.400"
              >
                contato@acpersonalidade.com.br
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={Building} boxSize={5} color={iconColor} mr={3} />
              <Text>Curitiba, PR - Brasil</Text>
            </Flex>
          </VStack>

          <Box
            p={6}
            borderRadius="md"
            borderLeft="4px solid"
            borderColor={iconColor}
          >
            <Text fontStyle="italic" fontSize="md">
              "Nossa missão é transformar o ambiente de trabalho através do
              autoconhecimento e da compreensão das características
              individuais."
            </Text>
          </Box>
        </Box>

        <Box
          flex="1.2"
          bg="bg.panel"
          w={{ base: "full", md: "auto" }}
          p={{ base: 4, md: 4, lg: 6, xl: 8 }}
          borderRadius="xl"
          boxShadow="xl"
          borderWidth="1px"
        >
          <Heading as="h2" fontSize="2xl" mb={6} color={headingColor}>
            Preencha o formulário
          </Heading>

          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <VStack gap={2}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} width="full">
                <Field.Root invalid={!!errors.name}>
                  <Field.Label>
                    Nome
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    type="text"
                    {...register("name")}
                    //   leftElement={<Icon as={User} color={iconColor} boxSize={4} />}
                    placeholder="Seu nome completo"
                  />
                  <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.email}>
                  <Field.Label>
                    Email
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    type="email"
                    {...register("email")}
                    //   leftElement={<Icon as={Mail} color={iconColor} boxSize={4} />}
                    placeholder="seu.email@exemplo.com"
                  />
                  <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                </Field.Root>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} width="full">
                <Field.Root invalid={!!errors.phone}>
                  <Field.Label>
                    Telefone
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    type="text"
                    {...register("phone")}
                    //   leftElement={<Icon as={Phone} color={iconColor} boxSize={4} />}
                    placeholder="(00) 00000-0000"
                  />
                  <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.companyName}>
                  <Field.Label>
                    Nome da Empresa
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    type="text"
                    {...register("companyName")}
                    //   leftElement={<Icon as={Building} color={iconColor} boxSize={4} />}
                    placeholder="Nome da sua empresa"
                  />
                  <Field.ErrorText>
                    {errors.companyName?.message}
                  </Field.ErrorText>
                </Field.Root>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} width="full">
                <Field.Root invalid={!!errors.position}>
                  <Field.Label>
                    Cargo
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    type="text"
                    {...register("position")}
                    //   leftElement={<Icon as={User} color={iconColor} boxSize={4} />}
                    placeholder="Seu cargo na empresa"
                  />
                  <Field.ErrorText>{errors.position?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.employees}>
                  <Field.Label>
                    Número de Funcionários
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    type="number"
                    min="1"
                    {...register("employees", { valueAsNumber: true })}
                    //   leftElement={<Icon as={Users} color={iconColor} boxSize={4} />}
                    placeholder="Ex: 50"
                  />
                  <Field.ErrorText>{errors.employees?.message}</Field.ErrorText>
                </Field.Root>
              </SimpleGrid>

              <Field.Root invalid={!!errors.linkedin} width="full">
                <Field.Label>
                  LinkedIn
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  type="url"
                  {...register("linkedin")}
                  // leftElement={<Icon as={Linkedin} color={iconColor} boxSize={4} />}
                  placeholder="https://linkedin.com/in/seu-perfil"
                />
                <Field.ErrorText>{errors.linkedin?.message}</Field.ErrorText>
              </Field.Root>

              <Field.Root invalid={!!errors.message} width="full">
                <Field.Label>
                  Mensagem
                  <Field.RequiredIndicator />
                </Field.Label>
                <Textarea
                  {...register("message")}
                  placeholder="Descreva como podemos ajudar sua empresa"
                  minHeight="120px"
                />
                <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
              </Field.Root>

              <Button
                type="submit"
                colorPalette="green"
                size="lg"
                width="full"
                loading={isSubmitting}
                mt={4}
                _hover={{ transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                Enviar mensagem
              </Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
