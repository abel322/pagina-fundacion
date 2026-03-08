import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import { ContactForm } from "./contact-form"
import type { ContactInfo } from "@/lib/data"

interface ContactProps {
  contactInfo: ContactInfo
}

export function Contact({ contactInfo }: ContactProps) {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info - Server Rendered */}
          <div>
            <p className="text-sm uppercase tracking-wider text-accent mb-3">
              Contacto
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-6 text-balance">
              ¿Preguntas? Escríbenos.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              ¿Eres una empresa buscando alianzas? ¿Una persona con ganas de 
              ser voluntario? ¿Quieres saber mas sobre nuestros programas? 
              Estamos aquí para ayudarte.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-10">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>{contactInfo.email}</span>
              </a>
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>{contactInfo.phone}</span>
              </a>
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Síguenos en redes</p>
              <div className="flex gap-3">
                <a
                  href={contactInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Client Component */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
