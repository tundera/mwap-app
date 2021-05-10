import db from '../../db'

export const getTeams = () => {
  return db.team.findMany({})
}

export const getTeamById = (id: string) => {
  return db.team.findUnique({
    where: { id },
  })
}
