import type { Page } from 'mwap'

import About from './about'
import Home from './home'
import Teams from './teams'
import Team from './team'

const pages: Page[] = [
  {
    component: Home,
    exact: true,
    path: '/',
  },
  {
    component: About,
    path: '/about',
  },
  {
    component: Teams,
    path: '/teams',
  },
  {
    component: Team,
    path: '/team/:id',
  },
]

export default pages
