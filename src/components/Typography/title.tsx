import { cva, VariantProps } from 'class-variance-authority'
import React, { ComponentProps, ElementType } from 'react'

import { cn } from '@/lib/utils'

const titleVariants = cva('font-kalam font-normal', {
  variants: {
    variant: {
      default: 'text-brand-secondary',
      gradient:
        'text-transparent bg-clip-text bg-gradient-to-b to-brand-primary-500 from-brand-secondary',
    },
    size: {
      default: 'text-base leading-base',
      '2xl': 'text-2xl leading-2xl',
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface TitleProps
  extends VariantProps<typeof titleVariants>,
    ComponentProps<'h1'> {
  as?: ElementType
}

export default function Title({
  className,
  variant,
  size,
  as = 'h1',
  ...props
}: TitleProps) {
  const Comp = as
  return (
    <Comp
      className={cn(titleVariants({ className, variant, size }))}
      {...props}
    />
  )
}
