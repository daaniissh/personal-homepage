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
  <Layout title="X">
    <Container>
      <Title>
        X <Badge>2024</Badge>
      </Title>
      <P>
      X Clone is a dynamic social media platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It empowers users to connect, share content, and engage with a vibrant community. With features like user profiles, content creation, social interactions, and more, X Clone offers a seamless and engaging experience for users.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>REPO</Meta>
          <Link href="https://github.com/daaniissh/X">
            https://github.com/daaniissh/X <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>WEBSITE</Meta>
          <Link href="https://x-client-home.vercel.app/">
            https://x-client-home.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem> */}
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Express.js, React, MongoDb</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/works/X.png" alt="Foodeli" />
      <WorkImage src="/images/works/x2.png" alt="Foodeli" />
      <WorkImage src="/images/works/x3.png" alt="Foodeli" />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
