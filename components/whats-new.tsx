import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, TrendingUp, Award, Shield } from 'lucide-react'

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
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    title: "Reduced Home Loan Interest Rates",
    description: "Home loan interest rates now starting at just 8.5%* p.a. Limited time offer for new customers.",
    date: "2024-03-15",
    category: "Offers",
    link: "/home-loan"
  },
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: "Digital Banking Awards 2024",
    description: "MNS Bank wins 'Best Digital Banking Initiative' award at the National Banking Excellence Awards.",
    date: "2024-03-10",
    category: "Achievement",
    link: "/awards"
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-600" />,
    title: "Enhanced Security Features",
    description: "New AI-powered fraud detection system launched to protect your transactions 24/7.",
    date: "2024-03-05",
    category: "Security",
    link: "/security"
  },
  {
    icon: <Calendar className="w-6 h-6 text-orange-600" />,
    title: "Financial Literacy Camps",
    description: "Free financial literacy workshops organized across 50 cities this month. Register now!",
    date: "2024-03-01",
    category: "Events",
    link: "/events"
  }
]

const categoryColors: { [key: string]: string } = {
  "Offers": "bg-green-100 text-green-800",
  "Achievement": "bg-blue-100 text-blue-800",
  "Security": "bg-purple-100 text-purple-800",
  "Events": "bg-orange-100 text-orange-800"
}

export default function WhatsNew() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What&apos;s New
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, offers, and announcements from MNS Bank
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300 bg-card text-card-foreground">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  {item.icon}
                  <Badge className={categoryColors[item.category]}>
                    {item.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {item.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {new Date(item.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                  <a
                    href={item.link}
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/interest-rates"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View All News
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
