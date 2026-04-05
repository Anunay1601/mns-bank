import Link from 'next/link';
import { getDashboardStats } from '@/lib/data';
import { PageHeader } from '@/components/admin/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MessageSquareQuote,
  FileText,
  CreditCard,
  Mail,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  const cards = [
    {
      title: 'Testimonials',
      description: 'Customer reviews and feedback',
      icon: MessageSquareQuote,
      href: '/admin/testimonials',
      stats: {
        total: stats.testimonials.total,
        label: 'Active',
        value: stats.testimonials.active,
      },
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Blogs',
      description: 'Articles and news posts',
      icon: FileText,
      href: '/admin/blogs',
      stats: {
        total: stats.blogs.total,
        label: 'Published',
        value: stats.blogs.published,
      },
      color: 'from-sky-500 to-indigo-600',
    },
    {
      title: 'Pricing Plans',
      description: 'Account types and features',
      icon: CreditCard,
      href: '/admin/pricing',
      stats: {
        total: stats.pricing.total,
        label: 'Total Plans',
        value: stats.pricing.total,
      },
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Contact Queries',
      description: 'Customer inquiries',
      icon: Mail,
      href: '/admin/contacts',
      stats: {
        total: stats.contacts.total,
        label: 'Unread',
        value: stats.contacts.unread,
      },
      color: 'from-amber-500 to-orange-600',
      highlight: stats.contacts.unread > 0,
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Welcome to the MNS Bank Admin Panel. Manage your content from here."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Card
              key={card.href}
              className={`group relative overflow-hidden border-slate-200/70 transition-all hover:-translate-y-0.5 hover:shadow-xl ${
                card.highlight ? 'ring-2 ring-amber-400' : ''
              }`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.color}`}
              />
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${card.color}`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  {card.highlight && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                      {card.stats.value}
                    </span>
                  )}
                </div>
                <CardTitle className="mt-4 text-lg">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{card.stats.total}</span>
                  <span className="text-sm text-muted-foreground">
                    ({card.stats.value} {card.stats.label})
                  </span>
                </div>
                <Button asChild variant="outline" className="w-full group-hover:bg-muted">
                  <Link href={card.href}>
                    Manage
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Stats */}
      <Card className="border-slate-200/70">
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <CardTitle>Quick Overview</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-cyan-50 p-4">
              <p className="text-sm font-medium text-cyan-700">Active Testimonials</p>
              <p className="mt-1 text-2xl font-bold text-cyan-800">
                {stats.testimonials.active} / {stats.testimonials.total}
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-sm font-medium text-blue-600">Published Blogs</p>
              <p className="mt-1 text-2xl font-bold text-blue-700">
                {stats.blogs.published} / {stats.blogs.total}
              </p>
            </div>
            <div className="rounded-lg bg-emerald-50 p-4">
              <p className="text-sm font-medium text-emerald-700">Pricing Plans</p>
              <p className="mt-1 text-2xl font-bold text-emerald-800">
                {stats.pricing.total}
              </p>
            </div>
            <div className="rounded-lg bg-amber-50 p-4">
              <p className="text-sm font-medium text-amber-700">Pending Queries</p>
              <p className="mt-1 text-2xl font-bold text-amber-800">
                {stats.contacts.unread}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
