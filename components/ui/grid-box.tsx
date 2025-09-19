import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GridBoxProps {
  children: ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: "sm" | "md" | "lg" | "xl"
  responsive?: boolean
}

export function GridBox({ children, className, cols = 3, gap = "md", responsive = true }: GridBoxProps) {
  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  }

  const colClasses = responsive
    ? {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
        6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
      }
    : {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
      }

  return <div className={cn("grid", colClasses[cols], gapClasses[gap], className)}>{children}</div>
}
