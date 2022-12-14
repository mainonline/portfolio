import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import './style.css'
import { AnimatePresence } from 'framer-motion'
// import './styles/__custom.scss'

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
