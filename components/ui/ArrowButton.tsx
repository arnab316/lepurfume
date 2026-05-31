'use client'

type Props = {
  direction?: 'left' | 'right'
  variant?: 'outline-light' | 'outline-dark' | 'filled-light' | 'filled-dark'
  onClick?: () => void
  className?: string
}

export default function ArrowButton({
  direction = 'right',
  variant = 'outline-light',
  onClick,
  className = '',
}: Props) {
  const isFilled = variant.startsWith('filled')
  const isDark = variant.endsWith('dark')

  const ring =
    variant === 'outline-light'
      ? 'border-white/80 hover:bg-white/10'
      : variant === 'outline-dark'
      ? 'border-smoke hover:bg-black/5'
      : variant === 'filled-light'
      ? 'bg-white border-white'
      : 'bg-ink border-ink'

  const strokeColor = isFilled ? (isDark ? '#fff' : '#000') : isDark ? '#000' : '#fff'

  return (
    <button
      onClick={onClick}
      aria-label={`${direction} arrow`}
      className={`group inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${ring} ${className}`}
    >
      <svg
        width="20"
        height="6"
        viewBox="0 0 20 6"
        fill="none"
        className={`transition-transform group-hover:translate-x-0.5 ${direction === 'left' ? 'rotate-180' : ''}`}
      >
        <path d="M0 3H17" stroke={strokeColor} strokeWidth="1.2" />
        <path d="M14 0L19 3L14 6" fill={strokeColor} />
      </svg>
    </button>
  )
}
