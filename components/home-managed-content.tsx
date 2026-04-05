import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getBlogs, getPricingPlans, getTestimonials } from '@/lib/data';

export default async function HomeManagedContent() {
  const [testimonials, blogs, pricingPlans] = await Promise.all([
    getTestimonials(),
    getBlogs(),
    getPricingPlans(),
  ]);

  const activeTestimonials = testimonials.filter((item) => item.isActive).slice(0, 3);
  const publishedBlogs = blogs
    .filter((item) => item.isPublished)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 3);
  const topPlans = pricingPlans.slice(0, 3);

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Managed From Admin Panel</h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Testimonials, blogs, and pricing below are loaded dynamically from admin-managed content.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-slate-200/80">
            <CardHeader>
              <CardTitle>Latest Testimonials</CardTitle>
              <CardDescription>Active testimonials managed from admin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeTestimonials.length > 0 ? (
                activeTestimonials.map((item) => (
                  <div key={item.id} className="rounded-md border border-slate-200 p-3">
                    <p className="line-clamp-2 text-sm text-slate-700">{item.content}</p>
                    <p className="mt-2 text-xs font-semibold text-slate-900">{item.name}</p>
                    {item.role && <p className="text-xs text-slate-500">{item.role}</p>}
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No active testimonials.</p>
              )}
              <Link href="/admin/testimonials" className="text-sm font-medium text-blue-700 hover:text-blue-800">
                Manage Testimonials
              </Link>
            </CardContent>
          </Card>

          <Card className="border-slate-200/80">
            <CardHeader>
              <CardTitle>Latest Blogs</CardTitle>
              <CardDescription>Published blogs from admin module</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {publishedBlogs.length > 0 ? (
                publishedBlogs.map((item) => (
                  <div key={item.id} className="rounded-md border border-slate-200 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="secondary">Published</Badge>
                      <span className="text-xs text-slate-500">
                        {item.createdAt.toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <p className="line-clamp-2 text-sm font-medium text-slate-900">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-500">/{item.slug}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No published blogs.</p>
              )}
              <Link href="/admin/blogs" className="text-sm font-medium text-blue-700 hover:text-blue-800">
                Manage Blogs
              </Link>
            </CardContent>
          </Card>

          <Card className="border-slate-200/80">
            <CardHeader>
              <CardTitle>Pricing Highlights</CardTitle>
              <CardDescription>Plans and pricing from admin module</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topPlans.length > 0 ? (
                topPlans.map((plan) => (
                  <div key={plan.id} className="rounded-md border border-slate-200 p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">{plan.name}</p>
                      <p className="text-sm font-bold text-slate-800">
                        {plan.price === 0 ? 'Free' : `Rs ${plan.price}/mo`}
                      </p>
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs text-slate-600">{plan.features.join(' | ')}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No pricing plans available.</p>
              )}
              <Link href="/admin/pricing" className="text-sm font-medium text-blue-700 hover:text-blue-800">
                Manage Pricing
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
