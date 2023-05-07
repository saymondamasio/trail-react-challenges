import {
  Flex,
  FlexProps,
  HStack,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

type Info = {
  description: string
  countries_count: number
  languages_count: number
  cities_count: number
  more_cities: string
}

interface Props extends FlexProps {
  info: Info
}

export function About({ info, ...rest }: Props) {
  return (
    <Flex
      direction={{ base: 'column', xl: 'row' }}
      justify={{ base: '', xl: 'space-between' }}
      align={{ base: 'center', xl: '' }}
      {...rest}
    >
      <Text textAlign="justify" fontSize={['14px', '2xl']} maxW="600px">
        {info.description}
      </Text>

      <Flex w="100%" maxW={{ xl: '450px' }} justify="space-between" mt="16px">
        <Flex direction="column" align={['flex-start', 'center']}>
          <Text
            fontSize={['24px', '5xl']}
            fontWeight="semibold"
            color="yellow.700"
          >
            {info.countries_count}
          </Text>
          <Text
            fontSize={['18px', '2xl']}
            fontWeight={['normal', 'semibold']}
            color="gray.900"
          >
            países
          </Text>
        </Flex>

        <Flex direction="column" align={['flex-start', 'center']}>
          <Text
            fontSize={['24px', '5xl']}
            fontWeight="semibold"
            color="yellow.700"
          >
            {info.languages_count}
          </Text>
          <Text
            fontSize={['18px', '2xl']}
            fontWeight={['normal', 'semibold']}
            color="gray.900"
          >
            linguas
          </Text>
        </Flex>

        <Flex direction="column" align={['flex-start', 'center']}>
          <Text
            fontSize={['24px', '5xl']}
            fontWeight="semibold"
            color="yellow.700"
          >
            {info.cities_count}
          </Text>
          <HStack>
            <Text
              fontSize={['18px', '2xl']}
              fontWeight={['normal', 'semibold']}
              color="gray.900"
            >
              cidades +100
            </Text>
            <Popover>
              <PopoverTrigger>
                <Flex align="center" justify="center">
                  <Icon as={AiOutlineInfoCircle} color="gray.700" />
                </Flex>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>+ cidades</PopoverHeader>
                <PopoverBody>{info.more_cities}</PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}
