import {Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWalknote from '../public/images/works/Screenshot_2.png'
import marbikaImg from '../public/images/works/Screenshot_19.png'
import uokuImg from '../public/images/works/Screenshot_38.png'
import enbemImg from '../public/images/works/Screenshot_199.png'
import lineImg from '../public/images/works/Screenshot_119.png'
import fondImg from '../public/images/works/Screenshot_21.png'
import expertImg from '../public/images/works/Screenshot_20.png'
import lapstoreImg from '../public/images/works/Screenshot_22.png'


import thumbModeTokyo from '../public/images/works/Screenshot_5.png'
import thumbStyly from '../public/images/works/Screenshot_6.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="https://marbica.com/auth/login" title="Marbika" thumbnail={marbikaImg}>
            Human Resource Management System for Marbika Consult.
            Tech stack: TypeScript, React, Redux Saga, Axios, Django, PostgreSQL, React Bootstrap, SCSS, ApexCharts
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
              id="https://github.com/mainonline/uoku_client"
              title="Uoku CRM"
              thumbnail={uokuImg}
          >
            Customer relationship management system for an educational center.
            Tech stack: JavaScript, React, MobX, Node.JS, Express.JS, Sequelize ORM, PostgreSQL, React Bootstrap, SCSS, Material UI
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="https://enbem.com/#/" title="Enbem" thumbnail={enbemImg}>
            Software for managing a logistics company.
            Tech stack: JavaScript, React, Redux, Axios, Django, PostgreSQL, React Bootstrap, SCSS
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="https://ned.kg"
            title="Real Estate agency webpage"
            thumbnail={thumbWalknote}
          >
            Website with admin panel for real estate agency with more than 80 employees.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
              id="https://expert-tala.com/"
              thumbnail={expertImg}
              title="Expert"
          >
            Multi page website
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="https://lapstore.kg" thumbnail={lapstoreImg} title="Lapstore KG">
            Online store website.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
              id="https://linne.ru/product-category/%d0%b6%d0%b5%d0%bd%d1%89%d0%b8%d0%bd%d0%b0%d0%bc/%d0%be%d0%b4%d0%b5%d0%b6%d0%b4%d0%b0/%d0%b4%d0%be%d0%bc%d0%b0%d1%88%d0%bd%d1%8f%d1%8f-%d0%be%d0%b4%d0%b5%d0%b6%d0%b4%d0%b0/"
              thumbnail={lineImg}
              title="Ecommerce website"
          >
            Online store website.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="https://fondpriroda.kg/" thumbnail={fondImg} title="Nature protection fund">
            Website for publishing tenders.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
              id="https://skilland.site"
              thumbnail={thumbModeTokyo}
              title="Skilland website"
          >
            Landing page website
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="https://mugalim-edu.com/" thumbnail={thumbStyly} title="Mugalim public">
            Public project to increase education level of population
          </WorkGridItem>
        </Section>
      </SimpleGrid>


    </Container>
  </Layout>
)

export default Works
