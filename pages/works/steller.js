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
  <Layout title="steller">
    <Container>
      <Title>
        steller <Badge>2023</Badge>
      </Title>
      <P>
      Discover products available in your country! Our site shows items with Amazon and Flipkart purchase links. Automatically detects your location for a seamless shopping experience across different regions.
      </P>
      {/* <P>
        This service has been closed. Thank you for over 130,000 registered
        users!
      </P> */}
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://steller-hub.vercel.app/">
            https://steller-hub.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://archive.craftz.dog/blog.odoruinu.net/2016/09/06/farewell-from-walknote/">
            音楽発掘アプリwalknoteクローズのお知らせ{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
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
          <Link href="http://renewal49.hateblo.jp/entry/20120710/1341925681">
            <Badge mr={2}>リニューアル式</Badge>
            強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.appbank.net/2011/10/15/iphone-application/309349.php">
            <Badge mr={2}>appbank</Badge>
            walknote:
            CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html">
            <Badge mr={2}>男子ハック</Badge>
            [おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>タブロイド</Badge>
          <Link href="http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html">
            「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList> */}

      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/steller-p.jpg" alt="walknote" />
        {/* <WorkImage src="/images/works/walknote_02.png" alt="walknote" /> */}
      </SimpleGrid>
      <WorkImage src="/images/works/steller.png" alt="walknote" />
      {/* <WorkImage src="/images/works/walknote_04.png" alt="walknote" /> */}
      {/* <WorkImage src="/images/works/walknote_05.png" alt="walknote" /> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
