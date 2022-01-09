import { Flex, FlexProps, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export type ContinentData = {
  continent: string
  uid: string
  banner: string
  short_description: string
}

interface Props extends FlexProps {
  continentsData: ContinentData[]
}

export function Slider({ continentsData, ...rest }: Props) {
  return (
    <Flex w="100%" h={['250px', '450px']} {...rest}>
      <Swiper
        style={{ width: '100%', flex: '1' }}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        loop
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {continentsData.map(continentData => (
          <SwiperSlide key={continentData.uid}>
            <Link href={`/continents/${continentData.uid}`} passHref>
              <Flex
                as="a"
                w="100%"
                h="100%"
                bgImage={`url('${continentData.banner}')`}
                bgPosition="center"
                bgSize="cover"
                justify="center"
                align="center"
              >
                <VStack spacing="1">
                  <Text
                    fontSize={['2xl', '5xl']}
                    fontWeight="bold"
                    color="gray.50"
                  >
                    {continentData.continent}
                  </Text>
                  <Text
                    fontSize={['smaller', '2xl']}
                    fontWeight="bold"
                    color="gray.50"
                  >
                    {continentData.short_description}
                  </Text>
                </VStack>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}
