import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BoxContainerProps {
  children: ReactNode
  className?: string
  variant?: "default" | "elevated" | "bordered" | "glass"
  size?: "sm" | "md" | "lg" | "xl"
}

export function BoxContainer({ children, className, variant = "default", size = "md" }: BoxContainerProps) {
  const baseClasses = "rounded-xl transition-all duration-300"

  const variantClasses = {
    default: "bg-card border border-border shadow-lg hover:shadow-xl",
    elevated: "bg-card border border-border shadow-2xl hover:shadow-3xl transform hover:-translate-y-1",
    bordered: "bg-card border-2 border-border hover:border-primary/50",
    glass: "bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg",
  }

  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-12",
  }

  return <div className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}>{children}</div>
}
