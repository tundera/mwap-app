import React from 'react'
import { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { chakra, ChakraProvider, Spinner, Flex } from '@chakra-ui/react'
import { ScrollToTop, useLoader } from 'mwap'
import Inspect from 'inspx'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import type { AppShellProps } from './loaders/app-shell'

const App = ({ children }) => {
  const { title } = useLoader<AppShellProps, {}>('app-shell', {})

  return (
    <ChakraProvider>
      <ScrollToTop />
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        defaultTitle="@mwap minimal example"
        titleTemplate="%s | @mwap minimal example"
      >
        <meta name="description" content="A minimal example demonstrating the @mwap framework." />

        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      <Inspect disabled={process.env.NODE_ENV !== 'development'}>
        <Flex flexDir="column">
          <Navbar />
          <chakra.main w="full" flex="1 1 auto" alignItems="center">
            <Flex
              maxW={['48em', '62em', '80em']}
              mx="auto"
              px="3"
              justify="center"
              align="center"
              direction="column"
            >
              <Suspense
                fallback={
                  <Flex minH="100vh" direction="column" justify="center" align="center">
                    <Spinner size="xl" label="Loading..." />
                  </Flex>
                }
              >
                {children}
              </Suspense>
            </Flex>
          </chakra.main>
          <Footer />
        </Flex>
      </Inspect>
    </ChakraProvider>
  )
}

export default App
