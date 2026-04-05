'use client';

import { useTransition } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Mail, Clock, ChevronDown, User, Check, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import { updateContactStatusAction } from '@/app/admin/actions/contacts';
import type { ContactQuery, ContactStatus } from '@/lib/types';

interface ContactCardProps {
  contact: ContactQuery;
  onStatusChange?: () => void;
}

const statusConfig: Record<ContactStatus, { label: string; color: string; icon: React.ReactNode }> = {
  Unread: {
    label: 'Unread',
    color: 'bg-amber-100 text-amber-800 border-amber-200',
    icon: <EyeOff className="h-3 w-3" />,
  },
  Read: {
    label: 'Read',
    color: 'bg-blue-100 text-blue-700 border-blue-200',
    icon: <Eye className="h-3 w-3" />,
  },
  Resolved: {
    label: 'Resolved',
    color: 'bg-green-100 text-green-700 border-green-200',
    icon: <Check className="h-3 w-3" />,
  },
};

export function ContactCard({ contact, onStatusChange }: ContactCardProps) {
  const [isPending, startTransition] = useTransition();
  const config = statusConfig[contact.status];

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleStatusChange = (newStatus: ContactStatus) => {
    if (newStatus === contact.status) return;

    startTransition(async () => {
      const result = await updateContactStatusAction(contact.id, newStatus);
      if (result.success) {
        toast.success(`Status updated to ${newStatus}`);
        onStatusChange?.();
      } else {
        toast.error(result.error || 'Failed to update status');
      }
    });
  };

  return (
    <Card
      className={`border-slate-200/80 transition-all hover:shadow-md ${
        contact.status === 'Unread' ? 'border-l-4 border-l-amber-400' : ''
      }`}
    >
      <CardHeader className="pb-2">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
              <User className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="truncate font-semibold">{contact.name}</h3>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-1 truncate text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-3 w-3" />
                {contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {formatDate(contact.createdAt)}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={isPending}
                  className={config.color}
                >
                  {config.icon}
                  <span className="ml-1">{config.label}</span>
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {(Object.keys(statusConfig) as ContactStatus[]).map((status) => (
                  <DropdownMenuItem
                    key={status}
                    onClick={() => handleStatusChange(status)}
                    className="flex items-center gap-2"
                  >
                    {statusConfig[status].icon}
                    {statusConfig[status].label}
                    {status === contact.status && <Check className="ml-auto h-4 w-4" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">{contact.message}</p>
      </CardContent>
    </Card>
  );
}
