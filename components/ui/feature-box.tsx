import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { BoxContainer } from "./box-container"

interface FeatureBoxProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
  variant?: "default" | "elevated" | "bordered"
}

export function FeatureBox({ icon, title, description, className, variant = "elevated" }: FeatureBoxProps) {
  return (
    <BoxContainer variant={variant} className={cn("text-center group", className)}>
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </BoxContainer>
  )
}
