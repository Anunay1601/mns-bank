'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, TrendingUp, Award, Shield } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/fade-in-section'

interface NewsItem {
  icon: React.ReactNode
  title: string
  description: string
  date: string
  category: string
  link: string
}

const newsItems: NewsItem[] = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Reduced Home Loan Interest Rates",
    description: "Home loan interest rates now starting at just 8.5%* p.a. Limited time offer for new customers.",
    date: "2024-03-15",
    category: "Offers",
    link: "/home-loan"
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Digital Banking Awards 2024",
    description: "MNS Bank wins 'Best Digital Banking Initiative' award at the National Banking Excellence Awards.",
    date: "2024-03-10",
    category: "Achievement",
    link: "/awards"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Enhanced Security Features",
    description: "New AI-powered fraud detection system launched to protect your transactions 24/7.",
    date: "2024-03-05",
    category: "Security",
    link: "/security"
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Financial Literacy Camps",
    description: "Free financial literacy workshops organized across 50 cities this month. Register now!",
    date: "2024-03-01",
    category: "Events",
    link: "/events"
  }
]

const categoryColors: { [key: string]: string } = {
  "Offers": "bg-[var(--color-success-light)] text-[var(--color-success)]",
  "Achievement": "bg-[var(--brand-accent-subtle)] text-[var(--brand-accent)]",
  "Security": "bg-violet-50 text-violet-700",
  "Events": "bg-[var(--color-warning-light)] text-amber-700"
}

const iconColors: { [key: string]: string } = {
  "Offers": "text-[var(--color-success)]",
  "Achievement": "text-[var(--brand-accent)]",
  "Security": "text-violet-600",
  "Events": "text-amber-600"
}

export default function WhatsNew() {
  return (
    <section className="py-[var(--space-16)] bg-[var(--surface-primary)]">
      <div className="container mx-auto px-[var(--space-4)]">
        <div className="text-center mb-[var(--space-12)]">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-[var(--space-3)] tracking-tight">
            What&apos;s New
          </h2>
          <p className="text-base text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest news, offers, and announcements from MNS Bank
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-5)]">
          {newsItems.map((item, index) => (
            <StaggerItem key={index}>
              <Card className="group h-full border-[var(--border)] bg-[var(--surface-elevated)] shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all duration-[var(--duration-normal)] ease-[var(--ease-smooth)]">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${categoryColors[item.category]?.split(' ')[0] || 'bg-gray-100'}`}>
                      <span className={iconColors[item.category] || 'text-gray-600'}>
                        {item.icon}
                      </span>
                    </div>
                    <Badge className={`${categoryColors[item.category]} text-xs font-medium border-0 px-2.5 py-0.5`}>
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-semibold line-clamp-2 leading-snug tracking-tight group-hover:text-[var(--brand-accent)] transition-colors duration-[var(--duration-fast)]">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-[var(--muted-foreground)] mb-[var(--space-3)] line-clamp-3 leading-relaxed">
                    {item.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--muted-foreground)]">
                      {new Date(item.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                    <a
                      href={item.link}
                      className="text-[var(--brand-accent)] hover:text-[var(--brand-accent-light)] text-sm font-medium group/link inline-flex items-center gap-1 transition-colors duration-[var(--duration-fast)]"
                    >
                      Read More
                      <span className="inline-block group-hover/link:translate-x-0.5 transition-transform duration-[var(--duration-fast)]">→</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-[var(--space-8)]">
          <a
            href="/interest-rates"
            className="inline-flex items-center gap-1.5 text-[var(--brand-accent)] hover:text-[var(--brand-accent-light)] font-medium text-sm transition-colors duration-[var(--duration-fast)] group"
          >
            View All News
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-[var(--duration-fast)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
