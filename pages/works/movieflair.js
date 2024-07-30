import {
 
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,

  
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Movie Flair">
    <Container>
      <Title>
        Movie Flair <Badge>2022</Badge>
      </Title>
      <P>
      MovieFlair is a web application built using React.js, Tailwind CSS, Framer motion ,Axios, React Icons, and React Spinner. It leverages the power of the TMDb (The Movie Database) API to provide users with a comprehensive platform to explore movies and TV shows.
      </P>
      {/* <P>
        So, you can check a shop info as soon as you found a promising ramen
        shop in a food magazine. Let&apos;s go out and have a delicious ramen!
      </P> */}
      {/* <UnorderedList my={4}>
        <ListItem>Ramen shop recommendation based on photo</ListItem>
        <ListItem>Show shops near your current location</ListItem>
        <ListItem>Open in Tabelog/Foursquare</ListItem>
      </UnorderedList> */}

      <List ml={4} my={4}>
      <ListItem>
          <Meta>SOURCE</Meta>
          <Link href="https://github.com/daaniissh/MovieFlair">
          https://github.com/daaniissh/MovieFlair <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>REACT</span>
        </ListItem>
        
      </List>

      {/* <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box> */}

      <WorkImage src="/images/works/flair.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/flair-p-1.jpg" alt="menkiki" />
        <WorkImage src="/images/works/flair-p.jpg" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
