import { cva, VariantProps } from 'class-variance-authority'
import React, { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

const subTitleVariants = cva(
  'font-heebo text-lg font-medium leading-lg text-primary',
)

interface SubTitleProps
  extends VariantProps<typeof subTitleVariants>,
    ComponentProps<'h2'> {}

export default function Subtitle({ className, ...props }: SubTitleProps) {
  return <h2 className={cn(subTitleVariants({ className }))} {...props} />
}
