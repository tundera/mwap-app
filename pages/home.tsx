import type { FC } from 'react'
import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { useLoader } from 'mwap'

import type { HomePageData } from '../loaders/home'
import Hero from '../components/Hero'
import { MotionBox } from '../components/MotionBox'

const HomePage: FC = () => {
  const { name } = useLoader<HomePageData>('home')

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <MotionBox
        display="flex"
        py="16"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading as="h1">Hello, {name}!</Heading>
        <Hero />
      </MotionBox>
    </>
  )
}

export default HomePage
