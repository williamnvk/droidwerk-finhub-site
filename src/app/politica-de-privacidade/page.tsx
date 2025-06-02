import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { Header } from "../../components/header";
import Head from "next/head";
import { Footer } from "../../components/footer";
import { ExternalLinkIcon } from "lucide-react";

export default function PoliticaDePrivacidade() {
  return (
    <Box>
      <Head>
        <title>Política de Privacidade - Finhub Assessoria</title>
        <meta
          name="description"
          content="Política de Privacidade da plataforma Finhub Assessoria - Análise científica de personalidade para processos seletivos e desenvolvimento profissional."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <Container maxW="6xl" py={10}>
        <VStack gap={8} align="flex-start">
          <Heading
            as="h1"
            size="2xl"
            color="blue.600"
            _dark={{ color: "blue.300" }}
          >
            Política de Privacidade
          </Heading>

          <Text>
            Bem-vindo à Política de Privacidade do Finhub Assessoria. Sua privacidade é extremamente importante para nós. 
            Esta política descreve como coletamos, usamos e protegemos suas informações pessoais durante a utilização 
            de nossa plataforma de análise científica de personalidade.
          </Text>

          <Text>
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </Text>

          <VStack align="stretch" gap={6}>
            <Box>
              <Heading as="h2" size="lg" mb={3}>
                Quem Somos
              </Heading>
              <Text>
                O Finhub Assessoria é uma plataforma especializada em análise científica de personalidade para processos 
                seletivos e desenvolvimento profissional. Nossa missão é fornecer ferramentas baseadas em ciência para 
                ajudar empresas a tomar melhores decisões de contratação e desenvolvimento de talentos.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                Coleta de Informações
              </Heading>
              <Text mb={3}>
                Coletamos informações pessoais que você nos fornece diretamente, como quando você cria uma conta, 
                atualiza seu perfil, responde aos questionários ou utiliza nossos serviços. Estas informações podem incluir:
              </Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Dados de identificação:</strong> Nome, e-mail, telefone.
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Informações profissionais:</strong> Cargo, empresa, histórico profissional.
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Respostas aos questionários de personalidade.</strong>
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Dados de uso da plataforma.</strong>
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Informações do dispositivo:</strong> Hardware,
                    sistema operacional, navegador e configurações.
                  </Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                Uso de Cookies e Tecnologias Semelhantes
              </Heading>
              <Text mb={3}>
                Utilizamos cookies e tecnologias semelhantes para melhorar sua
                experiência em nosso site:
              </Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Cookies essenciais:</strong> Necessários para o
                    funcionamento do site. Eles permitem recursos básicos como
                    navegação e acesso a áreas seguras.
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Cookies de preferências:</strong> Permitem que o
                    site lembre informações que mudam a aparência ou o
                    comportamento do site, como seu idioma preferido.
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Cookies estatísticos:</strong> Ajudam-nos a entender
                    como os visitantes interagem com o site, coletando e
                    relatando informações anonimamente.
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Cookies de marketing:</strong> Usados para rastrear
                    visitantes em sites. A intenção é exibir anúncios relevantes
                    e envolventes para o usuário.
                  </Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                Como Gerenciar Cookies
              </Heading>
              <Text mb={3}>
                Você pode controlar e/ou excluir cookies conforme desejar. Você
                pode excluir todos os cookies que já estão no seu computador e
                pode configurar a maioria dos navegadores para impedir que eles
                sejam instalados. Se você fizer isso, no entanto, poderá ter que
                ajustar manualmente algumas preferências sempre que visitar um
                site e alguns serviços e funcionalidades podem não funcionar.
              </Text>
              <Text>
                Para saber mais sobre como gerenciar cookies em diferentes
                navegadores, visite os links abaixo:
              </Text>
              <VStack align="stretch" pl={5} gap={2} mt={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Link
                    href="https://support.google.com/chrome/answer/95647"
                    color="blue.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Chrome
                    <Box
                      as="span"
                      ml={1}
                      display="inline-flex"
                      alignItems="center"
                    >
                      <ExternalLinkIcon size={12} />
                    </Box>
                  </Link>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Link
                    href="https://support.mozilla.org/pt-BR/kb/cookies-informacoes-armazenadas-por-sites-em-seu-computador"
                    color="blue.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mozilla Firefox
                    <Box
                      as="span"
                      ml={1}
                      display="inline-flex"
                      alignItems="center"
                    >
                      <ExternalLinkIcon size={12} />
                    </Box>
                  </Link>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Link
                    href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    color="blue.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Edge
                    <Box
                      as="span"
                      ml={1}
                      display="inline-flex"
                      alignItems="center"
                    >
                      <ExternalLinkIcon size={12} />
                    </Box>
                  </Link>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Link
                    href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                    color="blue.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Safari
                    <Box
                      as="span"
                      ml={1}
                      display="inline-flex"
                      alignItems="center"
                    >
                      <ExternalLinkIcon size={12} />
                    </Box>
                  </Link>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                Uso das Informações
              </Heading>
              <Text mb={3}>Usamos as informações que coletamos para:</Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Fornecer análises precisas de perfil de personalidade.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Personalizar sua experiência na plataforma.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Melhorar nossos algoritmos e metodologias de avaliação.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Enviar comunicações relevantes sobre nossos serviços.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Fornecer suporte técnico e atendimento ao cliente.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Proteger contra atividades fraudulentas e abusos.</Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                Base Legal para Processamento
              </Heading>
              <Text mb={3}>Processamos seus dados pessoais com base nas seguintes condições legais:</Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Execução de contrato quando você utiliza nossos serviços.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Consentimento explícito para processamento de dados sensíveis.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Interesses legítimos para melhorar nossos serviços.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Cumprimento de obrigações legais.</Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                Compartilhamento de Informações
              </Heading>
              <Text mb={3}>
                Não compartilhamos suas informações pessoais com terceiros, exceto:
              </Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    Com a empresa contratante, quando você participa de um processo seletivo ou avaliação 
                    (apenas os resultados da análise, conforme consentimento prévio).
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    Com prestadores de serviços que nos auxiliam na operação da plataforma 
                    (sempre com contratos de proteção de dados).
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Quando necessário para cumprir com obrigações legais.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Com seu consentimento explícito.</Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                Segurança das Informações
              </Heading>
              <Text mb={3}>
                Implementamos medidas técnicas e organizacionais rigorosas para proteger suas informações pessoais 
                contra acesso não autorizado, alteração, divulgação ou destruição. Estas medidas incluem:
              </Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Criptografia de dados sensíveis.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Controles de acesso rigorosos.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Monitoramento contínuo de segurança.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Treinamento regular da equipe em práticas de segurança.</Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                Seus Direitos
              </Heading>
              <Text mb={3}>
                De acordo com as leis de proteção de dados aplicáveis, você tem os seguintes direitos:
              </Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Acesso aos seus dados pessoais.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Correção de dados imprecisos.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Exclusão de seus dados (sujeito a certas condições).</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Restrição ou objeção ao processamento.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Portabilidade de dados.</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Retirada de consentimento a qualquer momento.</Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                Retenção de Dados
              </Heading>
              <Text>
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais 
                foram coletados, incluindo obrigações legais, contábeis ou de relatórios. Para determinar o período 
                apropriado de retenção, consideramos a quantidade, natureza e sensibilidade dos dados, o risco potencial 
                de danos por uso não autorizado e os requisitos legais aplicáveis.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                Alterações a Esta Política
              </Heading>
              <Text>
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas 
                ou por outros motivos operacionais, legais ou regulatórios. Notificaremos você sobre quaisquer alterações 
                materiais publicando a nova política em nosso site e, quando apropriado, enviando um aviso direto.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                Contato
              </Heading>
              <Text>
                Se você tiver alguma dúvida sobre esta Política de Privacidade ou desejar exercer seus direitos 
                relacionados aos seus dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados 
                através do email: <Link href="mailto:contato@acpersonalidade.com" color="blue.500">contato@acpersonalidade.com</Link> ou pelo telefone (42) 98838-1261.
              </Text>
            </Box>
          </VStack>

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
