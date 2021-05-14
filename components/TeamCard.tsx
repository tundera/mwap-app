import React from 'react'
import {
  Box,
  Image,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  Text,
  Flex,
  Spinner,
} from '@chakra-ui/react'
import { Link as MwapLink } from 'react-router-dom'
import { dynamic } from 'mwap'
import { MotionBox } from '../components/MotionBox'
import { Team } from '../types'

interface TeamCardProps {
  team: Team
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <MotionBox
      display="flex"
      minW="160"
      w="160"
      p={50}
      justifyContent="center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <LinkBox w="xs" bg="white" shadow="dark-lg" rounded="lg" overflow="hidden">
        <Image
          w="full"
          h={56}
          fit="cover"
          src={team.logo}
          alt="team logo"
          fallback={
            <Flex h={56} w="full" direction="column" align="center" justify="center">
              <Spinner />
              <Text color="gray.500" size="xs" py="4" fontWeight="bold">
                Loading...
              </Text>
            </Flex>
          }
        />
        <LinkOverlay
          as={MwapLink}
          to={`/team/${team.id}`}
          display="block"
          fontSize="2xl"
          color={useColorModeValue('gray.800', 'white')}
          fontWeight="bold"
        >
          <Box
            py={5}
            textAlign="center"
            bg={useColorModeValue('gray.800', 'gray.200')}
            color={useColorModeValue('gray.200', 'gray.700')}
          >
            {team.name}
            <Text fontSize="sm">{team.city}</Text>
          </Box>
        </LinkOverlay>
      </LinkBox>
    </MotionBox>
  )
}

export default TeamCard
