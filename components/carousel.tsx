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
  const [direction, setDirection] = useState(1)

  const slides: CarouselSlide[] = [
    {
      title: t('homeLoansAt') + " 8.5%*",
      subtitle: t('dreamHomeEasyEMI'),
      description: t('homeLoanDescription'),
      cta: t('applyNow'),
      ctaLink: "/home-loan",
      bgColor: "bg-gradient-to-br from-[var(--brand-navy)] via-[var(--brand-navy-light)] to-[var(--brand-accent)]",
      visual: "home"
    },
    {
      title: t('personalLoansInstant'),
      subtitle: t('getApprovedIn5Minutes'),
      description: t('personalLoanDescription'),
      cta: t('checkEligibility'),
      ctaLink: "/personal-loan",
      bgColor: "bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500",
      visual: "mobile"
    },
    {
      title: t('savingsAccount'),
      subtitle: "6.5%* " + t('interestRate'),
      description: t('savingsDescription'),
      cta: t('openAccount'),
      ctaLink: "/savings-account",
      bgColor: "bg-gradient-to-br from-violet-800 via-purple-700 to-indigo-600",
      visual: "banking"
    }
  ]

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  }

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`absolute inset-0 ${slides[currentSlide].bgColor}`}
        >
          <div className="container mx-auto px-[var(--space-4)] md:px-[var(--space-6)] h-full flex items-center">
            <div className="grid md:grid-cols-2 gap-[var(--space-8)] items-center w-full">
              <div className="max-w-2xl text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-[var(--space-3)] leading-tight tracking-tight"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-lg md:text-xl mb-[var(--space-3)] opacity-90 font-light"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base mb-[var(--space-8)] opacity-75 max-w-xl leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-white/90 active:scale-[0.98] transition-all duration-[var(--duration-normal)] font-semibold shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]"
                    asChild
                  >
                    <a href={slides[currentSlide].ctaLink}>
                      {slides[currentSlide].cta}
                    </a>
                  </Button>
                </motion.div>
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/25 text-white border border-white/10 w-10 h-10 rounded-full transition-colors duration-[var(--duration-fast)]"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/25 text-white border border-white/10 w-10 h-10 rounded-full transition-colors duration-[var(--duration-fast)]"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ease-[var(--ease-smooth)] ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/40 w-1.5 hover:bg-white/60'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
