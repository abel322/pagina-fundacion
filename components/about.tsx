"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Users, BookOpen, Shield, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Heart,
    title: "Amor",
    description: "Cada accion nace del corazon y el deseo genuino de ayudar.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Construimos redes de apoyo que transforman vidas juntos.",
  },
  {
    icon: BookOpen,
    title: "Educacion",
    description: "La educacion es la herramienta mas poderosa para el cambio.",
  },
  {
    icon: Shield,
    title: "Proteccion",
    description: "Garantizamos espacios seguros para el desarrollo integral.",
  },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span 
            className={`inline-block text-sm font-bold text-primary uppercase tracking-wider mb-4 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Quienes Somos
          </span>
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Creemos en el poder de{" "}
            <span className="gradient-text">cada sonrisa</span>
          </h2>
          <p 
            className={`text-lg text-muted-foreground leading-relaxed transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Desde 2010, hemos trabajado incansablemente para transformar la vida de miles de ninos, 
            brindandoles educacion, salud y esperanza para un futuro mejor.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              
              {/* Hover arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { value: "15,000+", label: "Ninos beneficiados" },
            { value: "150+", label: "Comunidades activas" },
            { value: "98%", label: "Fondos a programas" },
            { value: "14", label: "Anos de impacto" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-muted/50"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button 
            size="lg"
            className="rounded-full px-10 h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all duration-300 hover:scale-105"
          >
            Conoce Nuestra Historia
          </Button>
        </div>
      </div>
    </section>
  )
}
