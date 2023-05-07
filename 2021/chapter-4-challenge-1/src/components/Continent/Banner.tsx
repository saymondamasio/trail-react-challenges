import { Flex, Heading } from '@chakra-ui/react'

type Banner = {
  image: string
  title: string
}

interface Props {
  banner: Banner
}

export function Banner({ banner }: Props) {
  return (
    <Flex
      h={{ base: '150px', sm: '250px', xl: '500px' }}
      bgImage={`url('${banner.image}')`}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        maxW="1240px"
        w="100%"
        mb={{ base: '0', xl: '60px' }}
        mx="auto"
        align={{ base: 'center', xl: 'flex-end' }}
        justify={{ base: 'center', xl: 'flex-start' }}
      >
        <Heading fontSize={['3xl', '5xl']} color="gray.100">
          {banner.title}
        </Heading>
      </Flex>
    </Flex>
  )
}
