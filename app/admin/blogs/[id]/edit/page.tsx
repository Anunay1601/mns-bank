import { notFound } from 'next/navigation';
import { getBlogById } from '@/lib/data';
import { BlogForm } from '../../blog-form';

interface EditBlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    notFound();
  }

  return <BlogForm blog={blog} />;
}
