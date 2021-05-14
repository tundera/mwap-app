import type { Loader, LoaderConfigFunc } from 'mwap'
import type { Team, Player, Coach, ColorScheme } from '../types'

import supabase from '../lib/supabase'

export type TeamPageData = {
  team: Team
  players: Player[]
  coaches: Coach[]
  colorScheme: ColorScheme
  ttl: number
}

export type TeamPageArgs = {
  id: string
}

const loader: Loader<TeamPageData> = async ({ params }) => {
  const { data: team } = await supabase
    .from<Team>('Team')
    .select('*')
    .match({ id: params.id })
    .single()
  const { data: players } = await supabase
    .from<Player>('Player')
    .select('*')
    .match({ teamId: params.id })
  const { data: coaches } = await supabase
    .from<Coach>('Coach')
    .select('*')
    .match({ teamId: params.id })
  const { data: colorScheme } = await supabase
    .from<ColorScheme>('ColorScheme')
    .select('*')
    .match({ teamId: params.id })
    .single()

  return {
    team,
    players,
    coaches,
    colorScheme,
    ttl: 604800,
  }
}

const config: LoaderConfigFunc<TeamPageData> = ({ data }) => ({
  headers: {
    'cache-control': `public, max-age=${data.ttl}`,
  },
})

export default { loader, config }
