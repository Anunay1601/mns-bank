'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { PageHeader } from '@/components/admin/page-header';
import { Button } from '@/components/ui/button';
import { TestimonialForm } from './testimonial-form';
import { TestimonialTable } from './testimonial-table';
import type { Testimonial } from '@/lib/types';

interface TestimonialsClientProps {
  testimonials: Testimonial[];
}

export function TestimonialsClient({ testimonials }: TestimonialsClientProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Testimonials"
        description="Manage customer testimonials displayed on the website."
        action={
          <Button onClick={() => setIsFormOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Testimonial
          </Button>
        }
      />

      <TestimonialTable testimonials={testimonials} />

      <TestimonialForm open={isFormOpen} onOpenChange={setIsFormOpen} testimonial={null} />
    </div>
  );
}
