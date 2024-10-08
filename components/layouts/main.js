import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<meta name="description" content="Welcome to Danish's personal homepage, showcasing portfolio, blog, and projects." />
<meta name="author" content="maybe when the time is right you will find me again" />
<link rel="apple-touch-icon" href="apple-touch-icon.png" />
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />


<meta name="twitter:title" content="Danish" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:description" content="Explore Danish's portfolio, blog, and creative projects. Stay connected and get to know more!" />
<meta name="twitter:site" content="@daaniisssh" />
<meta name="twitter:creator" content="@daaniisssh" />
<meta name="twitter:image" content="https://i.pinimg.com/236x/d6/e7/11/d6e711560b9af515d94cf7512cbcd1a1.jpg" />


<meta property="og:site_name" content="Danish" />
<meta property="og:description" content="Welcome to Danish's homepage. Discover projects, read the blog, and see the latest updates!" />
<meta property="og:title" content="Danish" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://i.pinimg.com/564x/81/ee/a2/81eea27b87f68633380a2438e3922dd7.jpg" />
<meta property="og:url" content="https://danishxd.vercel.app/" />

        <title>Danish - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
