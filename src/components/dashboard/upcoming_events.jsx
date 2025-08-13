"use client";
import { cn } from "@/lib/utils"
import { Calendar, ArrowRight, CheckCircle2, Timer, AlertCircle, PiggyBank, TrendingUp, CreditCard, TreePalmIcon } from "lucide-react"
import React from "react"

const iconStyles = {
    savings: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100",
    investment: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100",
    debt: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100",
}

const status = {
    pending: { icon: Timer, class: "text-amber-400", bg: "bg-amber-900/30"},
    "in-progress": { icon: AlertCircle, class: "text-blue-400", bg: "bg-blue-900/30"},
    completed: { icon: CheckCircle2, class: "text-emerald-400", bg: "bg-emerald-900/30"}
}

const ITEMS = [
    { id: "1", title: "Emergency Fund", icon: PiggyBank, iconStyle: "savings", date: "Target: Jul 2025", amount: 1015000, status: "in-progress", progress: 65 },
    { id: "2", title: "Stock Portfolio", icon: TrendingUp, iconStyle: "investment", date: "Target: Jul 2025", amount: 150000, status: "pending", progress: 90 },
    { id: "3", title: "Debt Repayment", icon: CreditCard, iconStyle: "debt", date: "Target: Jul 2025", amount: 25000, status: "in-progress", progress: 45 },
    { id: "4", title: "Vacation Fund", icon: TreePalmIcon, iconStyle: "savings", date: "Target: Jul 2025", amount: 55000, status: "in-progress", progress: 20 },
    { id: "5", title: "Education Loan", icon: CreditCard, iconStyle: "debt", date: "Target: Jul 2025", amount: 525000, status: "in-progress", progress: 75 },
    { id: "6", title: "Car Loan", icon: CreditCard, iconStyle: "debt", date: "Target: Jul 2025", amount: 750000, status: "completed", progress: 100 }
]

export default function UpcomingEvents({ items = ITEMS, className }) {
  return (
    <div className={cn("w-full overflow-x-auto custom-scrollbar", className)}>
      <div className="flex gap-4 min-w-full p-1">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
                "flex flex-col", "w-[340px] shrink-0", "bg-card border border-border", //Change border border-border to glow-hover lift-up to better match the theme.
                "hover:border-zinc-700",
                "transition-all duration-200", "rounded-xl shadow-sm",
            )}
          >
            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className={cn(
                  "p-2 rounded-lg",
                  iconStyles[item.iconStyle] ?? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                )}>
                  <item.icon className="w-4 h-4" />
                </div>                <div
                  className={cn("px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1.5",
                    status[item.status].bg,
                    status[item.status].class,
                  )}
                >
                  {React.createElement(status[item.status].icon, { className: "w-5 h-5" })}
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">{item.title}</h3>
              </div>

              {typeof item.progress === "number" && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground">{item.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {item.amount && (
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium text-foreground">₹{item.amount.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-muted-foreground">target</span>
                </div>
              )}

              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                <span>{item.date}</span>
              </div>
            </div>

            <div className="mt-auto border-t border-border">
              <button
                className={cn(
                  "w-full flex items-center justify-center gap-2", "py-2.5 px-3", "text-xs font-medium",
                  "text-muted-foreground", "hover:text-foreground", "hover:bg-muted/50",
                  "transition-colors duration-200",
                )}
              >
                View Details
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}