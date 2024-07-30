import {
  
  Container,
  Badge,
  Link,
  List,
  ListItem,
  
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Movie Dashboard">
    <Container>
      <Title>
        Movie DashBoard <Badge>2023</Badge>
      </Title>
      <P>
      MovieDash Dashboard is a MERN (MongoDB, Express.js, React.js, Node.js) project that provides a user-friendly interface for managing movie genres and adding movies to the database. It includes three main pages: the home page, the add genre page,login page , signup page and the add movie page.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>SOURCE</Meta>
          <Link href="https://github.com/daaniissh/movie-dashbord">
          https://github.com/daaniissh/movie-dashboard <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MERN</span>
        </ListItem>
      
     
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading> */}

      {/* <UnorderedList my={4}>
        <ListItem>
          <Link href="https://news.ycombinator.com/item?id=10782289">
            <Badge mr={2}>Hacker News</Badge>
            The Four Painters: A Video Work Created with Deep Learning
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://gigazine.net/news/20151224-deep-learning-four-painters/">
            <Badge mr={2}>Gigazine</Badge>
            実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した「the
            four painters」
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList> */}

      {/* <Box>
        <iframe
          src="https://player.vimeo.com/video/146373709"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box> */}

      <WorkImage
        src="/images/works/dash-2.png"
        alt="walknote"
      />
      <WorkImage src="/images/works/dash-3.png" alt="" />
      <WorkImage src="/images/works/dash-1.png" alt="" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
