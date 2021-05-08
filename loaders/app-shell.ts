import type { Loader } from 'mwap'
import type { NavbarLink } from '../types'

export type AppShellProps = {
  title: string
  links?: NavbarLink
}

const loader: Loader<AppShellProps> = () => {
  return {
    title: 'AppShell',
  }
}

export default { loader }
