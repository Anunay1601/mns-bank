'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import {
  createPricingPlan as createPricingPlanData,
  updatePricingPlan as updatePricingPlanData,
  deletePricingPlan as deletePricingPlanData,
} from '@/lib/data';
import { isAuthenticated } from '@/lib/auth';

const CreatePricingSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  price: z.number().min(0, 'Price must be 0 or greater'),
  features: z.array(z.string().min(1, 'Feature cannot be empty')).min(1, 'At least one feature is required'),
});

const UpdatePricingSchema = CreatePricingSchema.partial();

export interface ActionState {
  success?: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
}

export async function createPricingAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { error: 'Unauthorized. Please sign in again.' };
  }

  const featuresJson = formData.get('features') as string;
  let features: string[] = [];
  
  try {
    features = JSON.parse(featuresJson || '[]');
  } catch {
    return { error: 'Invalid features format' };
  }

  const rawData = {
    name: formData.get('name') as string,
    price: Number(formData.get('price')),
    features,
  };

  const validatedFields = CreatePricingSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: 'Invalid form data',
      fieldErrors: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    await createPricingPlanData(validatedFields.data);
    revalidatePath('/admin/pricing');
    revalidatePath('/');
    return { success: true };
  } catch {
    return { error: 'Failed to create pricing plan' };
  }
}

export async function updatePricingAction(
  id: string,
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { error: 'Unauthorized. Please sign in again.' };
  }

  const featuresJson = formData.get('features') as string;
  let features: string[] = [];
  
  try {
    features = JSON.parse(featuresJson || '[]');
  } catch {
    return { error: 'Invalid features format' };
  }

  const rawData = {
    name: formData.get('name') as string,
    price: Number(formData.get('price')),
    features,
  };

  const validatedFields = UpdatePricingSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: 'Invalid form data',
      fieldErrors: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const result = await updatePricingPlanData(id, validatedFields.data);
    if (!result) {
      return { error: 'Pricing plan not found' };
    }
    revalidatePath('/admin/pricing');
    revalidatePath('/');
    return { success: true };
  } catch {
    return { error: 'Failed to update pricing plan' };
  }
}

export async function deletePricingAction(id: string): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { error: 'Unauthorized. Please sign in again.' };
  }

  try {
    const result = await deletePricingPlanData(id);
    if (!result) {
      return { error: 'Pricing plan not found' };
    }
    revalidatePath('/admin/pricing');
    revalidatePath('/');
    return { success: true };
  } catch {
    return { error: 'Failed to delete pricing plan' };
  }
}
