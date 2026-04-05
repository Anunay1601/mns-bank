import { getBlogs } from '@/lib/data';
import { BlogsClient } from './blogs-client';

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return <BlogsClient blogs={blogs} />;
}
