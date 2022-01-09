import { Flex, Spinner } from '@chakra-ui/react'

export function Loading() {
  return (
    <Flex h="100vh" w="100vw" justify="center" align="center">
      <Spinner size="xl" color="yellow.500" />
    </Flex>
  )
}
