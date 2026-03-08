"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Cause } from "@/lib/data"

interface CausesSectionProps {
  causes: Cause[]
}

function CauseCard({ cause, index, isVisible }: { cause: Cause; index: number; isVisible: boolean }) {
  const percentage = Math.round((cause.raised / cause.goal) * 100)
  const [isLiked, setIsLiked] = useState(false)
  
  return (
    <div 
      className={`group relative rounded-3xl bg-card overflow-hidden transition-all duration-500 hover-lift ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={cause.image}
          alt={cause.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Like Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute right-4 top-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isLiked 
              ? "bg-primary text-primary-foreground scale-110" 
              : "bg-background/80 backdrop-blur-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground"
          }`}
          aria-label="Añadir a favoritos"
        >
          <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
        </button>

        {/* Category */}
        <span className="absolute bottom-4 left-4 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
          {cause.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {cause.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
          {cause.description}
        </p>

        {/* Progress */}
        <div className="mb-5">
          <div className="h-2 rounded-full bg-muted overflow-hidden mb-3">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
              style={{ width: isVisible ? `${percentage}%` : "0%" }}
            />
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">
              Recaudado: <span className="font-bold text-foreground">${cause.raised.toLocaleString()}</span>
            </span>
            <span className="font-bold text-primary">{percentage}%</span>
          </div>
        </div>

        <Button 
          className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 group-hover:scale-[1.02]"
        >
          Donar Ahora
        </Button>
      </div>
    </div>
  )
}

export function CausesSection({ causes }: CausesSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="causas" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`inline-block text-sm font-bold text-primary uppercase tracking-wider mb-4 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Causas Activas
          </span>
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Causas que <span className="gradient-text">importan</span>
          </h2>
          <p 
            className={`text-lg text-muted-foreground transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Cada causa representa una oportunidad para cambiar vidas. 
            Elige la que mas te inspire y se parte del cambio.
          </p>
        </div>

        {/* Causes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {causes.map((cause, index) => (
            <CauseCard 
              key={cause.id} 
              cause={cause} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`text-center transition-all duration-500 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button 
            variant="outline"
            size="lg"
            className="rounded-full px-10 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold transition-all duration-300 hover:scale-105"
          >
            Ver Todas las Causas
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
