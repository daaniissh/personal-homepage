import {
  Container,
  Badge,
  Link,
  List,
  ListItem,

 
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
// import P from '../../components/paragraph'

const Work = () => (
  <Layout title="melon">
    <Container>
      <Title>
        melon <Badge>2022</Badge>
      </Title>
   
      

      <List ml={4} my={4}>
      <ListItem>
          <Meta>SOURCE</Meta>
          <Link href="https://github.com/daaniissh/Food-order-webApp">
          https://github.com/daaniissh/melon <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>REACT</span>
        </ListItem>
      </List>



      <WorkImage src="/images/works/food.png" alt="amembo" />
  
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
