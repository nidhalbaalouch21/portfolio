import { cn } from '@/lib/utils'

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'purple'
  children: React.ReactNode
  className?: string
}

const variants = {
  default: 'bg-gray-100 text-gray-700 border border-gray-200/50',
  success: 'bg-emerald-50 text-emerald-700 border border-emerald-200/50',
  warning: 'bg-amber-50 text-amber-700 border border-amber-200/50',
  danger: 'bg-rose-50 text-rose-700 border border-rose-200/50',
  info: 'bg-sky-50 text-sky-700 border border-sky-200/50',
  purple: 'bg-purple-50 text-purple-700 border border-purple-200/50',
}

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}
