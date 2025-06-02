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
        <title>Política de Privacidade - Financial Hub Assessoria</title>
        <meta
          name="description"
          content="Política de Privacidade da Financial Hub Assessoria - Assessoria financeira especializada em conectar empresas às melhores soluções do mercado."
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
            Política de Privacidade
          </Heading>

          <Text>
            A Financial Hub Assessoria valoriza e respeita a privacidade dos seus clientes e usuários. 
            Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos 
            suas informações pessoais quando você utiliza nossos serviços de assessoria financeira ou 
            interage com nosso website.
          </Text>

          <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </Text>

          <VStack align="stretch" gap={6}>
            <Box>
              <Heading as="h2" size="lg" mb={3}>
                1. Quem Somos
              </Heading>
              <Text>
                A Financial Hub Assessoria é uma empresa especializada em assessoria financeira empresarial, 
                que atua como intermediadora estratégica conectando empresas às melhores soluções do mercado 
                financeiro. Nossa sede está localizada em São Paulo - SP, e prestamos serviços em todo 
                território nacional.
              </Text>
              <Text mt={3}>
                <strong>Dados de contato do controlador:</strong><br />
                Financial Hub Assessoria<br />
                E-mail: contato@financialhub.com.br<br />
                Telefone: (11) 94298-9475<br />
                Endereço: São Paulo - SP
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                2. Informações que Coletamos
              </Heading>
              <Text mb={3}>
                Coletamos informações pessoais que você nos fornece diretamente ou que obtemos 
                através de sua interação com nossos serviços. Essas informações incluem:
              </Text>
              
              <Heading as="h3" size="md" mb={2} mt={4}>
                2.1 Dados de Identificação e Contato
              </Heading>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Nome completo e nome social</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>E-mail e telefones</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Endereço residencial e/ou comercial</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Documentos de identificação (CPF, RG, CNH)</Text>
                </HStack>
              </VStack>

              <Heading as="h3" size="md" mb={2} mt={4}>
                2.2 Informações Profissionais e Empresariais
              </Heading>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Cargo e função na empresa</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Dados da empresa (razão social, CNPJ, porte)</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Informações financeiras e patrimoniais</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Histórico creditício e bancário</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Demonstrações financeiras e documentos contábeis</Text>
                </HStack>
              </VStack>

              <Heading as="h3" size="md" mb={2} mt={4}>
                2.3 Dados de Navegação
              </Heading>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Endereço IP e localização geográfica</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Informações do navegador e dispositivo</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Páginas visitadas e tempo de permanência</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Origem do acesso e links clicados</Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                3. Como Utilizamos suas Informações
              </Heading>
              <Text mb={3}>Utilizamos suas informações pessoais para as seguintes finalidades:</Text>
              
              <Heading as="h3" size="md" mb={2} mt={4}>
                3.1 Prestação de Serviços
              </Heading>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Análise do perfil creditício e financeiro</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Estruturação de propostas financeiras</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Intermediação junto a instituições financeiras parceiras</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Acompanhamento de processos e operações</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Assessoria estratégica personalizada</Text>
                </HStack>
              </VStack>

              <Heading as="h3" size="md" mb={2} mt={4}>
                3.2 Comunicação e Relacionamento
              </Heading>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Atendimento ao cliente e suporte técnico</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Envio de informações sobre produtos e serviços</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Newsletter e conteúdo educativo</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Pesquisas de satisfação</Text>
                </HStack>
              </VStack>

              <Heading as="h3" size="md" mb={2} mt={4}>
                3.3 Melhorias e Segurança
              </Heading>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Aprimoramento dos serviços oferecidos</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Análise estatística e pesquisa de mercado</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Prevenção de fraudes e atividades suspeitas</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Cumprimento de obrigações legais e regulatórias</Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                4. Base Legal para o Tratamento
              </Heading>
              <Text mb={3}>
                O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses legais 
                previstas na Lei Geral de Proteção de Dados (LGPD):
              </Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Execução de contrato:</strong> Para cumprimento de contrato 
                    de prestação de serviços de assessoria financeira
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Consentimento:</strong> Quando você autoriza expressamente 
                    o tratamento para finalidades específicas
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Interesse legítimo:</strong> Para melhoria dos serviços, 
                    comunicação comercial e análises estatísticas
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Cumprimento de obrigação legal:</strong> Para atender 
                    exigências de órgãos reguladores e fiscais
                  </Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                5. Compartilhamento de Informações
              </Heading>
              <Text mb={3}>
                Podemos compartilhar suas informações pessoais nas seguintes situações:
              </Text>
              
              <Heading as="h3" size="md" mb={2} mt={4}>
                5.1 Instituições Financeiras Parceiras
              </Heading>
              <Text mb={2}>
                Compartilhamos informações necessárias com bancos, fintechs, fundos de investimento 
                e outras instituições financeiras para análise e aprovação de operações, sempre 
                com seu consentimento prévio e expresso.
              </Text>

              <Heading as="h3" size="md" mb={2} mt={4}>
                5.2 Prestadores de Serviços
              </Heading>
              <Text mb={2}>
                Compartilhamos dados com empresas que nos auxiliam na prestação de serviços, como:
              </Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Empresas de tecnologia e hospedagem</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Serviços de comunicação e marketing</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Consultorias especializadas</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Serviços de análise creditícia</Text>
                </HStack>
              </VStack>

              <Heading as="h3" size="md" mb={2} mt={4}>
                5.3 Autoridades Competentes
              </Heading>
              <Text mb={2}>
                Quando necessário para cumprimento de obrigações legais ou por determinação 
                judicial, compartilhamos informações com órgãos reguladores, autoridades 
                fiscais e judiciárias.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                6. Cookies e Tecnologias de Rastreamento
              </Heading>
              <Text mb={3}>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência 
                em nosso website e coletar informações sobre seu uso:
              </Text>
              
              <Heading as="h3" size="md" mb={2} mt={4}>
                6.1 Tipos de Cookies
              </Heading>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Cookies essenciais:</strong> Necessários para o funcionamento 
                    básico do website
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Cookies de performance:</strong> Coletam informações sobre 
                    como você usa o site
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Cookies de funcionalidade:</strong> Permitem que o site 
                    lembre suas preferências
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Cookies de marketing:</strong> Usados para personalizar 
                    anúncios e medir campanhas
                  </Text>
                </HStack>
              </VStack>

              <Heading as="h3" size="md" mb={2} mt={4}>
                6.2 Gerenciamento de Cookies
              </Heading>
              <Text mb={3}>
                Você pode controlar o uso de cookies através das configurações do seu navegador. 
                Consulte os links abaixo para instruções específicas:
              </Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Link
                    href="https://support.google.com/chrome/answer/95647"
                    color="green.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Chrome
                    <Box as="span" ml={1} display="inline-flex" alignItems="center">
                      <ExternalLinkIcon size={12} />
                    </Box>
                  </Link>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Link
                    href="https://support.mozilla.org/pt-BR/kb/cookies-informacoes-armazenadas-por-sites-em-seu-computador"
                    color="green.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mozilla Firefox
                    <Box as="span" ml={1} display="inline-flex" alignItems="center">
                      <ExternalLinkIcon size={12} />
                    </Box>
                  </Link>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Link
                    href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    color="green.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Edge
                    <Box as="span" ml={1} display="inline-flex" alignItems="center">
                      <ExternalLinkIcon size={12} />
                    </Box>
                  </Link>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Link
                    href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                    color="green.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Safari
                    <Box as="span" ml={1} display="inline-flex" alignItems="center">
                      <ExternalLinkIcon size={12} />
                    </Box>
                  </Link>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                7. Segurança dos Dados
              </Heading>
              <Text mb={3}>
                Implementamos medidas técnicas e organizacionais adequadas para proteger 
                suas informações pessoais contra acesso não autorizado, alteração, divulgação 
                ou destruição indevida:
              </Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Criptografia de dados em trânsito e em repouso</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Controles de acesso baseados em funções</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Monitoramento contínuo de segurança</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Backup seguro e plano de recuperação</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Treinamento regular da equipe em segurança da informação</Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>Auditorias periódicas de segurança</Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                8. Retenção de Dados
              </Heading>
              <Text mb={3}>
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades 
                para as quais foram coletados, observando os seguintes critérios:
              </Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Dados contratuais:</strong> Durante a vigência do contrato 
                    e por 5 anos após o encerramento
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Dados financeiros:</strong> Conforme exigências legais e 
                    regulatórias (geralmente 5 a 10 anos)
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Dados de navegação:</strong> Até 12 meses após a coleta
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Dados com consentimento:</strong> Até a retirada do consentimento 
                    pelo titular
                  </Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                9. Seus Direitos
              </Heading>
              <Text mb={3}>
                Como titular de dados pessoais, você possui os seguintes direitos garantidos 
                pela LGPD:
              </Text>
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Confirmação e acesso:</strong> Saber se tratamos seus dados 
                    e ter acesso aos dados
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Correção:</strong> Solicitar a correção de dados incompletos, 
                    inexatos ou desatualizados
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Anonimização ou eliminação:</strong> Solicitar a anonimização 
                    ou eliminação de dados desnecessários
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Portabilidade:</strong> Solicitar a portabilidade dos dados 
                    para outro fornecedor
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Eliminação:</strong> Solicitar a eliminação de dados tratados 
                    com base no consentimento
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Informação:</strong> Obter informações sobre entidades com 
                    as quais compartilhamos dados
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Revogação do consentimento:</strong> Retirar o consentimento 
                    a qualquer momento
                  </Text>
                </HStack>
              </VStack>
              
              <Text mt={4}>
                Para exercer seus direitos, entre em contato conosco através dos canais 
                indicados na seção "Contato".
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                10. Transferência Internacional de Dados
              </Heading>
              <Text>
                Alguns de nossos prestadores de serviços podem estar localizados fora do Brasil. 
                Nestes casos, adotamos medidas adequadas para garantir que suas informações 
                pessoais recebam um nível de proteção adequado, incluindo cláusulas contratuais 
                padrão aprovadas pela Autoridade Nacional de Proteção de Dados (ANPD).
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                11. Alterações nesta Política
              </Heading>
              <Text>
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir 
                mudanças em nossas práticas de tratamento de dados, na legislação aplicável ou 
                em nossos serviços. Quando houver alterações materiais, notificaremos você através 
                do e-mail cadastrado ou por meio de aviso destacado em nosso website. 
                Recomendamos que você revise esta política regularmente.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                12. Contato e Encarregado de Dados
              </Heading>
              <Text mb={3}>
                Para exercer seus direitos, esclarecer dúvidas sobre esta política ou 
                relatar questões relacionadas ao tratamento de dados pessoais, entre em 
                contato conosco:
              </Text>
              
              <VStack align="stretch" pl={5} gap={2}>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>E-mail:</strong>{" "}
                    <Link href="mailto:contato@financialhub.com.br" color="green.500">
                      contato@financialhub.com.br
                    </Link>
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Telefone:</strong> (11) 94298-9475
                  </Text>
                </HStack>
                <HStack align="flex-start" gap={2}>
                  <Text>•</Text>
                  <Text>
                    <strong>Endereço:</strong> São Paulo - SP
                  </Text>
                </HStack>
              </VStack>

              <Text mt={4}>
                Você também pode apresentar reclamações à Autoridade Nacional de Proteção 
                de Dados (ANPD) através do website{" "}
                <Link
                  href="https://www.gov.br/anpd/"
                  color="green.500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.gov.br/anpd
                  <Box as="span" ml={1} display="inline-flex" alignItems="center">
                    <ExternalLinkIcon size={12} />
                  </Box>
                </Link>
                .
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={3}>
                13. Legislação Aplicável
              </Heading>
              <Text>
                Esta Política de Privacidade é regida pela legislação brasileira, em especial 
                pela Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), pelo Marco 
                Civil da Internet (Lei nº 12.965/2014) e pelo Código de Defesa do Consumidor 
                (Lei nº 8.078/1990).
              </Text>
            </Box>
          </VStack>

          <Box
            p={4}
            bg="gray.50"
            _dark={{ bg: "gray.800" }}
            borderRadius="md"
            borderLeft="4px solid"
            borderLeftColor="green.500"
          >
            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.300" }}>
              <strong>Data de vigência:</strong> Esta política entra em vigor em{" "}
              {new Date().toLocaleDateString("pt-BR")} e substitui todas as versões anteriores.
            </Text>
          </Box>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
}
