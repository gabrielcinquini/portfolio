import { cva, VariantProps } from 'class-variance-authority'
import React, { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

const paragraphVariants = cva('font-heebo', {
  variants: {
    textColor: {
      primary: 'text-primary',
      secondary: 'text-secondary',
    },

    size: {
      default: 'text-base leading-md',
      sm: 'text-sm leading-base',
    },
  },

  defaultVariants: {
    textColor: 'primary',
    size: 'default',
  },
})

interface ParagraphProps
  extends VariantProps<typeof paragraphVariants>,
    ComponentProps<'p'> {}

export default function Paragraph({
  className,
  textColor,
  size,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(paragraphVariants({ className, textColor, size }))}
      {...props}
    />
  )
}
