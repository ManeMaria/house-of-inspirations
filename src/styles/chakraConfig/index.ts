import { extendTheme } from '@chakra-ui/react'
import { fonts, colors, typography } from './fundantions'



export const theme = extendTheme({
  fonts,
  colors,
  ...typography,
  styles: {
    global: () => ({
      html: {
        bg: 'gray.800',
        minH: '100vh',
        fontSize: '10px'
      },
      body: {
        bg: 'gray.800',
        h: '100%',
        color: 'blue.500',
        lineHeight: '170%',
        WebkitTapHighlightColor: 'transparent',

      },
    })
  },
})