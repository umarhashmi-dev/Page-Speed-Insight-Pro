import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface HeroBoxProps {
  children: ReactNode
  className?: string
  background?: "default" | "gradient" | "pattern"
}

export function HeroBox({ children, className, background = "gradient" }: HeroBoxProps) {
  const backgroundClasses = {
    default: "bg-background",
    gradient: "bg-gradient-to-br from-background via-muted/10 to-background",
    pattern:
      "bg-background bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.05)_1px,_transparent_0)] bg-[length:20px_20px]",
  }

  return (
    <section className={cn("py-20 lg:py-32 relative overflow-hidden", backgroundClasses[background], className)}>
      <div className="container mx-auto px-4 relative z-10">{children}</div>
      {background === "pattern" && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      )}
    </section>
  )
}
