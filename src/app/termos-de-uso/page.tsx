import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  Separator,
  ListRoot,
  Link,
} from "@chakra-ui/react";
import { Header } from "../../components/header";
import Head from "next/head";
import { Footer } from "../../components/footer";

export default function TermosDeUso() {
  return (
    <Box>
      <Head>
        <title>Termos de Uso - Finhub Assessoria</title>
        <meta
          name="description"
          content="Termos de Uso da plataforma Finhub Assessoria - Análise científica de personalidade para processos seletivos e desenvolvimento profissional."
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
            Bem-vindo aos Termos de Uso do Finhub Assessoria. Este documento
            estabelece as regras e condições para utilização de nossa plataforma
            de análise científica de personalidade. Ao acessar ou utilizar
            nossos serviços, você concorda com estes termos em sua totalidade.
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
            Ao utilizar a plataforma Finhub Assessoria, você confirma que leu,
            entendeu e concorda com estes Termos de Uso. Se você não concordar
            com qualquer parte destes termos, solicitamos que não utilize nossos
            serviços.
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
            O Finhub Assessoria é uma plataforma especializada em análise
            científica de personalidade para processos seletivos e
            desenvolvimento profissional. Oferecemos ferramentas baseadas em
            ciência para auxiliar empresas e profissionais na tomada de decisões
            relacionadas à gestão de talentos.
          </Text>
          <ListRoot pl={6} gap={2}>
            <ListItem>Avaliações de perfil comportamental</ListItem>
            <ListItem>Relatórios de compatibilidade com funções</ListItem>
            <ListItem>Ferramentas de desenvolvimento profissional</ListItem>
            <ListItem>Análises comparativas de perfis</ListItem>
          </ListRoot>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Cadastro e Contas
          </Heading>
          <Text>
            Para utilizar completamente nossos serviços, você precisará criar
            uma conta. Ao fazê-lo, você concorda em:
          </Text>
          <ListRoot pl={6} gap={2}>
            <ListItem>Fornecer informações precisas e completas</ListItem>
            <ListItem>Manter suas credenciais de acesso em sigilo</ListItem>
            <ListItem>
              Ser responsável por todas as atividades realizadas em sua conta
            </ListItem>
            <ListItem>
              Notificar-nos imediatamente sobre qualquer uso não autorizado
            </ListItem>
          </ListRoot>
          <Text>
            Reservamo-nos o direito de suspender ou encerrar contas que violem
            estes termos ou apresentem atividades suspeitas.
          </Text>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Uso Permitido
          </Heading>
          <Text>Ao utilizar nossa plataforma, você concorda em:</Text>
          <ListRoot pl={6} gap={2}>
            <ListItem>
              Utilizar os serviços apenas para fins legais e de acordo com estes
              termos
            </ListItem>
            <ListItem>
              Não tentar acessar áreas restritas da plataforma
            </ListItem>
            <ListItem>
              Não realizar engenharia reversa ou tentar extrair o código-fonte
            </ListItem>
            <ListItem>
              Não utilizar a plataforma de maneira que possa danificá-la ou
              comprometer seu funcionamento
            </ListItem>
            <ListItem>
              Não coletar informações de outros usuários sem autorização
            </ListItem>
          </ListRoot>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Propriedade Intelectual
          </Heading>
          <Text>
            Todo o conteúdo disponível na plataforma Finhub Assessoria, incluindo
            textos, gráficos, logotipos, ícones, imagens, clipes de áudio,
            downloads digitais, compilações de dados e software, é propriedade
            do Finhub Assessoria ou de seus fornecedores de conteúdo e está
            protegido por leis de propriedade intelectual.
          </Text>
          <Text>
            Você não pode modificar, reproduzir, distribuir, criar trabalhos
            derivados, exibir publicamente ou explorar comercialmente qualquer
            conteúdo da plataforma sem autorização prévia por escrito.
          </Text>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Limitação de Responsabilidade
          </Heading>
          <Text>
            O Finhub Assessoria fornece suas ferramentas e análises com base em
            metodologias científicas, mas não podemos garantir resultados
            específicos. Nossas avaliações são ferramentas de apoio à decisão e
            não devem ser o único fator considerado em processos seletivos ou
            decisões de desenvolvimento profissional.
          </Text>
          <Text>
            Em nenhuma circunstância o Finhub Assessoria, seus diretores,
            funcionários ou agentes serão responsáveis por quaisquer danos
            indiretos, incidentais, especiais, consequenciais ou punitivos
            decorrentes do uso ou incapacidade de usar nossos serviços.
          </Text>

          <Heading
            as="h2"
            size="lg"
            color="green.500"
            _dark={{ color: "green.300" }}
          >
            Pagamentos e Assinaturas
          </Heading>
          <Text>
            Alguns de nossos serviços requerem pagamento ou assinatura. Ao
            adquirir um plano, você concorda com os seguintes termos:
          </Text>
          <ListRoot pl={6} gap={2}>
            <ListItem>
              Fornecer informações de pagamento precisas e completas
            </ListItem>
            <ListItem>
              As assinaturas são renovadas automaticamente até que sejam
              canceladas
            </ListItem>
            <ListItem>
              Cancelamentos devem ser solicitados com pelo menos 7 dias de
              antecedência da próxima cobrança
            </ListItem>
            <ListItem>
              Não oferecemos reembolsos para períodos parciais de assinatura
            </ListItem>
          </ListRoot>

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
            publicação dos termos atualizados em nossa plataforma. O uso
            continuado dos serviços após tais modificações constitui sua
            aceitação dos novos termos.
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
            Podemos encerrar ou suspender seu acesso à plataforma imediatamente,
            sem aviso prévio ou responsabilidade, por qualquer motivo,
            incluindo, sem limitação, se você violar estes Termos de Uso. Após a
            rescisão, seu direito de usar a plataforma cessará imediatamente.
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
            submetida à jurisdição exclusiva dos tribunais de União da Vitória,
            Paraná.
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
            contato conosco através do email:
            <Text as="span" fontWeight="bold">
              {" "}
              <Link href="mailto:contato@acpersonalidade.com" color="green.500">
                contato@acpersonalidade.com
              </Link>
            </Text>{" "}
            ou pelo telefone{" "}
            <Text as="span" fontWeight="bold">
              (42) 98838-1261
            </Text>
            .
          </Text>

          <Text
            fontSize="sm"
            color="gray.600"
            _dark={{ color: "gray.400" }}
            mt={4}
          >
            Última atualização: 07 de Março de 2025
          </Text>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
}
