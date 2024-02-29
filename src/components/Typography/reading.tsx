import { cva, VariantProps } from 'class-variance-authority'
import React, { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

const readingVariants = cva('font-heebo text-md leading-lg text-primary')

interface ReadingProps
  extends VariantProps<typeof readingVariants>,
    ComponentProps<'span'> {}

export default function Reading({ className, ...props }: ReadingProps) {
  return <span className={cn(readingVariants({ className }))} {...props} />
}
