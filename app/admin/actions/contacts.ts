'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { updateContactQueryStatus } from '@/lib/data';
import { isAuthenticated } from '@/lib/auth';
import type { ContactStatus } from '@/lib/types';

const UpdateContactStatusSchema = z.object({
  status: z.enum(['Unread', 'Read', 'Resolved']),
});

export interface ActionState {
  success?: boolean;
  error?: string;
}

export async function updateContactStatusAction(
  id: string,
  status: ContactStatus
): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { error: 'Unauthorized. Please sign in again.' };
  }

  const validatedFields = UpdateContactStatusSchema.safeParse({ status });

  if (!validatedFields.success) {
    return { error: 'Invalid status' };
  }

  try {
    const result = await updateContactQueryStatus(id, status);
    if (!result) {
      return { error: 'Contact query not found' };
    }
    revalidatePath('/admin/contacts');
    return { success: true };
  } catch {
    return { error: 'Failed to update contact status' };
  }
}
