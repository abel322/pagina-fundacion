"use client"

import { useEffect, useRef, useState } from "react"
import { ImpactCounter } from "./impact-counter"
import type { Stat } from "@/lib/data"

interface ImpactProps {
  stats: Stat[]
}

export function Impact({ stats }: ImpactProps) {
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
    <section 
      ref={sectionRef}
      id="impacto" 
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`inline-block text-sm font-bold text-primary uppercase tracking-wider mb-4 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Nuestro Impacto
          </span>
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Numeros que{" "}
            <span className="gradient-text">inspiran</span>
          </h2>
          <p 
            className={`text-lg text-muted-foreground transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Cada numero representa una historia de esperanza, una vida transformada 
            y un paso mas hacia un mundo mejor para nuestros ninos.
          </p>
        </div>

        {/* Stats */}
        <ImpactCounter stats={stats} />

        {/* Quote */}
        <div 
          className={`mt-20 max-w-4xl mx-auto text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <blockquote className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-serif">&ldquo;</div>
            <p className="text-xl md:text-2xl text-foreground/80 italic leading-relaxed">
              Cuando ayudamos a un nino, no solo cambiamos su vida, 
              transformamos generaciones enteras.
            </p>
            <footer className="mt-6">
              <div className="w-12 h-12 rounded-full bg-secondary mx-auto mb-3 flex items-center justify-center text-secondary-foreground font-bold">
                MG
              </div>
              <cite className="not-italic">
                <span className="font-bold text-foreground">Maria Gonzalez</span>
                <span className="block text-sm text-muted-foreground">Directora Fundadora</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
