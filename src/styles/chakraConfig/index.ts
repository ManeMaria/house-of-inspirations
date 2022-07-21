import { extendTheme } from '@chakra-ui/react'
import { fonts } from './fundantions/fonts'


export const theme = extendTheme({
  fonts,
  styles: {
    global: () => ({
      html: {
        bg: 'gray.800',
        minH: '100vh',
      },
      body: {
        bg: 'gray.800',
        h: '100%',
        color: 'yellow.200',
        lineHeight: '170%',
        WebkitTapHighlightColor: 'transparent',
      },
    })
  },
})