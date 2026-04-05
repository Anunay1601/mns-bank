'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import {
  createTestimonial as createTestimonialData,
  updateTestimonial as updateTestimonialData,
  deleteTestimonial as deleteTestimonialData,
} from '@/lib/data';
import { isAuthenticated } from '@/lib/auth';

const CreateTestimonialSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  role: z.string().max(100, 'Role is too long').optional(),
  content: z.string().min(10, 'Content must be at least 10 characters').max(1000, 'Content is too long'),
  isActive: z.boolean().default(true),
});

const UpdateTestimonialSchema = CreateTestimonialSchema.partial();

export interface ActionState {
  success?: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
}

export async function createTestimonialAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { error: 'Unauthorized. Please sign in again.' };
  }

  const rawData = {
    name: formData.get('name') as string,
    role: (formData.get('role') as string) || undefined,
    content: formData.get('content') as string,
    isActive: formData.get('isActive') === 'true',
  };

  const validatedFields = CreateTestimonialSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: 'Invalid form data',
      fieldErrors: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    await createTestimonialData(validatedFields.data);
    revalidatePath('/admin/testimonials');
    revalidatePath('/');
    return { success: true };
  } catch {
    return { error: 'Failed to create testimonial' };
  }
}

export async function updateTestimonialAction(
  id: string,
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { error: 'Unauthorized. Please sign in again.' };
  }

  const rawData = {
    name: formData.get('name') as string,
    role: (formData.get('role') as string) || undefined,
    content: formData.get('content') as string,
    isActive: formData.get('isActive') === 'true',
  };

  const validatedFields = UpdateTestimonialSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: 'Invalid form data',
      fieldErrors: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const result = await updateTestimonialData(id, validatedFields.data);
    if (!result) {
      return { error: 'Testimonial not found' };
    }
    revalidatePath('/admin/testimonials');
    revalidatePath('/');
    return { success: true };
  } catch {
    return { error: 'Failed to update testimonial' };
  }
}

export async function deleteTestimonialAction(id: string): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { error: 'Unauthorized. Please sign in again.' };
  }

  try {
    const result = await deleteTestimonialData(id);
    if (!result) {
      return { error: 'Testimonial not found' };
    }
    revalidatePath('/admin/testimonials');
    revalidatePath('/');
    return { success: true };
  } catch {
    return { error: 'Failed to delete testimonial' };
  }
}

export async function toggleTestimonialActiveAction(
  id: string,
  isActive: boolean
): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { error: 'Unauthorized. Please sign in again.' };
  }

  try {
    const result = await updateTestimonialData(id, { isActive });
    if (!result) {
      return { error: 'Testimonial not found' };
    }
    revalidatePath('/admin/testimonials');
    revalidatePath('/');
    return { success: true };
  } catch {
    return { error: 'Failed to update testimonial status' };
  }
}
