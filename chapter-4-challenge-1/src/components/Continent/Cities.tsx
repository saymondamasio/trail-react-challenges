import { Flex, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react'

type City = {
  name: string
  country: string
  flag: string
  thumbnail: string
}

interface Props {
  cities: City[]
}

export function Cities({ cities }: Props) {
  return (
    <Flex direction="column" mt="20">
      <Heading fontSize={['2xl', '4xl']} fontWeight="medium">
        Cidades +100
      </Heading>

      <Grid
        templateColumns={['1fr', 'repeat(4, 1fr)']}
        columnGap="10"
        rowGap="12"
        mt={['20px', '10']}
      >
        {cities.map(city => (
          <Flex
            key={city.name}
            direction="column"
            borderRadius={4}
            mx="auto"
            w="256px"
          >
            <Image h="170px" src={city.thumbnail} alt={city.name} />

            <Flex
              justify="space-between"
              px="6"
              py="5"
              flex="1"
              align="center"
              borderColor="yellow.900"
              borderBottomWidth={1}
              borderLeftWidth={1}
              borderRightWidth={1}
              borderBottomRadius={4}
            >
              <VStack align="flex-start">
                <Text fontSize="xl" fontWeight="semibold" color="gray.900">
                  {city.name}
                </Text>
                <Text color="gray.800">{city.country}</Text>
              </VStack>

              <Image
                alignSelf="center"
                src={city.flag}
                alt={city.country}
                w={30}
                h={30}
              />
            </Flex>
          </Flex>
        ))}
      </Grid>
    </Flex>
  )
}
