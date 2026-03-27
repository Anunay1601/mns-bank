'use client'

import { useState } from 'react'
import { AlertTriangle, Shield, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FraudAwarenessBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-2 md:mb-0">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-sm md:text-base">
                🛡️ Beware of Fraudulent Activities
              </p>
              <p className="text-xs md:text-sm opacity-90">
                MNS Bank never asks for OTP, passwords, or sensitive information via phone/email. 
                Report suspicious activity immediately.
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4" />
              <span>Report Fraud: 1800-123-4567</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
