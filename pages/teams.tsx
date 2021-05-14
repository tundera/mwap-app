import type { FC } from 'react'
import * as React from 'react'
import { Heading, SimpleGrid } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'

import { useLoader } from 'mwap'

import type { TeamsPageData } from '../loaders/teams'
import TeamCard from '../components/TeamCard'
// import ReactJson from 'react-json-view'

const TeamsPage: FC = () => {
  const { teams } = useLoader<TeamsPageData>('teams')

  return (
    <>
      <Helmet>
        <title>Teams</title>
      </Helmet>

      <Heading as="h1">Teams</Heading>
      <SimpleGrid columns={[1, null, 2, 3]} spacing="80px">
        {teams?.map((team) => (
          <TeamCard team={team} key={team.id} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default TeamsPage
