'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Calculator, TrendingUp, Phone, FileText, MapPin, HeadphonesIcon } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/fade-in-section'

interface QuickLink {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  color: string
  iconColor: string
}

const quickLinks: QuickLink[] = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "EMI Calculator",
    description: "Calculate your loan EMI instantly",
    link: "/emi-calculator",
    color: "bg-[var(--brand-accent-subtle)]",
    iconColor: "text-[var(--brand-accent)]"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Interest Rates",
    description: "Check current interest rates",
    link: "/interest-rates",
    color: "bg-[var(--color-success-light)]",
    iconColor: "text-[var(--color-success)]"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Contact Us",
    description: "Get in touch with us",
    link: "/contact-us",
    color: "bg-violet-50",
    iconColor: "text-violet-600"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Apply Now",
    description: "Quick online application",
    link: "/application",
    color: "bg-[var(--color-warning-light)]",
    iconColor: "text-amber-600"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Find Branch",
    description: "Locate nearest branch/ATM",
    link: "/branches",
    color: "bg-[var(--color-danger-light)]",
    iconColor: "text-[var(--color-danger)]"
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: "Customer Support",
    description: "24/7 helpline available",
    link: "/contact-us",
    color: "bg-teal-50",
    iconColor: "text-teal-600"
  }
]

export default function QuickLinks() {
  return (
    <section className="py-[var(--space-16)] bg-[var(--surface-secondary)]">
      <div className="container mx-auto px-[var(--space-4)]">
        <div className="text-center mb-[var(--space-12)]">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-[var(--space-3)] tracking-tight">
            Quick Access
          </h2>
          <p className="text-base text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            Get instant access to our most used banking services and tools
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[var(--space-4)]">
          {quickLinks.map((link, index) => (
            <StaggerItem key={index}>
              <Link href={link.link}>
                <Card className="group h-full flex flex-col border-[var(--border)] bg-[var(--surface-elevated)] shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-[var(--duration-normal)] ease-[var(--ease-smooth)] cursor-pointer">
                  <CardContent className="p-[var(--space-5)] text-center flex-grow flex flex-col items-center">
                    <div className={`w-14 h-14 ${link.color} ${link.iconColor} rounded-2xl flex items-center justify-center mb-[var(--space-3)] group-hover:scale-105 transition-transform duration-[var(--duration-normal)] ease-[var(--ease-smooth)]`}>
                      {link.icon}
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <h3 className="font-semibold text-sm text-[var(--foreground)] mb-1 group-hover:text-[var(--brand-accent)] transition-colors duration-[var(--duration-fast)]">
                        {link.title}
                      </h3>
                      <p className="text-xs text-[var(--muted-foreground)] leading-snug">
                        {link.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
