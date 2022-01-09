import { Box, Flex, Grid, Icon, IconButton, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'

interface Props {
  hasBackButton?: boolean
}

export function Header({ hasBackButton = false }: Props) {
  const router = useRouter()

  return (
    <Flex w="100%" h={['50px', '100px']} align="center" justify="center">
      <Grid
        w="100%"
        templateColumns="repeat(3, 1fr)"
        maxW={{ base: '600px', xl: '1240px' }}
      >
        <Box>
          {hasBackButton && (
            <IconButton
              h="100%"
              aria-label="Voltar"
              variant="unstyled"
              display="flex"
              alignItems="center"
              justifyContent="center"
              icon={<Icon as={FaChevronLeft} />}
              onClick={() => router.push('/')}
              justifySelf="flex-start"
            />
          )}
        </Box>
        <Link href="/" passHref>
          <Flex as="a" align="center" justify="center">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              justifySelf="center"
              h={['20px', 'auto']}
            />
          </Flex>
        </Link>
      </Grid>
    </Flex>
  )
}
