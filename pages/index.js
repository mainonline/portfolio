import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoPaperPlane,
  IoArrowDownOutline
}
  from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mt={8}
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a front-end developer based in Kyrgyzstan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Joomart
          </Heading>
          <p>Digital Hunter ( Developer / Designer)</p>
          <Link href="https://akimov.vercel.app/images/resume.pdf">
            <Button
                variant="primary"
                colorScheme="dark"
                leftIcon={<Icon as={IoArrowDownOutline} />}
            >
              resume
            </Button>
          </Link>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/joomart.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Joomart is a front-end web developer based in Bishkek. He has rich experience in website design and building and customization, also he is good at CMS technologies. He is building projects which solve real-life problems.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/skills">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Skills
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Kyzyl-Kiya, Kyrgyzstan.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Graduated from High School
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduated from New Generation Academy (a preparatory program that provides scholarships for 25 citizens of the republic)
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Bachelor degree in Software Engineering at
          <Link mx="2" href="https://auca.kg/" target="_blank">American University of Central Asia</Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ???
        </Heading>
        <Paragraph>
          Art, Volleybal, Table Tennis, Horse Riding
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/mainonline" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @mainonline
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/akimovmaster" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @akimovmaster
              </Button>
            </Link>
          </ListItem>
          <ListItem>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/profile.php?id=100009965951669" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @Akimov
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="tg://resolve?domain=jomartakim" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoPaperPlane} />}
              >
                @jomartakim
              </Button>
            </Link>
          </ListItem>
        </List>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Front-end developer based in Bishkek, with a dream to build a product that will be used by millions of users.
          </Paragraph>
        </Section>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
