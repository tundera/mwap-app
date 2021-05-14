export type NavbarLink = {}

export type Coach = {
  id: string
  createdAt: Date
  updatedAt: Date
  handle: string
  name: string
  type: string | null
  isAssistant: string | null
  teamId: string | null
}

export type ColorScheme = {
  id: string
  createdAt: Date
  updatedAt: Date
  primary: string
  secondary: string
  teamId: string | null
}

export type Player = {
  id: string
  createdAt: Date
  updatedAt: Date
  handle: string
  name: string
  slug: string
  height: string
  weight: string
  number: string | null
  position: string | null
  teamId: string | null
}

export type Team = {
  id: string
  createdAt: Date
  updatedAt: Date
  handle: string
  name: string
  slug: string
  city: string
  abbreviation: string
  logo: string
  logoSlug: string
  wins: number | null
  losses: number | null
  winPercentage: number | null
  conference: string
  division: string
  established: string
}
