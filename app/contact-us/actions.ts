'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { createContactQuery } from '@/lib/data';

const ContactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  phone: z.string().trim().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  email: z.string().trim().email('Please enter a valid email address'),
  inquiryType: z.string().trim().optional(),
  subject: z.string().trim().min(3, 'Subject must be at least 3 characters').max(150, 'Subject is too long'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000, 'Message is too long'),
});

export interface ContactFormState {
  success?: boolean;
  error?: string;
  referenceNumber?: string;
  fieldErrors?: Record<string, string[]>;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    inquiryType: (formData.get('inquiryType') as string) || undefined,
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      error: 'Please correct the highlighted fields and try again.',
      fieldErrors: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const { name, email, phone, inquiryType, subject, message } = validatedFields.data;
    const formattedMessage = [
      `Subject: ${subject}`,
      `Phone: ${phone}`,
      inquiryType ? `Inquiry Type: ${inquiryType}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    const query = await createContactQuery({
      name,
      email,
      message: formattedMessage,
    });

    revalidatePath('/admin/contacts');

    return {
      success: true,
      referenceNumber: `MNS${query.id.slice(-8).toUpperCase()}`,
    };
  } catch {
    return {
      error: 'Failed to submit your query. Please try again.',
    };
  }
}
