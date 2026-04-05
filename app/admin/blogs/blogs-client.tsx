'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { deleteBlogAction, toggleBlogPublishedAction } from '@/app/admin/actions/blogs';
import { PageHeader } from '@/components/admin/page-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { DeleteDialog } from '@/components/admin/delete-dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Blog } from '@/lib/types';

interface BlogsClientProps {
  blogs: Blog[];
}

export function BlogsClient({ blogs }: BlogsClientProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleTogglePublished = (id: string, currentStatus: boolean) => {
    startTransition(async () => {
      const result = await toggleBlogPublishedAction(id, !currentStatus);
      if (result.success) {
        toast.success(`Blog ${!currentStatus ? 'published' : 'unpublished'}`);
        router.refresh();
      } else {
        toast.error(result.error || 'Failed to update status');
      }
    });
  };

  const handleDelete = () => {
    if (!deletingId) return;

    startTransition(async () => {
      const result = await deleteBlogAction(deletingId);
      if (result.success) {
        toast.success('Blog post deleted successfully');
        router.refresh();
      } else {
        toast.error(result.error || 'Failed to delete blog post');
      }
      setDeletingId(null);
    });
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Blogs"
        description="Manage blog posts and articles."
        action={
          <Button asChild>
            <Link href="/admin/blogs/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Post
            </Link>
          </Button>
        }
      />

      {blogs.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center">
          <p className="text-muted-foreground">No blog posts found. Add your first one!</p>
        </div>
      ) : (
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell className="font-medium">{blog.title}</TableCell>
                  <TableCell>
                    <code className="rounded bg-muted px-1 py-0.5 text-sm">/{blog.slug}</code>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={blog.isPublished}
                        onCheckedChange={() => handleTogglePublished(blog.id, blog.isPublished)}
                        disabled={isPending}
                      />
                      <Badge variant={blog.isPublished ? 'default' : 'secondary'}>
                        {blog.isPublished ? 'Published' : 'Draft'}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>{formatDate(blog.createdAt)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon-sm" asChild>
                        <Link href={`/admin/blogs/${blog.id}/edit`}>
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setDeletingId(blog.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <DeleteDialog
        open={!!deletingId}
        onOpenChange={(open) => !open && setDeletingId(null)}
        title="Delete Blog Post"
        description="Are you sure you want to delete this blog post? This action cannot be undone."
        onConfirm={handleDelete}
        isPending={isPending}
      />
    </div>
  );
}
