'use server';

import { redirect } from 'next/navigation';
import { verifyCredentials, createSession, deleteSession } from '@/lib/auth';

export interface LoginState {
  error?: string;
}

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  const isValid = verifyCredentials(email, password);

  if (!isValid) {
    return { error: 'Invalid email or password' };
  }

  await createSession();
  redirect('/admin');
}

export async function logout(): Promise<void> {
  await deleteSession();
  redirect('/admin/login');
}
