import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { History, Users, Award, Shield, TrendingUp, Globe, Target, Heart, Building2 } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const milestones = [
    {
      year: "1950",
      title: "Foundation",
      description: "MNS Bank established with a vision to serve the nation",
      icon: <History className="w-6 h-6 text-blue-600" />
    },
    {
      year: "1980",
      title: "Expansion",
      description: "Expanded to 50 branches across major cities",
      icon: <Building2 className="w-6 h-6 text-green-600" />
    },
    {
      year: "2000",
      title: "Digital Era",
      description: "Launched internet banking and ATM services",
      icon: <Globe className="w-6 h-6 text-purple-600" />
    },
    {
      year: "2010",
      title: "Mobile Banking",
      description: "Introduced mobile banking app for customers",
      icon: <TrendingUp className="w-6 h-6 text-orange-600" />
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Complete digital banking suite launched",
      icon: <Award className="w-6 h-6 text-red-600" />
    },
    {
      year: "2024",
      title: "New Heights",
      description: "Serving 1 crore+ customers with 500+ branches",
      icon: <Target className="w-6 h-6 text-teal-600" />
    }
  ]

  const values = [
    {
      title: "Customer First",
      description: "We prioritize our customers' needs and build lasting relationships",
      icon: <Heart className="w-8 h-8 text-red-600" />
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty and transparency",
      icon: <Shield className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Innovation",
      description: "We continuously innovate to improve banking experience",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do",
      icon: <Award className="w-8 h-8 text-purple-600" />
    }
  ]

  const leadership = [
    {
      name: "Rajesh Kumar",
      position: "Managing Director & CEO",
      description: "30+ years of experience in banking and finance",
      image: "/team/md.jpg"
    },
    {
      name: "Priya Sharma",
      position: "Chief Operating Officer",
      description: "Expert in operations and customer service",
      image: "/team/coo.jpg"
    },
    {
      name: "Amit Patel",
      position: "Chief Technology Officer",
      description: "Leading digital transformation initiatives",
      image: "/team/cto.jpg"
    },
    {
      name: "Sunita Reddy",
      position: "Chief Financial Officer",
      description: "Expert in financial management and compliance",
      image: "/team/cfo.jpg"
    }
  ]

  const achievements = [
    {
      title: "1 Crore+ Customers",
      description: "Trusted by millions of customers nationwide",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      title: "500+ Branches",
      description: "Extensive network across India",
      icon: <Building2 className="w-8 h-8 text-green-600" />
    },
    {
      title: "₹50,000+ Crore",
      description: "Total business volume managed",
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />
    },
    {
      title: "24/7 Banking",
      description: "Round-the-clock digital banking services",
      icon: <Shield className="w-8 h-8 text-red-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About MNS Bank
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            For over seven decades, MNS Bank has been a trusted partner in India's banking journey, 
            combining traditional values with modern innovation to serve millions of customers.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To provide inclusive banking solutions that empower individuals and businesses to achieve 
                their financial goals through innovative products, exceptional service, and trusted partnerships.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To be India's most preferred bank by delivering superior value through customer-centric 
                approach, digital innovation, and sustainable growth.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      {milestone.icon}
                    </div>
                    <div>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {milestone.year}
                      </Badge>
                      <CardTitle className="text-lg">{milestone.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="mt-2">{milestone.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <CardDescription className="font-medium text-blue-600">
                    {leader.position}
                  </CardDescription>
                  <CardDescription className="text-sm mt-2">
                    {leader.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Join the MNS Bank Family
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience banking that combines trust, innovation, and excellence. 
            Open an account today and be part of our growing family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/savings-account">
                Open Account
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/contact-us">
                Contact Us
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/careers">
                Join Our Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
