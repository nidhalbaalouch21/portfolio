import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md active:scale-[0.97]',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:scale-[0.97]',
  outline: 'border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.97]',
  ghost: 'text-gray-600 hover:bg-gray-100 active:scale-[0.97]',
  danger: 'bg-danger text-white hover:bg-danger/90 shadow-sm active:scale-[0.97]',
  gradient: 'btn-gradient text-white shadow-md',
}

const sizes = {
  sm: 'px-3.5 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
)
Button.displayName = 'Button'
