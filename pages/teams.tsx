import type { FC } from 'react'
import * as React from 'react'
import { Heading, Grid, GridItem } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'

import { useLoader } from 'mwap'

import type { TeamsPageData } from '../loaders/teams'
import TeamCard from '../components/TeamCard'
// import ReactJson from 'react-json-view'

const TeamsPage: FC = () => {
  const { teams } = useLoader<TeamsPageData>('team')

  return (
    <>
      <Helmet>
        <title>Teams</title>
      </Helmet>

      <Heading as="h1">Teams</Heading>
      <Grid templateColumns="repeat(5, 1fr)">
        {teams?.map((team) => (
          <GridItem>
            <TeamCard team={team} />
            {/* <ReactJson src={team} /> */}
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default TeamsPage
