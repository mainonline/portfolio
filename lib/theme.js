import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      // bg: mode('#f0e7db', '#202023')(props)
      bg: mode('#f6f6f2', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'section-titleh5': {
        textDecoration: 'none',
        fontSize: 16,
        margin: 0
      },
      'section-titleh4': {
        textDecoration: 'none',
        fontSize: 18,
        margin: 0
      },
      'section-titleh6': {
        textDecoration: 'none',
        fontSize: 14,
        margin: 0,
        marginBottom: 3
      },
      'section-titleP': {
        textDecoration: 'none',
        fontSize: 14,
        margin: 0,
        marginTop: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
