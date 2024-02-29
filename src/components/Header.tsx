import React from 'react'

import { NavBar } from './NavBar'
import { Typography } from './Typography'

interface NavBarProps {
  scrollTop: number
  isResponsiveNavbarVisible: boolean
  onChangeResponsiveNavbarVisibility: () => void
}

export function Header({
  scrollTop,
  isResponsiveNavbarVisible,
  onChangeResponsiveNavbarVisibility,
}: NavBarProps) {
  return (
    <header
      className={`transition-bg sticky top-0 z-10 flex h-20 items-center justify-between px-20 py-4 shadow-xl duration-500 max-md:px-10 ${scrollTop && 'bg-brand-primary-500'} }`}
    >
      <div className="flex">
        <Typography.Title className="text-lg text-primary">
          Gabriel
        </Typography.Title>
        <Typography.Title className="text-lg font-semibold text-primary">
          Cinquini
        </Typography.Title>
      </div>

      <NavBar
        isResponsiveNavbarVisible={isResponsiveNavbarVisible}
        onChangeResponsiveNavbarVisibility={onChangeResponsiveNavbarVisibility}
      />
    </header>
  )
}
