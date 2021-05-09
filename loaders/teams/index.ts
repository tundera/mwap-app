import type { Loader, LoaderConfigFunc } from 'mwap'
import db, { Team } from '../../db'

export type TeamsPageData = {
  teams: Team[]
  ttl: number
}

const loader: Loader<TeamsPageData> = async () => {
  const teams = await db.team.findMany()

  return {
    teams,
    ttl: 604800,
  }
}

const config: LoaderConfigFunc<TeamsPageData> = ({ data }) => ({
  headers: {
    'cache-control': `public, max-age=${data.ttl}`,
  },
})

export default { loader, config }
