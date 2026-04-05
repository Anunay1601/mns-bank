'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import {
  createBlog as createBlogData,
  updateBlog as updateBlogData,
  deleteBlog as deleteBlogData,
} from '@/lib/data';
import { isAuthenticated } from '@/lib/auth';

// Utility function to create slug from title
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const CreateBlogSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title is too long'),
  slug: z.string().min(1, 'Slug is required').max(200, 'Slug is too long'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  isPublished: z.boolean().default(false),
});

const UpdateBlogSchema = CreateBlogSchema.partial();

export interface ActionState {
  success?: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
}

export async function createBlogAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { error: 'Unauthorized. Please sign in again.' };
  }

  const title = formData.get('title') as string;
  let slug = formData.get('slug') as string;
  
  // Auto-generate slug if empty
  if (!slug && title) {
    slug = slugify(title);
  }

  const rawData = {
    title,
    slug,
    content: formData.get('content') as string,
    isPublished: formData.get('isPublished') === 'true',
  };

  const validatedFields = CreateBlogSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: 'Invalid form data',
      fieldErrors: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    await createBlogData(validatedFields.data);
    revalidatePath('/admin/blogs');
    revalidatePath('/');
  } catch {
    return { error: 'Failed to create blog post' };
  }

  redirect('/admin/blogs');
}

export async function updateBlogAction(
  id: string,
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { error: 'Unauthorized. Please sign in again.' };
  }

  const title = formData.get('title') as string;
  let slug = formData.get('slug') as string;
  
  // Auto-generate slug if empty
  if (!slug && title) {
    slug = slugify(title);
  }

  const rawData = {
    title,
    slug,
    content: formData.get('content') as string,
    isPublished: formData.get('isPublished') === 'true',
  };

  const validatedFields = UpdateBlogSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: 'Invalid form data',
      fieldErrors: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const result = await updateBlogData(id, validatedFields.data);
    if (!result) {
      return { error: 'Blog post not found' };
    }
    revalidatePath('/admin/blogs');
    revalidatePath('/');
  } catch {
    return { error: 'Failed to update blog post' };
  }

  redirect('/admin/blogs');
}

export async function deleteBlogAction(id: string): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { error: 'Unauthorized. Please sign in again.' };
  }

  try {
    const result = await deleteBlogData(id);
    if (!result) {
      return { error: 'Blog post not found' };
    }
    revalidatePath('/admin/blogs');
    revalidatePath('/');
    return { success: true };
  } catch {
    return { error: 'Failed to delete blog post' };
  }
}

export async function toggleBlogPublishedAction(
  id: string,
  isPublished: boolean
): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { error: 'Unauthorized. Please sign in again.' };
  }

  try {
    const result = await updateBlogData(id, { isPublished });
    if (!result) {
      return { error: 'Blog post not found' };
    }
    revalidatePath('/admin/blogs');
    revalidatePath('/');
    return { success: true };
  } catch {
    return { error: 'Failed to update blog status' };
  }
}
