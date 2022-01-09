import {
  Box,
  Grid,
  GridItem,
  GridProps,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

interface Props extends GridProps {
  isWide?: boolean
}

const types = [
  {
    descriptionImage: 'Cocktail',
    image: '/images/cocktail.svg',
    name: 'vida noturna',
  },

  {
    descriptionImage: 'Surf',
    image: '/images/surf.svg',
    name: 'praia',
  },

  {
    descriptionImage: 'Building',
    image: '/images/building.svg',
    name: 'moderno',
  },

  {
    descriptionImage: 'Museum',
    image: '/images/museum.svg',
    name: 'clássico',
  },

  {
    descriptionImage: 'Earth',
    image: '/images/earth.svg',
    name: 'e mais...',
  },
]

export function TravelTypes({ isWide = false, ...rest }: Props) {
  return (
    <Grid
      templateColumns={[
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr',
        'repeat(5, 1fr)',
      ]}
      w="100%"
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={['27px', 5]}
      {...rest}
    >
      {types.map((type, index) => (
        <GridItem
          key={type.image}
          colSpan={index === types.length - 1 && !isWide ? 2 : 0}
        >
          <Stack
            spacing={['8px', '6']}
            direction={['row', 'row', 'row', 'row', 'column']}
            align="center"
            justify={
              index === types.length - 1
                ? 'center'
                : index % 2 === 0
                ? 'flex-start'
                : 'flex-end'
            }
          >
            {isWide ? (
              <Image src={type.image} alt={type.descriptionImage} />
            ) : (
              <Box borderRadius="full" bgColor="yellow.700" w="8px" h="8px" />
            )}
            <Text fontSize="larger" fontWeight="semibold" color="gray.900">
              {type.name}
            </Text>
          </Stack>
        </GridItem>
      ))}
    </Grid>
  )
}
