'use client'

import { useState } from 'react'
import { AlertTriangle, Shield, Phone, X, Lock, Eye, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FraudAwarenessBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white shadow-lg border-b-4 border-red-800 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left side - Warning content */}
          <div className="flex items-start space-x-4 flex-1">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="w-5 h-5 text-yellow-300" />
                <h3 className="font-bold text-lg text-white">
                  🛡️ Official Fraud Alert
                </h3>
              </div>
              <p className="text-white/95 font-medium mb-2">
                MNS Bank never asks for OTP, passwords, CVV, or sensitive information via phone/email/SMS.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                  <Lock className="w-4 h-4 text-yellow-300" />
                  <span>Never share OTP</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                  <Eye className="w-4 h-4 text-yellow-300" />
                  <span>Verify caller identity</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                  <AlertCircle className="w-4 h-4 text-yellow-300" />
                  <span>Report immediately</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 flex-shrink-0">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <Phone className="w-5 h-5 text-yellow-300" />
              <div>
                <p className="text-xs text-white/80">Report Fraud 24/7</p>
                <p className="font-bold text-lg">1800-123-4567</p>
              </div>
            </div>
            
            <Link href="/fraud-awareness">
              <Button 
                size="lg" 
                className="bg-white text-red-700 hover:bg-yellow-50 font-bold shadow-lg transform transition-all duration-300 hover:scale-105 border-2 border-yellow-300"
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </Link>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label="Close fraud alert"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom warning strip */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-6 text-xs text-white/80">
            <span>⚠️ Verify all communications</span>
            <span>•</span>
            <span>🔐 Use official website only</span>
            <span>•</span>
            <span>📞 Call us for verification</span>
          </div>
        </div>
      </div>
    </div>
  )
}
