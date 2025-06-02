import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Separator,
  Link,
  List,
} from "@chakra-ui/react";
import { Header } from "../../components/header";
import Head from "next/head";
import { Footer } from "../../components/footer";

export default function TermosDeUso() {
  return (
    <Box>
      <Head>
        <title>Termos de Uso - Financial Hub Assessoria</title>
        <meta
          name="description"
          content="Termos de Uso da Financial Hub Assessoria - Conectamos empresas às melhores soluções financeiras do mercado com estratégia e agilidade."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <Container maxW="6xl" py={10}>
        <VStack gap={8} align="flex-start">
          <Heading
            as="h1"
            size="2xl"
            color="green.600"
            _dark={{ color: "green.300" }}
          >
            Termos de Uso
          </Heading>

          <Text fontSize="lg">
            Bem-vindo aos Termos de Uso da Financial Hub Assessoria. Este
            documento estabelece as regras e condições para utilização de nossa
            plataforma e serviços de assessoria financeira empresarial. Ao
            acessar ou utilizar nossos serviços, você concorda com estes termos
            em sua totalidade.
          </Text>

          <Separator />

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Aceitação dos Termos
          </Heading>
          <Text>
            Ao utilizar os serviços da Financial Hub Assessoria, você confirma
            que leu, entendeu e concorda com estes Termos de Uso. Se você não
            concordar com qualquer parte destes termos, solicitamos que não
            utilize nossos serviços.
          </Text>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Descrição do Serviço
          </Heading>
          <Text>
            A Financial Hub Assessoria é uma empresa especializada em conectar
            empresas às melhores soluções financeiras do mercado. Atuamos como
            intermediários estratégicos, oferecendo assessoria especializada em
            diversas áreas financeiras para acelerar o crescimento empresarial.
          </Text>
          <List.Root pl={6} gap={2}>
            <List.Item>
              Captação de recursos junto a mais de 50 instituições financeiras
            </List.Item>
            <List.Item>Financiamento para construção e obras</List.Item>
            <List.Item>Projetos de economia de energia</List.Item>
            <List.Item>Valuation empresarial e assessoria em M&A</List.Item>
            <List.Item>Criação de mini-bancos para empresas</List.Item>
            <List.Item>Apoio à expansão internacional</List.Item>
            <List.Item>Seguros empresariais personalizados</List.Item>
            <List.Item>
              Soluções em tecnologia e IA para gestão financeira
            </List.Item>
          </List.Root>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Nossa Atuação
          </Heading>
          <Text>
            A Financial Hub atua exclusivamente como intermediadora estratégica
            entre clientes (pessoas físicas ou jurídicas) e instituições
            devidamente habilitadas pelo Banco Central do Brasil (BACEN),
            Comissão de Valores Mobiliários (CVM), SUSEP e demais órgãos
            reguladores competentes.
          </Text>
          <Text
            fontWeight="semibold"
            color="orange.600"
            _dark={{ color: "orange.300" }}
          >
            Não realizamos captação, intermediação financeira direta, gestão de
            recursos de terceiros ou qualquer atividade privativa de
            instituições financeiras, conforme definido pela legislação vigente.
          </Text>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Cadastro e Contas
          </Heading>
          <Text>
            Para utilizar completamente nossos serviços, você precisará fornecer
            informações básicas para contato. Ao fazê-lo, você concorda em:
          </Text>
          <List.Root pl={6} gap={2}>
            <List.Item>
              Fornecer informações precisas e completas sobre sua empresa
            </List.Item>
            <List.Item>Manter dados de contato atualizados</List.Item>
            <List.Item>
              Ser responsável pela veracidade das informações fornecidas
            </List.Item>
            <List.Item>
              Notificar-nos sobre mudanças relevantes em sua situação
              empresarial
            </List.Item>
          </List.Root>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Uso Permitido
          </Heading>
          <Text>Ao utilizar nossos serviços, você concorda em:</Text>
          <List.Root pl={6} gap={2}>
            <List.Item>
              Utilizar os serviços apenas para fins empresariais legais
            </List.Item>
            <List.Item>
              Fornecer documentações verdadeiras e atualizadas quando solicitado
            </List.Item>
            <List.Item>
              Não utilizar nossas informações para fins fraudulentos
            </List.Item>
            <List.Item>
              Respeitar a confidencialidade de informações de mercado
              compartilhadas
            </List.Item>
            <List.Item>
              Não tentar obter acesso não autorizado a dados de outros clientes
            </List.Item>
          </List.Root>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Responsabilidades e Limitações
          </Heading>
          <Text>
            A Financial Hub Assessoria atua como consultora e intermediadora,
            conectando empresas a instituições financeiras autorizadas. Não
            oferecemos garantias de aprovação, concessão de crédito ou retorno
            financeiro específico.
          </Text>
          <Text>
            Todas as operações financeiras são formalizadas diretamente entre o
            cliente e a instituição autorizada. Recomendamos sempre a análise
            criteriosa dos contratos e condições junto às instituições
            executoras.
          </Text>
          <Text>
            Em nenhuma circunstância a Financial Hub Assessoria será responsável
            por decisões tomadas pelas instituições financeiras parceiras ou por
            resultados específicos de operações financeiras.
          </Text>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Honorários e Pagamentos
          </Heading>
          <Text>
            Nossos honorários são baseados no sucesso das operações
            intermediadas. Os valores e condições são estabelecidos em contrato
            específico para cada projeto. Princípios gerais:
          </Text>
          <List.Root pl={6} gap={2}>
            <List.Item>
              Consultorias iniciais podem ser oferecidas sem custo
            </List.Item>
            <List.Item>
              Honorários são cobrados apenas em caso de sucesso na intermediação
            </List.Item>
            <List.Item>
              Valores e condições são sempre transparentes e acordados
              previamente
            </List.Item>
            <List.Item>
              Não cobramos taxas antecipadas para análise de viabilidade
            </List.Item>
          </List.Root>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Confidencialidade
          </Heading>
          <Text>
            Comprometemo-nos a manter absoluto sigilo sobre todas as informações
            empresariais e financeiras compartilhadas durante nosso
            relacionamento. Esta confidencialidade permanece válida mesmo após o
            encerramento dos serviços.
          </Text>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Modificações dos Termos
          </Heading>
          <Text>
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
            momento. As alterações entrarão em vigor imediatamente após a
            publicação dos termos atualizados em nosso site. O uso continuado
            dos serviços após tais modificações constitui sua aceitação dos
            novos termos.
          </Text>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Rescisão
          </Heading>
          <Text>
            Qualquer uma das partes pode encerrar o relacionamento comercial
            mediante comunicação por escrito. Compromissos e confidencialidades
            acordados permanecem válidos mesmo após a rescisão.
          </Text>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Lei Aplicável
          </Heading>
          <Text>
            Estes Termos de Uso serão regidos e interpretados de acordo com as
            leis do Brasil. Qualquer disputa relacionada a estes termos será
            submetida à jurisdição dos tribunais de São Paulo, SP.
          </Text>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Regulamentação
          </Heading>
          <Text>
            Para mais informações sobre regulamentação financeira no Brasil,
            consulte os sites oficiais do{" "}
            <Link
              href="https://www.bcb.gov.br"
              color="green.500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Banco Central (BACEN)
            </Link>
            , da{" "}
            <Link
              href="https://www.gov.br/cvm"
              color="green.500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comissão de Valores Mobiliários (CVM)
            </Link>{" "}
            e da{" "}
            <Link
              href="https://www.gov.br/susep"
              color="green.500"
              target="_blank"
              rel="noopener noreferrer"
            >
              SUSEP
            </Link>
            .
          </Text>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Contato
          </Heading>
          <Text>
            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em
            contato conosco:
          </Text>
          <List.Root pl={6} gap={2}>
            <List.Item>
              Email:{" "}
              <Link href="mailto:contato@financialhub.com.br" color="green.500">
                contato@financialhub.com.br
              </Link>
            </List.Item>
            <List.Item>Telefone: (11) 9429-89475</List.Item>
            <List.Item>Localização: São Paulo - SP</List.Item>
            <List.Item>
              Website:{" "}
              <Link
                href="https://www.financialhub.com.br"
                color="green.500"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.financialhub.com.br
              </Link>
            </List.Item>
          </List.Root>

          <Text
            fontSize="sm"
            color="gray.600"
            _dark={{ color: "gray.400" }}
            mt={4}
          >
            Última atualização: 02 de Junho de 2025
          </Text>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
}
