import Link from 'next/link'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  showText?: boolean
  showTagline?: boolean
  className?: string
  textColor?: 'blue' | 'white'
}

export default function Logo({ 
  size = 'medium', 
  showText = true, 
  showTagline = true,
  className = '',
  textColor = 'blue'
}: LogoProps) {
  const sizeClasses = {
    small: {
      container: 'w-8 h-8',
      text: 'text-sm',
      title: 'text-lg',
      tagline: 'text-xs'
    },
    medium: {
      container: 'w-10 h-10',
      text: 'text-base',
      title: 'text-xl',
      tagline: 'text-xs'
    },
    large: {
      container: 'w-14 h-14',
      text: 'text-xl',
      title: 'text-2xl',
      tagline: 'text-sm'
    }
  }

  const currentSize = sizeClasses[size]
  
  const colorClasses = {
    blue: {
      title: 'text-[var(--brand-navy)]',
      tagline: 'text-[var(--muted-foreground)]'
    },
    white: {
      title: 'text-white',
      tagline: 'text-gray-300'
    }
  }
  
  const currentColors = colorClasses[textColor]

  return (
    <Link href="/" className={`flex items-center gap-2.5 group ${className}`}>
      <div className={`${currentSize.container} bg-[var(--brand-navy)] rounded-xl flex items-center justify-center shadow-[var(--shadow-sm)] transition-shadow duration-[var(--duration-normal)] group-hover:shadow-[var(--shadow-md)]`}>
        <span className={`text-white font-bold tracking-tight ${currentSize.text}`}>MNS</span>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${currentSize.title} ${currentColors.title} leading-tight tracking-tight`}>
            MNS Bank
          </span>
          {showTagline && (
            <p className={`${currentSize.tagline} ${currentColors.tagline} leading-tight`}>
              Your Trusted Partner
            </p>
          )}
        </div>
      )}
    </Link>
  )
}
