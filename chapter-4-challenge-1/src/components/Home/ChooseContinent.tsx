import { Flex, FlexProps, Heading } from '@chakra-ui/react'
import { ContinentData, Slider } from './Slider'

interface Props extends FlexProps {
  continentsData: ContinentData[]
  isWide?: boolean
}

export function ChooseContinent({
  continentsData,
  isWide = false,
  ...rest
}: Props) {
  return (
    <Flex direction="column" justify="center" {...rest}>
      <Heading
        fontSize={['xl', '3xl', '4xl']}
        fontWeight="medium"
        textAlign="center"
        color="gray.900"
        px="35px"
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>

      <Slider continentsData={continentsData} mt={['20px', '12']} />
    </Flex>
  )
}
