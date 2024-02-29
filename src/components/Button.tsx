import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import React, { ComponentProps, ElementType } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'w-fit rounded-lg px-6 font-heebo py-4 gap-2 max-sm:px-2 max-sm:py-3 flex disabled:opacity-50 disabled:cursor-not-allowed text-primary',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary-500 hover:bg-brand-primary-400',
        secondary: 'bg-surface-secondary hover:bg-surface-tertiary',
        icon: 'bg-surface-secondary hover:bg-surface-tertiary p-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    ComponentProps<'button'> {
  as?: ElementType
  asChild?: boolean
}

export function Button({
  variant,
  className,
  as = 'button',
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : as

  return (
    <Comp className={cn(buttonVariants({ className, variant }))} {...props} />
  )
}
