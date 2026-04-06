'use client'

import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useState } from 'react'

export function LanguageToggle() {
  const [mounted, setMounted] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
        <Button
          onClick={toggleLanguage}
          size="sm"
          className="rounded-full w-12 h-12 p-0 bg-transparent hover:bg-gray-100 border-0"
          title={language === 'EN' ? 'Switch to Hindi' : 'Switch to English'}
        >
          <Languages className="h-5 w-5 text-gray-700" />
          <span className="sr-only">
            {language === 'EN' ? 'Switch to Hindi' : 'Switch to English'}
          </span>
        </Button>
      </div>
      <div className="mt-2 text-center">
        <span className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded-full shadow-sm border border-gray-200">
          {language === 'EN' ? 'EN' : 'हिं'}
        </span>
      </div>
    </div>
  )
}
