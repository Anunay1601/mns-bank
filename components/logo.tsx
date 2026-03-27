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
      container: 'w-12 h-12',
      text: 'text-lg',
      title: 'text-xl',
      tagline: 'text-xs'
    },
    large: {
      container: 'w-16 h-16',
      text: 'text-xl',
      title: 'text-2xl',
      tagline: 'text-sm'
    }
  }

  const currentSize = sizeClasses[size]
  
  const colorClasses = {
    blue: {
      title: 'text-blue-900',
      tagline: 'text-gray-600'
    },
    white: {
      title: 'text-white',
      tagline: 'text-gray-300'
    }
  }
  
  const currentColors = colorClasses[textColor]

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      <div className={`${currentSize.container} bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center shadow-lg border border-blue-800/20`}>
        <span className={`text-white font-bold ${currentSize.text}`}>MNS</span>
      </div>
      {showText && (
        <div>
          <span className={`font-bold ${currentSize.title} ${currentColors.title} leading-tight`}>
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
