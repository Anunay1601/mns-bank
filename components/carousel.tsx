'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { BankingHeroImage, MobileBankingImage, HomeLoanImage } from '@/components/image-gallery'
import { useLanguage } from '@/contexts/LanguageContext'

interface CarouselSlide {
  title: string
  subtitle: string
  description: string
  cta: string
  ctaLink: string
  bgColor: string
  visual: 'banking' | 'mobile' | 'home'
}

export default function Carousel() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: CarouselSlide[] = [
    {
      title: t('homeLoansAt') + " 8.5%*",
      subtitle: t('dreamHomeEasyEMI'),
      description: t('homeLoanDescription'),
      cta: t('applyNow'),
      ctaLink: "/home-loan",
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-800",
      visual: "home"
    },
    {
      title: t('personalLoansInstant'),
      subtitle: t('getApprovedIn5Minutes'),
      description: t('personalLoanDescription'),
      cta: t('checkEligibility'),
      ctaLink: "/personal-loan",
      bgColor: "bg-gradient-to-r from-green-600 to-green-800",
      visual: "mobile"
    },
    {
      title: t('savingsAccount'),
      subtitle: "6.5%* " + t('interestRate'),
      description: t('savingsDescription'),
      cta: t('openAccount'),
      ctaLink: "/savings-account",
      bgColor: "bg-gradient-to-r from-purple-600 to-purple-800",
      visual: "banking"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${slides[currentSlide].bgColor}`}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="grid md:grid-cols-2 gap-8 items-center w-full">
              <div className="max-w-2xl text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-2">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-xl md:text-2xl mb-4 opacity-90">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-lg mb-8 opacity-80 max-w-xl">
                  {slides[currentSlide].description}
                </p>
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  asChild
                >
                  <a href={slides[currentSlide].ctaLink}>
                    {slides[currentSlide].cta}
                  </a>
                </Button>
              </div>
              <div className="hidden md:block">
                {slides[currentSlide].visual === 'home' && <HomeLoanImage />}
                {slides[currentSlide].visual === 'mobile' && <MobileBankingImage />}
                {slides[currentSlide].visual === 'banking' && <BankingHeroImage />}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
