import { Box, Flex } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { RichText } from 'prismic-dom'
import { About } from '../../components/Continent/About'
import { Banner } from '../../components/Continent/Banner'
import { Cities } from '../../components/Continent/Cities'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { getPrismicClient } from '../../services/prismic'

type City = {
  name: string
  country: string
  flag: string
  thumbnail: string
}

type Content = {
  description: string
  countries_count: number
  languages_count: number
  cities_count: number
  more_cities: string
}

type Banner = {
  image: string
  title: string
}
type ContinentData = {
  uid: string
  banner: Banner
  content: Content
  cities: City[]
}

interface Props {
  continentData: ContinentData
}

export default function Continent({ continentData }: Props) {
  const router = useRouter()

  if (router.isFallback) return <Loading />

  return (
    <Flex direction="column" pb="10">
      <Header hasBackButton />

      <Banner banner={continentData.banner} />

      <Flex justify="center">
        <Box w="100%" maxW={{ base: '600px', xl: '1240px' }} px={['16px']}>
          <About info={continentData.content} mt={['24px', '20']} />

          <Cities cities={continentData.cities} />
        </Box>
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params!

  const prismic = await getPrismicClient()

  const response = await prismic.getByUID('continent', String(continent), {})

  const continentData = {
    uid: response.uid,
    banner: {
      image: response.data.banner.url,
      title: RichText.asText(response.data.title),
    },
    content: {
      description: RichText.asText(response.data.description),
      countries_count: response.data.countries_count,
      languages_count: response.data.languages_count,
      cities_count: response.data.cities_count,
      more_cities: response.data.more_cities,
    },
    cities: response.data.cities.map((city: any) => ({
      name: city.name,
      country: city.country,
      flag: city.flag.url,
      thumbnail: city.thumbnail.url,
    })),
  }

  return {
    props: {
      continentData,
    },
  }
}
