import type { FC } from 'react'
import React from 'react'
import { Heading, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { useLoader } from 'mwap'

import type { HomePageData } from '../loaders/home'
import Hero from '../components/Hero'

const HomePage: FC = () => {
  const { name } = useLoader<HomePageData>('home')
  const [count, setCount] = useState(5)

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Heading as="h1">Hello, {name}!</Heading>
      <Hero />
      <Button my="8" onClick={() => setCount(count + 1)}>
        Count: {count}
      </Button>
    </>
  )
}

export default HomePage
