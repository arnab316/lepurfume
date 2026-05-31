'use client'

type Props = {
  count: number
  active: number
  dark?: boolean
  vertical?: boolean
  onChange?: (i: number) => void
  className?: string
}

export default function DotPagination({ count, active, dark, vertical, onChange, className = '' }: Props) {
  const idle = dark ? 'bg-black/10' : 'bg-white/60'
  const on = dark ? 'bg-ink' : 'bg-white'

  return (
    <div className={`flex items-center gap-2 ${vertical ? 'flex-col' : 'flex-row'} ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onChange?.(i)}
          className={`h-2 w-2 rounded-full transition-colors ${i === active ? on : idle}`}
        />
      ))}
    </div>
  )
}
