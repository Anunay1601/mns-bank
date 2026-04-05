'use client';

import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  createTestimonialAction,
  updateTestimonialAction,
  type ActionState,
} from '@/app/admin/actions/testimonials';
import type { Testimonial } from '@/lib/types';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  role: z.string().max(100, 'Role is too long').optional(),
  content: z.string().min(10, 'Content must be at least 10 characters').max(1000, 'Content is too long'),
  isActive: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

interface TestimonialFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  testimonial?: Testimonial | null;
}

const initialState: ActionState = {};

export function TestimonialForm({ open, onOpenChange, testimonial }: TestimonialFormProps) {
  const router = useRouter();
  const isEditing = !!testimonial;

  const boundUpdateAction = isEditing
    ? updateTestimonialAction.bind(null, testimonial.id)
    : createTestimonialAction;

  const [state, formAction, isPending] = useActionState(boundUpdateAction, initialState);

  const {
    register,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: testimonial?.name || '',
      role: testimonial?.role || '',
      content: testimonial?.content || '',
      isActive: testimonial?.isActive ?? true,
    },
  });

  const isActive = watch('isActive');

  useEffect(() => {
    if (testimonial) {
      reset({
        name: testimonial.name,
        role: testimonial.role || '',
        content: testimonial.content,
        isActive: testimonial.isActive,
      });
    } else {
      reset({
        name: '',
        role: '',
        content: '',
        isActive: true,
      });
    }
  }, [testimonial, reset]);

  useEffect(() => {
    if (state.success) {
      toast.success(isEditing ? 'Testimonial updated successfully' : 'Testimonial created successfully');
      onOpenChange(false);
      router.refresh();
      reset();
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state, isEditing, onOpenChange, reset, router]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Testimonial' : 'Add Testimonial'}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? 'Update the testimonial details below.'
              : 'Add a new customer testimonial to display on the website.'}
          </DialogDescription>
        </DialogHeader>

        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="John Doe"
              aria-invalid={!!errors.name || !!state.fieldErrors?.name}
            />
            {(errors.name || state.fieldErrors?.name) && (
              <p className="text-sm text-destructive">
                {errors.name?.message || state.fieldErrors?.name?.[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role (optional)</Label>
            <Input
              id="role"
              {...register('role')}
              placeholder="Business Owner"
            />
            {(errors.role || state.fieldErrors?.role) && (
              <p className="text-sm text-destructive">
                {errors.role?.message || state.fieldErrors?.role?.[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content *</Label>
            <Textarea
              id="content"
              {...register('content')}
              placeholder="Write the testimonial content..."
              rows={4}
              aria-invalid={!!errors.content || !!state.fieldErrors?.content}
            />
            {(errors.content || state.fieldErrors?.content) && (
              <p className="text-sm text-destructive">
                {errors.content?.message || state.fieldErrors?.content?.[0]}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between rounded-lg border p-3">
            <div>
              <Label htmlFor="isActive" className="font-medium">
                Active
              </Label>
              <p className="text-sm text-muted-foreground">
                Display this testimonial on the website
              </p>
            </div>
            <Switch
              id="isActive"
              checked={isActive}
              onCheckedChange={(checked) => setValue('isActive', checked)}
            />
            <input type="hidden" name="isActive" value={String(isActive)} />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isEditing ? 'Updating...' : 'Creating...'}
                </>
              ) : isEditing ? (
                'Update'
              ) : (
                'Create'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
