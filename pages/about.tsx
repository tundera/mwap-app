import type { FC } from 'react'
import * as React from 'react'
import { useState } from 'react'
import { Heading, Button } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

import { useLoader } from 'mwap'

import type { AboutPageData, AboutPageParams } from '../loaders/about'
import { MotionBox } from '../components/MotionBox'

const useQueryParams = () => {
  const location = useLocation()
  const search = location.search || ''
  const query = search.substr(1)
  const result: { [key: string]: string } = {}
  query.split('&').forEach((part) => {
    const item = part.split('=')
    result[item[0]] = decodeURIComponent(item[1])
  })
  return result
}

const AboutPage: FC = () => {
  const queryParams = useQueryParams()

  const { message } = useLoader<AboutPageData, AboutPageParams>('about', {
    message: queryParams.message,
  })

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <MotionBox
        display="flex"
        py="16"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading as="h1">{message}</Heading>
      </MotionBox>
    </>
  )
}

export default AboutPage
