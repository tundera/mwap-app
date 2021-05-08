import * as React from 'react'
import { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { ChakraProvider, Flex, Spinner } from '@chakra-ui/react'

import { ScrollToTop, useLoader } from 'mwap'

import Navbar from './components/Navbar'

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

      <Navbar />
      <Flex direction="column" alignItems="center" justifyContent="center" w="full" minH="100vh">
        <h1>{title}</h1>
        <Suspense fallback={<Spinner label="Loading..." />}>{children}</Suspense>
      </Flex>
    </ChakraProvider>
  )
}

export default App
