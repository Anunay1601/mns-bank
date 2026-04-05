'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  MessageSquareQuote,
  FileText,
  CreditCard,
  Mail,
  LogOut,
  Menu,
  X,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { logout } from '@/app/admin/actions/auth';

const navItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Testimonials',
    href: '/admin/testimonials',
    icon: MessageSquareQuote,
  },
  {
    title: 'Blogs',
    href: '/admin/blogs',
    icon: FileText,
  },
  {
    title: 'Pricing',
    href: '/admin/pricing',
    icon: CreditCard,
  },
  {
    title: 'Contact Queries',
    href: '/admin/contacts',
    icon: Mail,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-xl shadow-blue-900/30">
          <Building2 className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-white">MNS Bank</h1>
          <p className="text-xs uppercase tracking-wider text-slate-400">Control Desk</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4 py-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={cn(
                'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
                active
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/30 text-white shadow-sm'
                  : 'text-slate-300/80 hover:bg-white/5 hover:text-white'
              )}
            >
              <Icon className={cn('h-5 w-5', active && 'text-cyan-300')} />
              <span>{item.title}</span>
              {active && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-300" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-white/10 p-4">
        <form action={logout}>
          <Button
            type="submit"
            variant="ghost"
            className="w-full justify-start gap-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Button>
        </form>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 border border-white/10 bg-slate-900/90 text-white lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-white/10 bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 lg:hidden',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <SidebarContent />
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-72 lg:flex-col lg:border-r lg:border-white/10 lg:bg-slate-950/95 lg:backdrop-blur-xl">
        <SidebarContent />
      </aside>
    </>
  );
}
