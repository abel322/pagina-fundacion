import { StoriesCarousel } from "./stories-carousel"
import type { Story } from "@/lib/data"

interface StoriesProps {
  stories: Story[]
}

export function Stories({ stories }: StoriesProps) {
  return (
    <section id="historias" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wider text-accent mb-3">
            Historias de Esperanza
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground text-balance">
            Rostros Detrás del Cambio
          </h2>
        </div>

        {/* Client-side Carousel */}
        <StoriesCarousel stories={stories} />
      </div>
    </section>
  )
}
