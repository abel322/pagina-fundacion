"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-secondary/50 mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">+15,000 ninos felices</span>
            </div>

            {/* Main heading */}
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-foreground">Creamos</span>
              <br />
              <span className="gradient-text">sonrisas</span>
              <br />
              <span className="text-foreground">que transforman</span>
            </h1>

            {/* Description */}
            <p 
              className={`text-lg text-muted-foreground max-w-md mb-10 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Cada donacion es una oportunidad para cambiar la vida de un nino. 
              Unete a nuestra comunidad y se parte del cambio.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
              >
                Quiero Donar
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 h-14 border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 font-bold text-base"
              >
                Conocer Mas
              </Button>
            </div>

            {/* Trust indicators */}
            <div 
              className={`flex items-center gap-6 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-bold text-secondary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="font-bold text-foreground">+2,500 voluntarios</div>
                <div className="text-sm text-muted-foreground">activos este mes</div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div 
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                  alt="Ninos felices"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border/50 animate-bounce-subtle">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">98%</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">De los fondos</div>
                    <div className="text-sm text-muted-foreground">van a programas</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-2xl -rotate-12" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
