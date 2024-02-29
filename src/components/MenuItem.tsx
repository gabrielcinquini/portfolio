import React from 'react'

import { Typography } from './Typography'

interface MenuItemProps {
  text: string
}

export default function MenuItem({ text }: MenuItemProps) {
  const textInLowerCase = text.toLocaleLowerCase()

  return (
    <a href={`#${textInLowerCase}`}>
      <Typography.Paragraph className="w-fit font-medium text-secondary hover:text-primary">
        {text}
      </Typography.Paragraph>
    </a>
  )
}
