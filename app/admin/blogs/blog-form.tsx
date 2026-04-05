'use client';

import { useActionState, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import {
  createBlogAction,
  updateBlogAction,
  type ActionState,
} from '@/app/admin/actions/blogs';
import type { Blog } from '@/lib/types';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title is too long'),
  slug: z.string().min(1, 'Slug is required').max(200, 'Slug is too long'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  isPublished: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

interface BlogFormProps {
  blog?: Blog | null;
}

const initialState: ActionState = {};

// Utility function to create slug from title
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function BlogForm({ blog }: BlogFormProps) {
  const isEditing = !!blog;
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const boundAction = isEditing
    ? updateBlogAction.bind(null, blog.id)
    : createBlogAction;

  const [state, formAction, isPending] = useActionState(boundAction, initialState);

  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: blog?.title || '',
      slug: blog?.slug || '',
      content: blog?.content || '',
      isPublished: blog?.isPublished ?? false,
    },
  });

  const title = watch('title');
  const isPublished = watch('isPublished');

  // Auto-generate slug from title (only if not manually edited)
  useEffect(() => {
    if (!slugManuallyEdited && title && !isEditing) {
      setValue('slug', slugify(title));
    }
  }, [title, slugManuallyEdited, setValue, isEditing]);

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/blogs">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">
            {isEditing ? 'Edit Blog Post' : 'Create Blog Post'}
          </h1>
          <p className="text-sm text-muted-foreground">
            {isEditing
              ? 'Update the blog post details below.'
              : 'Add a new blog post to publish on the website.'}
          </p>
        </div>
      </div>

      <form action={formAction}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    {...register('title')}
                    placeholder="Enter blog title"
                    aria-invalid={!!errors.title || !!state.fieldErrors?.title}
                  />
                  {(errors.title || state.fieldErrors?.title) && (
                    <p className="text-sm text-destructive">
                      {errors.title?.message || state.fieldErrors?.title?.[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    {...register('slug', {
                      onChange: () => setSlugManuallyEdited(true),
                    })}
                    placeholder="blog-post-url-slug"
                    aria-invalid={!!errors.slug || !!state.fieldErrors?.slug}
                  />
                  <p className="text-xs text-muted-foreground">
                    Auto-generated from title. Edit to customize the URL.
                  </p>
                  {(errors.slug || state.fieldErrors?.slug) && (
                    <p className="text-sm text-destructive">
                      {errors.slug?.message || state.fieldErrors?.slug?.[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content (HTML) *</Label>
                  <Textarea
                    id="content"
                    {...register('content')}
                    placeholder="<h2>Introduction</h2><p>Write your blog content here...</p>"
                    rows={15}
                    className="font-mono text-sm"
                    aria-invalid={!!errors.content || !!state.fieldErrors?.content}
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter HTML content. Use &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt; tags for formatting.
                  </p>
                  {(errors.content || state.fieldErrors?.content) && (
                    <p className="text-sm text-destructive">
                      {errors.content?.message || state.fieldErrors?.content?.[0]}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <Label htmlFor="isPublished" className="font-medium">
                      Published
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Make this post visible on the website
                    </p>
                  </div>
                  <Switch
                    id="isPublished"
                    checked={isPublished}
                    onCheckedChange={(checked) => setValue('isPublished', checked)}
                  />
                  <input type="hidden" name="isPublished" value={String(isPublished)} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {isEditing ? 'Updating...' : 'Creating...'}
                    </>
                  ) : isEditing ? (
                    'Update Post'
                  ) : (
                    'Create Post'
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <Link href="/admin/blogs">Cancel</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
