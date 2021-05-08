import React from 'react'
import { chakra, Box, useColorModeValue, Icon, Image, HStack, Stack } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Box pos="relative" overflow="hidden">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            mx="auto"
            maxW={{ base: '7xl' }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box textAlign="center" w={{ base: 'full', md: 11 / 12, xl: 8 / 12 }} mx="auto">
              <chakra.h1
                fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue('gray.900', 'white')}
              >
                Mwap App
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                mx={{ sm: 'auto', lg: 0 }}
                mb={6}
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.500"
                lineHeight="base"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </chakra.p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
