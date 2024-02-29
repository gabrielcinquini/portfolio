import { MenuIcon } from 'lucide-react'
import React from 'react'

import MenuItem from './MenuItem'

const listTitles = ['Inicio', 'Sobre', 'Projetos', 'Contato']

interface NavListProps {
  isResponsiveNavbarVisible: boolean
}

interface NavBarProps extends NavListProps {
  onChangeResponsiveNavbarVisibility: () => void
}

export function NavBar({
  isResponsiveNavbarVisible,
  onChangeResponsiveNavbarVisibility,
}: NavBarProps) {
  return (
    <nav>
      <NavList isResponsiveNavbarVisible={isResponsiveNavbarVisible} />
      <button
        className="text-primary md:hidden"
        onClick={onChangeResponsiveNavbarVisibility}
      >
        <MenuIcon />
      </button>
    </nav>
  )
}

function NavList({ isResponsiveNavbarVisible }: NavListProps) {
  return isResponsiveNavbarVisible ? (
    <nav className="absolute end-0 top-full block bg-surface-primary px-7 py-2">
      <ul className="flex flex-col gap-6">
        {listTitles.map((title) => (
          <li key={title}>
            <MenuItem text={title} />
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <ul className="flex gap-6 max-md:hidden">
      {listTitles.map((title) => (
        <li key={title}>
          <MenuItem text={title} />
        </li>
      ))}
    </ul>
  )
}
