'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Pencil, Trash2, Check, IndianRupee } from 'lucide-react';
import { toast } from 'sonner';
import { deletePricingAction } from '@/app/admin/actions/pricing';
import { PageHeader } from '@/components/admin/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DeleteDialog } from '@/components/admin/delete-dialog';
import { PricingForm } from './pricing-form';
import type { PricingPlan } from '@/lib/types';

interface PricingClientProps {
  plans: PricingPlan[];
}

export function PricingClient({ plans }: PricingClientProps) {
  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<PricingPlan | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!deletingId) return;

    startTransition(async () => {
      const result = await deletePricingAction(deletingId);
      if (result.success) {
        toast.success('Pricing plan deleted successfully');
        router.refresh();
      } else {
        toast.error(result.error || 'Failed to delete pricing plan');
      }
      setDeletingId(null);
    });
  };

  const formatPrice = (price: number) => {
    if (price === 0) return 'Free';
    return `${price}/month`;
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pricing Plans"
        description="Manage account types and pricing."
        action={
          <Button onClick={() => setIsFormOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Plan
          </Button>
        }
      />

      {plans.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center">
          <p className="text-muted-foreground">No pricing plans found. Add your first one!</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plans.map((plan) => (
            <Card key={plan.id} className="relative flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <div className="mt-2 flex items-baseline gap-1">
                      {plan.price > 0 && <IndianRupee className="h-4 w-4 text-muted-foreground" />}
                      <span className="text-2xl font-bold">{formatPrice(plan.price)}</span>
                    </div>
                  </div>
                  {plan.price === 0 && <Badge variant="secondary">Free</Badge>}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="flex gap-2 border-t p-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => setEditingPlan(plan)}
                >
                  <Pencil className="mr-1 h-3 w-3" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" onClick={() => setDeletingId(plan.id)}>
                  <Trash2 className="h-3 w-3 text-destructive" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <PricingForm open={isFormOpen} onOpenChange={setIsFormOpen} plan={null} />

      <PricingForm
        open={!!editingPlan}
        onOpenChange={(open) => !open && setEditingPlan(null)}
        plan={editingPlan}
      />

      <DeleteDialog
        open={!!deletingId}
        onOpenChange={(open) => !open && setDeletingId(null)}
        title="Delete Pricing Plan"
        description="Are you sure you want to delete this pricing plan? This action cannot be undone."
        onConfirm={handleDelete}
        isPending={isPending}
      />
    </div>
  );
}
