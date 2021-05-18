import type { Loader, LoaderConfigFunc } from 'mwap'

import supabase from '../lib/supabase'

export type TeamsPageData = {
  teams: any[]
  ttl: number
}

const loader: Loader<TeamsPageData> = async () => {
  // const teams = await db.team.findMany()
  const response = await supabase.from('Team').select('*')

  console.dir(response)

  return {
    teams: response.data,
    ttl: 604800,
  }
}

const config: LoaderConfigFunc<TeamsPageData> = ({ data }) => ({
  headers: {
    'cache-control': `public, max-age=${data.ttl}`,
  },
})

export default { loader, config }
