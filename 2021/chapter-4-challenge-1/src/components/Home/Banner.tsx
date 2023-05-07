import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'

interface Props {
  isWide?: boolean
}

export function Banner({ isWide = false }: Props) {
  return (
    <Flex
      justify="center"
      backgroundImage="url('/images/background.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      gap={['8px', '5']}
    >
      <Flex w="100%" justify="space-between" maxW="1240px">
        <VStack
          py={['28px', '80px']}
          px={['16px', '40px']}
          align="flex-start"
          spacing="5"
          maxW="524px"
          flex="1"
        >
          <Heading
            fontWeight={['medium', 'bold']}
            fontSize={['xl', '3xl']}
            color="gray.100"
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text fontSize={['14px', 'xl']} color="gray.600">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
        {isWide && (
          <Box
            position="relative"
            flex="1"
            maxW="420px"
            mt="76px"
            transform="rotate(3deg)"
          >
            <Image
              src="/images/airplane.svg"
              alt="Airplane"
              position="absolute"
              top="0"
              w="100%"
            />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}
