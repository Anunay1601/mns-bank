import { getContactQueries } from '@/lib/data';
import { ContactsClient } from './contacts-client';

export default async function ContactsPage() {
  const contacts = await getContactQueries();

  return <ContactsClient contacts={contacts} />;
}
