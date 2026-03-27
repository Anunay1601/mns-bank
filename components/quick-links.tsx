import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Calculator, TrendingUp, Phone, FileText, MapPin, HeadphonesIcon } from 'lucide-react'

interface QuickLink {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  color: string
}

const quickLinks: QuickLink[] = [
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "EMI Calculator",
    description: "Calculate your loan EMI instantly",
    link: "/emi-calculator",
    color: "text-blue-600 bg-blue-50"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Interest Rates",
    description: "Check current interest rates",
    link: "/interest-rates",
    color: "text-green-600 bg-green-50"
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Contact Us",
    description: "Get in touch with us",
    link: "/contact-us",
    color: "text-purple-600 bg-purple-50"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Apply Now",
    description: "Quick online application",
    link: "/application",
    color: "text-orange-600 bg-orange-50"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Find Branch",
    description: "Locate nearest branch/ATM",
    link: "/branches",
    color: "text-red-600 bg-red-50"
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: "Customer Support",
    description: "24/7 helpline available",
    link: "/contact-us",
    color: "text-teal-600 bg-teal-50"
  }
]

export default function QuickLinks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant access to our most used banking services and tools
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <Link href={link.link} key={index}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group h-full flex flex-col">
                <CardContent className="p-6 text-center flex-grow flex flex-col">
                  <div className={`w-16 h-16 ${link.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {link.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
