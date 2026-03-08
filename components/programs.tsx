"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Heart, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Program } from "@/lib/data"

interface ProgramsProps {
  programs: Program[]
}

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Heart,
  Users,
}

const programImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
]

const programColors = [
  "from-primary/80 to-primary",
  "from-secondary to-secondary/80",
  "from-primary/60 to-secondary/60",
]

export function Programs({ programs }: ProgramsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProgram, setActiveProgram] = useState(0)
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
    <section ref={sectionRef} id="programas" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span 
              className={`inline-block text-sm font-bold text-primary uppercase tracking-wider mb-4 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Nuestros Programas
            </span>
            <h2 
              className={`text-4xl md:text-5xl font-bold leading-tight transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Como <span className="gradient-text">transformamos</span> vidas
            </h2>
          </div>
          <Button 
            variant="outline"
            className={`w-fit rounded-full px-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-500 delay-200 hover:scale-105 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Ver todos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = iconComponents[program.icon] || Heart
            
            return (
              <div
                key={program.id}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  activeProgram === index ? "lg:col-span-1" : ""
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
                onMouseEnter={() => setActiveProgram(index)}
              >
                {/* Background Image */}
                <div className="relative h-[400px] lg:h-[500px]">
                  <img
                    src={programImages[index]}
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${programColors[index]} opacity-80`} />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-background/20 backdrop-blur-sm flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                      {program.title}
                    </h3>
                    
                    <p className="text-primary-foreground/90 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {program.description}
                    </p>

                    {/* Features - shown on hover */}
                    <div className="space-y-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                      {program.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="mt-6 flex items-center gap-2 font-semibold group-hover:gap-4 transition-all duration-300">
                      Conocer mas
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
