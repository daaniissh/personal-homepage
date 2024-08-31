
import { Box, Container, Heading,  } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
// import { WorkGridItem } from '../../components/grid-item'

// import thumbCherryBlossoms from '../../public/images/wallpapers/cherry-blossoms/ls-13.jpg'
// import thumbMachiya from '../../public/images/wallpapers/machiya/ls-03.jpg'

const Wallpapers = () => (
  <Layout title="She Want this">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Playlist 💘
      </Heading>

      <Box my={4}>
    <h1 style={{color:"violet",fontWeight:"900"}} >Heaven  is a Place on earth with you 🤍,</h1>   
       
      </Box>

      <Section>
      
        <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/006tMshPgVMUCBahNqlDfo?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
       
      </Section>
    </Container>
  </Layout>
)

export default Wallpapers
export { getServerSideProps } from '../../components/chakra'
