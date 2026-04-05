'use client';

import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ArrowDown, ArrowUp, Loader2, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  createPricingAction,
  updatePricingAction,
  type ActionState,
} from '@/app/admin/actions/pricing';
import type { PricingPlan } from '@/lib/types';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  price: z.number().min(0, 'Price must be 0 or greater'),
  features: z.array(
    z.object({
      value: z.string().min(1, 'Feature cannot be empty'),
    })
  ).min(1, 'At least one feature is required'),
});

type FormData = z.infer<typeof formSchema>;

interface PricingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plan?: PricingPlan | null;
}

const initialState: ActionState = {};

export function PricingForm({ open, onOpenChange, plan }: PricingFormProps) {
  const router = useRouter();
  const isEditing = !!plan;

  const boundAction = isEditing
    ? updatePricingAction.bind(null, plan.id)
    : createPricingAction;

  const [state, formAction, isPending] = useActionState(boundAction, initialState);

  const {
    register,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: plan?.name || '',
      price: plan?.price || 0,
      features: plan?.features.map((f) => ({ value: f })) || [{ value: '' }],
    },
  });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'features',
  });

  const features = watch('features');

  useEffect(() => {
    if (plan) {
      reset({
        name: plan.name,
        price: plan.price,
        features: plan.features.map((f) => ({ value: f })),
      });
    } else {
      reset({
        name: '',
        price: 0,
        features: [{ value: '' }],
      });
    }
  }, [plan, reset]);

  useEffect(() => {
    if (state.success) {
      toast.success(isEditing ? 'Pricing plan updated successfully' : 'Pricing plan created successfully');
      onOpenChange(false);
      router.refresh();
      reset();
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state, isEditing, onOpenChange, reset, router]);

  const handleSubmit = (formData: globalThis.FormData) => {
    // Add features as JSON
    const featuresArray = features.map((f) => f.value).filter((v) => v.trim() !== '');
    formData.set('features', JSON.stringify(featuresArray));
    formAction(formData);
  };

  const moveFeatureUp = (index: number) => {
    if (index > 0) {
      move(index, index - 1);
    }
  };

  const moveFeatureDown = (index: number) => {
    if (index < fields.length - 1) {
      move(index, index + 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Pricing Plan' : 'Add Pricing Plan'}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? 'Update the pricing plan details below.'
              : 'Add a new pricing plan to display on the website.'}
          </DialogDescription>
        </DialogHeader>

        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Plan Name *</Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Premium Account"
              aria-invalid={!!errors.name || !!state.fieldErrors?.name}
            />
            {(errors.name || state.fieldErrors?.name) && (
              <p className="text-sm text-destructive">
                {errors.name?.message || state.fieldErrors?.name?.[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Monthly Price (INR) *</Label>
            <Input
              id="price"
              type="number"
              min="0"
              step="1"
              {...register('price', { valueAsNumber: true })}
              placeholder="500"
              aria-invalid={!!errors.price || !!state.fieldErrors?.price}
            />
            <p className="text-xs text-muted-foreground">
              Enter 0 for free plans
            </p>
            {(errors.price || state.fieldErrors?.price) && (
              <p className="text-sm text-destructive">
                {errors.price?.message || state.fieldErrors?.price?.[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Features *</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => append({ value: '' })}
              >
                <Plus className="mr-1 h-3 w-3" />
                Add Feature
              </Button>
            </div>
            
            <div className="space-y-2">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2">
                  <div className="flex flex-col gap-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-xs"
                      onClick={() => moveFeatureUp(index)}
                      disabled={index === 0}
                    >
                      <ArrowUp className="h-3 w-3" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-xs"
                      onClick={() => moveFeatureDown(index)}
                      disabled={index === fields.length - 1}
                    >
                      <ArrowDown className="h-3 w-3" />
                    </Button>
                  </div>
                  <Input
                    {...register(`features.${index}.value`)}
                    placeholder={`Feature ${index + 1}`}
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => remove(index)}
                    disabled={fields.length === 1}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              ))}
            </div>
            {(errors.features || state.fieldErrors?.features) && (
              <p className="text-sm text-destructive">
                {errors.features?.message || state.fieldErrors?.features?.[0]}
              </p>
            )}
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
