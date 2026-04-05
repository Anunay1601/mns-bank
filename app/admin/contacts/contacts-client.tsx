'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/admin/page-header';
import { Badge } from '@/components/ui/badge';
import { ContactCard } from './contact-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { ContactQuery, ContactStatus } from '@/lib/types';

interface ContactsClientProps {
  contacts: ContactQuery[];
}

export function ContactsClient({ contacts }: ContactsClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | ContactStatus>('all');

  const filteredContacts =
    activeTab === 'all' ? contacts : contacts.filter((contact) => contact.status === activeTab);

  const unreadCount = contacts.filter((contact) => contact.status === 'Unread').length;
  const readCount = contacts.filter((contact) => contact.status === 'Read').length;
  const resolvedCount = contacts.filter((contact) => contact.status === 'Resolved').length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Contact Queries"
        description="Manage customer inquiries and support requests."
        action={
          unreadCount > 0 && (
            <Badge variant="destructive" className="text-sm">
              {unreadCount} Unread
            </Badge>
          )
        }
      />

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as typeof activeTab)}>
        <TabsList className="h-auto w-full max-w-xl justify-start gap-2 rounded-xl border border-slate-200 bg-slate-100/80 p-1">
          <TabsTrigger value="all">
            All
            <Badge variant="secondary" className="ml-2">
              {contacts.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="Unread">
            Unread
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2">
                {unreadCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="Read">
            Read
            <Badge variant="secondary" className="ml-2">
              {readCount}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="Resolved">
            Resolved
            <Badge variant="secondary" className="ml-2">
              {resolvedCount}
            </Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filteredContacts.length === 0 ? (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <p className="text-muted-foreground">
                {activeTab === 'all'
                  ? 'No contact queries yet.'
                  : `No ${activeTab.toLowerCase()} queries.`}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredContacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  onStatusChange={() => router.refresh()}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
