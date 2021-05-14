import type { FC } from 'react'
import * as React from 'react'
import {
  Heading,
  SimpleGrid,
  Text,
  Center,
  Image,
  Spinner,
  Flex,
  Button,
  Avatar,
  Stack,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { useLoader } from 'mwap'

import type { TeamPageData, TeamPageArgs } from '../loaders/team'
import ProfileCard from '../components/ProfileCard'

const TeamPage: FC = () => {
  const { id } = useParams<TeamPageArgs>()
  const { team, players, colorScheme } = useLoader<TeamPageData, TeamPageArgs>('team', { id })

  return (
    <>
      <Helmet>
        <title>Team</title>
      </Helmet>

      <Heading as="h1">
        {team.city} {team.name}
      </Heading>

      <Center py="16">
        <Image src={team.logo} alt={`${team.name} team logo`} w="md" />
      </Center>

      <SimpleGrid columns={[1, null, 2, 3]} spacing="40px">
        {players?.map((player) => (
          <Center py={6} key={player.id}>
            <Box
              maxW="270px"
              w="full"
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow="2xl"
              rounded="md"
              overflow="hidden"
            >
              <Box
                h="120px"
                w="full"
                bgGradient={`linear(to-r, ${colorScheme.primary}, ${colorScheme.secondary})`}
              />
              <Flex justify="center" mt={-12}>
                <Avatar
                  size="xl"
                  src={team.logo}
                  fit="cover"
                  alt="Author"
                  css={{
                    border: '2px solid white',
                  }}
                />
              </Flex>

              <Box p={6}>
                <Stack spacing={0} align="center" mb={5}>
                  <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
                    {player.name}
                  </Heading>
                  <Text color="gray.500">
                    {player.height} / {player.weight}lbs
                  </Text>
                </Stack>

                <Stack direction="row" justify="center" spacing={6}>
                  <Stack spacing={0} align={'center'}>
                    <Text fontWeight={600}>{player.number}</Text>
                    <Text fontSize="sm" color="gray.500">
                      Number
                    </Text>
                  </Stack>
                  <Stack spacing={0} align="center">
                    <Text fontWeight={600}>{player.position}</Text>
                    <Text fontSize="sm" color="gray.500">
                      Position
                    </Text>
                  </Stack>
                </Stack>

                <Button
                  w={'full'}
                  mt={8}
                  bg={useColorModeValue('#151f21', 'gray.900')}
                  color={'white'}
                  rounded={'md'}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Follow
                </Button>
              </Box>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </>
  )
}

export default TeamPage
