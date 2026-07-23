import { cn } from '@/lib/utils'

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  status?: 'online' | 'offline' | 'busy'
}

const sizes = {
  sm: 'w-8 h-8 text-[10px]',
  md: 'w-10 h-10 text-xs',
  lg: 'w-14 h-14 text-sm',
  xl: 'w-20 h-20 text-xl',
}

const statusColors = {
  online: 'bg-success',
  offline: 'bg-gray-400',
  busy: 'bg-danger',
}

export function Avatar({ src, alt = '', fallback, size = 'md', className, status }: AvatarProps) {
  if (src) {
    return (
      <div className="relative inline-flex">
        <img src={src} alt={alt} className={cn('rounded-full object-cover ring-2 ring-white', sizes[size], className)} />
        {status && <span className={cn('absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ring-2 ring-white', statusColors[status])} />}
      </div>
    )
  }
  return (
    <div className="relative inline-flex">
      <div className={cn(
        'rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-semibold flex items-center justify-center ring-2 ring-white',
        sizes[size], className
      )}>
        {fallback || '?'}
      </div>
      {status && <span className={cn('absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ring-2 ring-white', statusColors[status])} />}
    </div>
  )
}
