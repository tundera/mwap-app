import React from 'react'

import { chakra, Flex } from '@chakra-ui/react'

const MainLayout: React.FC = ({ children }) => {
  return (
    <chakra.div as={Flex} flexDir="column">
      <chakra.header as={Flex} w="full" alignItems="center">
        Header content
      </chakra.header>
      <chakra.main w="full" flex="1 1 auto">
        <chakra.div maxW="48" mx="auto" px="3">
          {children}
        </chakra.div>
      </chakra.main>
      <chakra.footer w="full">Footer content</chakra.footer>
    </chakra.div>
  )
}

export default MainLayout
