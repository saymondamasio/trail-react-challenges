import { extendTheme } from '@chakra-ui/react'

export const colors = {
  gray: {
    100: '#F5F8FA',
    600: '#DADADA',
    700: 'rgba(153, 153, 153, 0.5)',
    800: '#999999',
    900: '#47585B',
  },
  yellow: {
    700: '#FFBA08',
    900: 'rgba(255, 186, 8, 0.5)',
  },
}

export const theme = extendTheme({
  colors,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        backgroundColor: colors.gray['100'],
        color: colors.gray['900'],
      },
    },
  },
})
