"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, Instagram, Facebook, Twitter, Youtube, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  organization: [
    { label: "Nuestra Historia", href: "#" },
    { label: "Equipo", href: "#" },
    { label: "Transparencia", href: "#" },
    { label: "Informes Anuales", href: "#" },
  ],
  programs: [
    { label: "Educacion", href: "#" },
    { label: "Salud", href: "#" },
    { label: "Comunidad", href: "#" },
    { label: "Voluntariado", href: "#" },
  ],
  support: [
    { label: "Donar", href: "#" },
    { label: "Empresas Aliadas", href: "#" },
    { label: "Legados", href: "#" },
    { label: "Tienda Solidaria", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="bg-muted/50">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4">
        <div className="py-16 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Unete a nuestra <span className="gradient-text">comunidad</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Recibe actualizaciones sobre nuestro impacto, historias inspiradoras 
              y nuevas formas de ayudar directamente en tu correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Tu correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-full px-6 border-2 border-border focus:border-primary"
              />
              <Button className="h-12 rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold whitespace-nowrap">
                Suscribirme
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-xl">Sonrisas</span>
                <p className="text-xs text-muted-foreground">Transformando vidas</p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs leading-relaxed">
              Desde 2010 trabajando por el bienestar de ninos en situacion de vulnerabilidad.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Organizacion</h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Programas</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Apoyanos</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>2026 Fundacion Sonrisas. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:contacto@fundacionsonrisas.org" className="hover:text-primary transition-colors">
                contacto@fundacionsonrisas.org
              </a>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terminos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
