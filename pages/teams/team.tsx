import type { FC } from 'react'
import * as React from 'react'
import { Heading } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import ReactJson from 'react-json-view'

import { useLoader } from 'mwap'

import type { TeamPageData, TeamPageArgs } from '../../loaders/teams/team'

const TeamsPage: FC = () => {
  const { id } = useParams<TeamPageArgs>()
  const { team } = useLoader<TeamPageData, TeamPageArgs>('team', { id })

  return (
    <>
      <Helmet>
        <title>Team</title>
      </Helmet>

      <Heading as="h1">Teams</Heading>

      <ReactJson src={team} />
    </>
  )
}

export default TeamsPage
