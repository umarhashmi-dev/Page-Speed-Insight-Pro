import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionBoxProps {
  children: ReactNode
  className?: string
  title?: string
  description?: string
  background?: "default" | "muted" | "gradient"
}

export function SectionBox({ children, className, title, description, background = "default" }: SectionBoxProps) {
  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    gradient: "bg-gradient-to-br from-background via-muted/20 to-background",
  }

  return (
    <section className={cn("py-16 lg:py-24", backgroundClasses[background], className)}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-12 lg:mb-16">
            {title && <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">{title}</h2>}
            {description && (
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
