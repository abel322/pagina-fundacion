"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Gift, Repeat, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { DonationOption } from "@/lib/data"

interface DonateProps {
  donationOptions: DonationOption[]
}

export function Donate({ donationOptions }: DonateProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState<"monthly" | "once">("monthly")
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

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  return (
    <section ref={sectionRef} id="donar" className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span 
              className={`inline-block text-sm font-bold text-primary uppercase tracking-wider mb-4 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Haz la Diferencia
            </span>
            <h2 
              className={`text-4xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Tu donacion{" "}
              <span className="text-primary">transforma</span> vidas
            </h2>
            <p 
              className={`text-lg text-background/70 mb-10 leading-relaxed transition-all duration-500 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Con tu apoyo, podemos continuar brindando educacion, salud y oportunidades 
              a miles de ninos. Cada aporte hace una diferencia real.
            </p>

            {/* Impact items */}
            <div className="space-y-4">
              {donationOptions.slice(0, 3).map((option, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-2xl bg-background/5 border border-background/10 transition-all duration-500 hover:bg-background/10 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center font-bold text-primary-foreground">
                    ${option.amount}
                  </div>
                  <p className="text-background/80">{option.impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Donation Form */}
          <div 
            className={`bg-background rounded-3xl p-8 text-foreground transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Donation Type Toggle */}
            <div className="flex gap-2 p-1.5 bg-muted rounded-full mb-8">
              <button
                onClick={() => setDonationType("monthly")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full font-semibold text-sm transition-all ${
                  donationType === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Repeat className="w-4 h-4" />
                Mensual
              </button>
              <button
                onClick={() => setDonationType("once")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full font-semibold text-sm transition-all ${
                  donationType === "once"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Gift className="w-4 h-4" />
                Unica vez
              </button>
            </div>

            {/* Amount Selection */}
            <p className="text-sm font-semibold text-muted-foreground mb-4">Selecciona un monto</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[25, 50, 100, 250].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    selectedAmount === amount
                      ? "bg-primary text-primary-foreground scale-105"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-muted-foreground mb-3">O ingresa otro monto</p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">$</span>
                <Input
                  type="number"
                  placeholder="Monto personalizado"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="pl-8 h-14 rounded-2xl border-2 border-border focus:border-primary text-lg"
                />
              </div>
            </div>

            {/* Donate Button */}
            <Button 
              size="lg"
              className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg group transition-all duration-300 hover:scale-[1.02]"
            >
              <Heart className="mr-2 w-5 h-5" />
              Donar ${selectedAmount || customAmount || 0} {donationType === "monthly" ? "/ mes" : ""}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Pago seguro. Puedes cancelar en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
