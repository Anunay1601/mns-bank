'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/admin/sidebar';
import { Toaster } from '@/components/ui/sonner';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginRoute = pathname === '/admin/login';

  if (isLoginRoute) {
    return (
      <>
        {children}
        <Toaster position="top-right" />
      </>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute -top-32 right-[-120px] h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-160px] left-[-80px] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <Sidebar />
      <main className="relative lg:pl-72">
        <div className="p-4 pt-16 lg:p-8 lg:pt-8">
          <div className="rounded-2xl border border-white/10 bg-white/95 p-4 shadow-2xl backdrop-blur-sm lg:p-6">
            {children}
          </div>
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
}
