"use client"

import { useEffect, useState, useRef } from "react"
import { Users, MapPin, HandHeart, TrendingUp } from "lucide-react"
import type { Stat } from "@/lib/data"

interface ImpactCounterProps {
  stats: Stat[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Ninos Beneficiados": Users,
  "Comunidades Alcanzadas": MapPin,
  "Voluntarios Activos": HandHeart,
  "de Donaciones Directas": TrendingUp,
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function ImpactCounter({ stats }: ImpactCounterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = iconMap[stat.label] || Users
        
        return (
          <div
            key={stat.id}
            className={`group p-8 rounded-3xl bg-card border border-border/50 text-center transition-all duration-500 hover-lift ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              {stat.label}
            </p>
          </div>
        )
      })}
    </div>
  )
}
