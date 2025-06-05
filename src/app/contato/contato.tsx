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
  Link,
  NativeSelect,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toaster } from "@/components/ui/toaster";
import { Mail, Phone, MapPin } from "lucide-react";

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  companyName: yup.string().required("Nome da empresa é obrigatório"),
  position: yup.string().required("Cargo é obrigatório"),
  employees: yup
    .number()
    .typeError("Número de funcionários deve ser um número")
    .positive("Número de funcionários deve ser positivo")
    .integer("Número de funcionários deve ser um número inteiro")
    .required("Número de funcionários é obrigatório"),
  serviceInterest: yup.string().required("Serviço de interesse é obrigatório"),
  message: yup.string().required("Mensagem é obrigatória"),
});

interface FormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  position: string;
  employees: number;
  serviceInterest: string;
  message: string;
}

export const ContatoPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
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

  const headingColor = "green.500";
  const iconColor = "green.300";

  return (
    <Container
      maxW="6xl"
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
            Fale com nossos especialistas
          </Heading>
          <Text fontSize="lg" mb={8} color="fg.muted">
            Conectamos sua empresa às melhores soluções financeiras do mercado. 
            Preencha o formulário e receba uma análise gratuita das oportunidades 
            para o seu negócio.
          </Text>

          <VStack gap={6} align="start" mb={8}>
            <Flex align="center">
              <Icon as={Mail} boxSize={5} color={iconColor} mr={3} />
              <Link
                href="mailto:contato@finhubassessoria.com.br"
                color="green.400"
                _hover={{ textDecoration: "underline" }}
              >
                contato@finhubassessoria.com.br
              </Link>
            </Flex>
            <Flex align="center">
              <Icon as={Phone} boxSize={5} color={iconColor} mr={3} />
              <Link
                href="tel:+5511942989475"
                color="green.400"
                _hover={{ textDecoration: "underline" }}
              >
                (11) 9429-89475
              </Link>
            </Flex>
            <Flex align="center">
              <Icon as={MapPin} boxSize={5} color={iconColor} mr={3} />
              <Text>São Paulo, SP - Brasil</Text>
            </Flex>
          </VStack>

          <Box
            p={6}
            borderRadius="md"
            borderLeft="4px solid"
            borderColor={iconColor}
            bg="bg.subtle"
          >
            <Text fontStyle="italic" fontSize="md">
              "Conectamos empresas a soluções financeiras completas, com foco em 
              performance, expansão e sustentabilidade."
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
            Solicite uma avaliação gratuita
          </Heading>

          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <VStack gap={4}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} width="full">
                <Field.Root invalid={!!errors.name}>
                  <Field.Label>
                    Nome completo
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    type="text"
                    {...register("name")}
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
                    placeholder="seu.email@exemplo.com"
                  />
                  <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                </Field.Root>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} width="full">
                <Field.Root invalid={!!errors.phone}>
                  <Field.Label>
                    Telefone
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    type="text"
                    {...register("phone")}
                    placeholder="(11) 99999-9999"
                  />
                  <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.companyName}>
                  <Field.Label>
                    Nome da empresa
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    type="text"
                    {...register("companyName")}
                    placeholder="Nome da sua empresa"
                  />
                  <Field.ErrorText>
                    {errors.companyName?.message}
                  </Field.ErrorText>
                </Field.Root>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} width="full">
                <Field.Root invalid={!!errors.position}>
                  <Field.Label>
                    Cargo
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    type="text"
                    {...register("position")}
                    placeholder="Seu cargo na empresa"
                  />
                  <Field.ErrorText>{errors.position?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.employees}>
                  <Field.Label>
                    Número de funcionários
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    type="number"
                    min="1"
                    {...register("employees", { valueAsNumber: true })}
                    placeholder="Ex: 50"
                  />
                  <Field.ErrorText>{errors.employees?.message}</Field.ErrorText>
                </Field.Root>
              </SimpleGrid>

              <Field.Root invalid={!!errors.serviceInterest} width="full">
                <Field.Label>
                  Serviço de interesse
                  <Field.RequiredIndicator />
                </Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field placeholder="Selecione um serviço" {...register("serviceInterest")}>
                    <option value="">Selecione um serviço</option>
                    <option value="captacao-recursos">Captação de recursos</option>
                    <option value="credito-construcao">Crédito para construção</option>
                    <option value="economia-energia">Economia com energia</option>
                    <option value="valuation-ma">Valuation e M&A</option>
                    <option value="mini-banco">Criação de mini-banco</option>
                    <option value="expansao-internacional">Expansão internacional</option>
                    <option value="seguros">Seguros empresariais</option>
                    <option value="tecnologia-ia">Tecnologia e IA</option>
                    <option value="outros">Outros</option>
                  </NativeSelect.Field>
                </NativeSelect.Root>
                <Field.ErrorText>{errors.serviceInterest?.message}</Field.ErrorText>
              </Field.Root>

              <Field.Root invalid={!!errors.message} width="full">
                <Field.Label>
                  Mensagem
                  <Field.RequiredIndicator />
                </Field.Label>
                <Textarea
                  {...register("message")}
                  placeholder="Descreva brevemente sua necessidade ou interesse"
                  minHeight="120px"
                  resize="vertical"
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
                {isSubmitting ? "Enviando..." : "Solicitar avaliação gratuita"}
              </Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
