'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { DeleteDialog } from '@/components/admin/delete-dialog';
import { TestimonialForm } from './testimonial-form';
import { Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  deleteTestimonialAction,
  toggleTestimonialActiveAction,
} from '@/app/admin/actions/testimonials';
import type { Testimonial } from '@/lib/types';

interface TestimonialTableProps {
  testimonials: Testimonial[];
}

export function TestimonialTable({ testimonials }: TestimonialTableProps) {
  const router = useRouter();
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleToggleActive = (id: string, currentStatus: boolean) => {
    startTransition(async () => {
      const result = await toggleTestimonialActiveAction(id, !currentStatus);
      if (result.success) {
        toast.success(`Testimonial ${!currentStatus ? 'activated' : 'deactivated'}`);
        router.refresh();
      } else {
        toast.error(result.error || 'Failed to update status');
      }
    });
  };

  const handleDelete = () => {
    if (!deletingId) return;
    
    startTransition(async () => {
      const result = await deleteTestimonialAction(deletingId);
      if (result.success) {
        toast.success('Testimonial deleted successfully');
        router.refresh();
      } else {
        toast.error(result.error || 'Failed to delete testimonial');
      }
      setDeletingId(null);
    });
  };

  const truncateContent = (content: string, maxLength: number = 100) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength) + '...';
  };

  if (testimonials.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center">
        <p className="text-muted-foreground">No testimonials found. Add your first one!</p>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="max-w-xs">Content</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testimonials.map((testimonial) => (
              <TableRow key={testimonial.id}>
                <TableCell className="font-medium">{testimonial.name}</TableCell>
                <TableCell>
                  {testimonial.role || (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell className="max-w-xs">
                  <p className="truncate" title={testimonial.content}>
                    {truncateContent(testimonial.content)}
                  </p>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={testimonial.isActive}
                      onCheckedChange={() =>
                        handleToggleActive(testimonial.id, testimonial.isActive)
                      }
                      disabled={isPending}
                    />
                    <Badge variant={testimonial.isActive ? 'default' : 'secondary'}>
                      {testimonial.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => setEditingTestimonial(testimonial)}
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => setDeletingId(testimonial.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <TestimonialForm
        open={!!editingTestimonial}
        onOpenChange={(open) => !open && setEditingTestimonial(null)}
        testimonial={editingTestimonial}
      />

      <DeleteDialog
        open={!!deletingId}
        onOpenChange={(open) => !open && setDeletingId(null)}
        title="Delete Testimonial"
        description="Are you sure you want to delete this testimonial? This action cannot be undone."
        onConfirm={handleDelete}
        isPending={isPending}
      />
    </>
  );
}
