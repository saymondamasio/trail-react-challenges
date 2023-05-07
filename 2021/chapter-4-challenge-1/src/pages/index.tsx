import { Divider, Flex, useBreakpointValue } from '@chakra-ui/react'
import Prismic from '@prismicio/client'
import type { GetStaticProps, NextPage } from 'next'
import { Header } from '../components/Header'
import { Banner } from '../components/Home/Banner'
import { ChooseContinent } from '../components/Home/ChooseContinent'
import { TravelTypes } from '../components/Home/TravelType'
import { getPrismicClient } from '../services/prismic'

export type ContinentData = {
  uid: string
  continent: string
  short_description: string
  banner: string
}

interface Props {
  continentsData: ContinentData[]
}

const Home: NextPage<Props> = ({ continentsData }) => {
  const isWide = useBreakpointValue({
    base: false,
    xl: true,
  })

  return (
    <Flex direction="column">
      <Header />

      <Banner isWide={isWide} />

      <Flex justify="center">
        <Flex w="100%" direction="column" maxW="1240px">
          <TravelTypes isWide={isWide} my={['36px', '28']} px="50px" />

          <Divider mx="auto" w="90px" h="2px" backgroundColor="gray.900" />

          <ChooseContinent
            continentsData={continentsData}
            isWide={isWide}
            my={['24px', '10']}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'banner'),
  ])

  const continentsData = response.results.map(continentData => ({
    uid: continentData.uid,
    continent: continentData.data.continent,
    short_description: continentData.data.short_description,
    banner: continentData.data.banner.url,
  }))

  return {
    props: {
      continentsData,
    },
  }
}

export default Home
