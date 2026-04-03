import * as React from "react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BalanceCardProps {
  balance: number
  subtitle?: string
  currency?: string
  className?: string
  showToggle?: boolean
  defaultVisible?: boolean
}

function BalanceCard({
  balance,
  subtitle = "Total Balance",
  currency = "USD",
  className,
  showToggle = true,
  defaultVisible = true,
}: BalanceCardProps) {
  const [isVisible, setIsVisible] = React.useState(defaultVisible)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 text-white shadow-lg transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-12 translate-y-12 rounded-full bg-white/5 blur-xl" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header with toggle */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-medium text-white/80">{subtitle}</p>
          {showToggle && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleVisibility}
              className="h-8 w-8 rounded-full text-white/80 hover:bg-white/10 hover:text-white"
            >
              {isVisible ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              <span className="sr-only">
                {isVisible ? "Hide balance" : "Show balance"}
              </span>
            </Button>
          )}
        </div>

        {/* Balance display */}
        <div className="space-y-1">
          <div className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {isVisible ? (
              formatCurrency(balance)
            ) : (
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-8 w-8 animate-pulse rounded bg-white/20" />
                <span className="inline-block h-8 w-20 animate-pulse rounded bg-white/20" />
                <span className="inline-block h-8 w-16 animate-pulse rounded bg-white/20" />
              </span>
            )}
          </div>
          {isVisible && (
            <p className="text-sm text-white/70">
              {currency} • Available balance
            </p>
          )}
        </div>

        {/* Additional info (can be extended) */}
        <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span>Active</span>
          </div>
          <div>•</div>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-blue-400" />
            <span>Verified</span>
          </div>
          <div>Last updated: Just now</div>
        </div>
      </div>
    </div>
  )
}

export { BalanceCard }
