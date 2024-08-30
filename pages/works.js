import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Foodeli from '../public/images/works/foodeli.png'
import X from '../public/images/works/x2.png'
import Steller from '../public/images/works/steller.png'
import Movie from '../public/images/works/1154.jpg'
import Flair from '../public/images/works/flair.png'
// import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
import Chatty from '../public/images/works/chatty.jpg'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import Meal from '../public/images/works/food.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="X" title="X" thumbnail={X}>
          A social media platform built with MERN (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS. Users can create posts, interact with others, and customize their profiles.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="foodeli" title="Foodeli" thumbnail={Foodeli}>
            Foodeli is an online marketplace where people can buy and sell food.
            It helps food lovers find what they want and helps food sellers
            reach customers easily.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="steller" title="Steller" thumbnail={Steller}>
            Discover products available locally. We provide convenient purchase
            links to Amazon and Flipkart, tailored to your location for a
            seamless shopping experience.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="moviedashboard"
            title="Movie Dashboard"
            thumbnail={Movie}
          >
            MovieDashBoard is a tool for managing movie information. It lets you
            add new movie genres and movies to a database.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="movieflair" thumbnail={Flair} title="Movie Flair">
          Find your next movie! Search for titles or discover popular picks.









          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        {/* <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} /> */}

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="chatty" thumbnail={Chatty} title="Chatty">
            Chat to your friends
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section> */}
        <Section delay={0.6}>
          <WorkGridItem id="melon" thumbnail={Meal} title="melon">
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
