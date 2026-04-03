'use client'

import { BalanceCard } from "@/components/balance-card"

export default function BalanceCardDemo() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Balance Card Component</h1>
          <p className="text-muted-foreground">
            A modern fintech balance card with gradient background and visibility toggle
          </p>
        </div>

        {/* Grid of different card variations */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Standard card */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Standard Card</h3>
            <BalanceCard balance={12543.67} />
          </div>

          {/* Large balance */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Large Balance</h3>
            <BalanceCard balance={2847593.42} />
          </div>

          {/* Custom subtitle */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Custom Subtitle</h3>
            <BalanceCard 
              balance={3500.00} 
              subtitle="Savings Account"
              currency="EUR"
            />
          </div>

          {/* No toggle */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">No Toggle</h3>
            <BalanceCard 
              balance={890.12} 
              showToggle={false}
              subtitle="Checking Account"
            />
          </div>

          {/* Different currency */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">GBP Currency</h3>
            <BalanceCard 
              balance={15420.89} 
              currency="GBP"
              subtitle="Business Account"
            />
          </div>

          {/* Small balance */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Small Balance</h3>
            <BalanceCard 
              balance={45.67} 
              subtitle="Petty Cash"
            />
          </div>
        </div>

        {/* Dark mode preview */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Dark Mode Preview</h2>
          <div className="dark rounded-lg border bg-card p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <BalanceCard balance={98765.43} subtitle="Investment Portfolio" />
              <BalanceCard 
                balance={1234.56} 
                subtitle="Emergency Fund"
                currency="JPY"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
