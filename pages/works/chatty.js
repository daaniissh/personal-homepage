import {
  Container,
  Badge,
 
  List,
  ListItem,

  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Link from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
// import P from '../../components/paragraph'

const Work = () => (
  <Layout title="chatty">
    <Container>
      <Title>
        chatty <Badge>2022</Badge>
      </Title>
      

      <List ml={4} my={4}>
      <ListItem>
          <Meta>SOURCE</Meta>
          <Link href="https://github.com/daaniissh/chatt-app">
          https://github.com/daaniissh/chatt-app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Firebase</span>
        </ListItem>
      </List>

   
      <SimpleGrid columns={3} gap={2}>
        <WorkImage src="/images/works/chatty-1.png" alt="menkiki" />
        <WorkImage src="/images/works/chatty-2.png" alt="menkiki" />
        <WorkImage src="/images/works/chatty-3.png" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
