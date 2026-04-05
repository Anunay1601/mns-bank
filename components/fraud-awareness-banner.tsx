'use client'

import { useState } from 'react'
import { AlertTriangle, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export default function FraudAwarenessBanner() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="bg-gradient-to-r from-red-600/95 to-orange-600/95 text-white">
            <div className="container mx-auto px-[var(--space-4)] py-3">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm">
                      🛡️ Beware of Fraudulent Activities
                    </p>
                    <p className="text-xs opacity-90 leading-relaxed">
                      MNS Bank never asks for OTP, passwords, or sensitive information via phone/email. 
                      Report suspicious activity immediately.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="flex items-center gap-1.5 text-xs font-medium bg-white/10 rounded-full px-3 py-1.5">
                    <Phone className="w-3 h-3" />
                    <span>1800-123-4567</span>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsVisible(false)}
                    className="text-white hover:bg-white/15 w-7 h-7 p-0 rounded-full"
                    aria-label="Dismiss fraud awareness banner"
                  >
                    <X className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
