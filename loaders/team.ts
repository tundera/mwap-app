import type { Loader, LoaderConfigFunc } from 'mwap'
import type { Team } from '../db'

import db from '../db'

export type TeamPageData = {
  team: Team
  ttl: number
}

export type TeamPageArgs = {
  id: string
}

const loader: Loader<TeamPageData> = async ({ params }) => {
  const team = await db.team.findUnique({
    where: {
      id: params.id,
    },
  })

  return {
    team,
    ttl: 604800,
  }
}

const config: LoaderConfigFunc<TeamPageData> = ({ data }) => ({
  headers: {
    'cache-control': `public, max-age=${data.ttl}`,
  },
})

export default { loader, config }
