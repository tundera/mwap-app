import React from 'react'

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  Heading,
  Link,
  IconButton,
  CloseButton,
  useColorMode,
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaReact, FaMoon, FaSun } from 'react-icons/fa'
import { Link as MwapLink } from 'react-router-dom'

export default function Navbar() {
  const bg = useColorModeValue('gray.800', 'white')
  const mobileNav = useDisclosure()

  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const color = useColorModeValue('white', 'gray.800')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        color={color}
        position="sticky"
        zIndex="20"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Link
              href="/"
              title="Mwap App Home Page"
              display="flex"
              alignItems="center"
              mx="4"
              _hover={{ color: '#61dbfb' }}
              _focus={{ color: '#61dbfb' }}
            >
              <FaReact size="32" />
              <VisuallyHidden>mwap</VisuallyHidden>
            </Link>
            <Heading as="h1" fontSize="2xl" fontWeight="bold">
              mwap
            </Heading>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack spacing={1} mr={1} display={{ base: 'none', md: 'inline-flex' }}>
              <Button
                as={MwapLink}
                to="/"
                variant="ghost"
                color="current"
                _hover={{ color: '#61dbfb' }}
                _focus={{ color: '#61dbfb' }}
              >
                Home
              </Button>
              <Button
                as={MwapLink}
                to={`/about?message=${encodeURI('Test Message From Search')}`}
                variant="ghost"
                color="current"
                _hover={{ color: '#61dbfb' }}
                _focus={{ color: '#61dbfb' }}
              >
                About
              </Button>
              <Button
                as={MwapLink}
                to="/teams"
                variant="ghost"
                color="current"
                _hover={{ color: '#61dbfb' }}
                _focus={{ color: '#61dbfb' }}
              >
                Teams
              </Button>
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: '0', md: '3' }}
              onClick={toggleColorMode}
              icon={<SwitchIcon />}
            />
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.800', 'inherit')}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />
                <Button as={MwapLink} to="/" w="full" variant="ghost">
                  Home
                </Button>
                <Button
                  as={MwapLink}
                  to={`/about?message=${encodeURI('Test Message From Search')}`}
                  w="full"
                  variant="ghost"
                >
                  About
                </Button>
                <Button as={MwapLink} to="/teams" w="full" variant="ghost">
                  Teams
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  )
}
