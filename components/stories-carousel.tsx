"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Story } from "@/lib/data"

interface StoriesCarouselProps {
  stories: Story[]
}

export function StoriesCarousel({ stories }: StoriesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const currentStory = stories[currentIndex]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <img
            src={currentStory.image}
            alt={`Historia de ${currentStory.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="text-xs uppercase tracking-wider text-accent">
              {currentStory.program}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <Quote className="w-10 h-10 text-primary/30 mb-6" />
          <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            {currentStory.quote}
          </blockquote>
          <div className="mb-8">
            <p className="font-medium text-foreground text-lg">
              {currentStory.name}, {currentStory.age} años
            </p>
            <p className="text-muted-foreground">{currentStory.location}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevStory}
              aria-label="Historia anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Ir a historia ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextStory}
              aria-label="Siguiente historia"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
