// Simulación de datos que vendrían de una base de datos o API externa
// En producción, esto se conectaría a tu base de datos real

export interface Story {
  id: string
  name: string
  age: number
  location: string
  quote: string
  image: string
  program: string
}

export interface Cause {
  id: string
  title: string
  category: string
  description: string
  image: string
  goal: number
  raised: number
}

export interface Stat {
  id: string
  value: number
  suffix: string
  label: string
}

export interface Program {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
  socialLinks: {
    instagram: string
    facebook: string
    twitter: string
  }
}

export interface DonationOption {
  amount: number
  impact: string
}

// Funciones de obtención de datos (Server-side)
export async function getStories(): Promise<Story[]> {
  // Simula latencia de red/base de datos
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return [
    {
      id: "1",
      name: "Sofía",
      age: 12,
      location: "Guatemala",
      quote: "Gracias a la fundación pude volver a la escuela. Ahora sueño con ser doctora para ayudar a otros niños como yo.",
      image: "https://images.unsplash.com/photo-1595839261736-68c37a7f5899?q=80&w=1974&auto=format&fit=crop",
      program: "Educación para Todos",
    },
    {
      id: "2",
      name: "Carlos",
      age: 9,
      location: "Perú",
      quote: "Antes no podía estudiar porque tenía que ayudar en casa. Ahora tengo mis libros y una beca que me ayuda cada mes.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972&auto=format&fit=crop",
      program: "Becas Escolares",
    },
    {
      id: "3",
      name: "Ana María",
      age: 11,
      location: "Colombia",
      quote: "Los doctores de la fundación me ayudaron cuando estuve enferma. Ahora estoy sana y feliz con mi familia.",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop",
      program: "Salud Integral",
    },
  ]
}

export async function getStats(): Promise<Stat[]> {
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return [
    { id: "1", value: 15000, suffix: "+", label: "Niños Beneficiados" },
    { id: "2", value: 150, suffix: "+", label: "Comunidades Alcanzadas" },
    { id: "3", value: 500, suffix: "+", label: "Voluntarios Activos" },
    { id: "4", value: 98, suffix: "%", label: "de Donaciones Directas" },
  ]
}

export async function getPrograms(): Promise<Program[]> {
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return [
    {
      id: "1",
      title: "Educación para Todos",
      description: "Becas escolares, materiales educativos y apoyo académico para garantizar que cada niño tenga acceso a educación de calidad.",
      icon: "GraduationCap",
      features: ["Becas escolares", "Materiales educativos", "Tutorías personalizadas", "Clases de refuerzo"],
    },
    {
      id: "2",
      title: "Salud Integral",
      description: "Atención médica preventiva, nutrición balanceada y acceso a servicios de salud mental para el bienestar completo.",
      icon: "Heart",
      features: ["Chequeos médicos", "Vacunación", "Nutrición", "Apoyo psicológico"],
    },
    {
      id: "3",
      title: "Desarrollo Comunitario",
      description: "Fortalecemos a las familias y comunidades con programas de capacitación y desarrollo de habilidades.",
      icon: "Users",
      features: ["Talleres para padres", "Capacitación laboral", "Microempresas", "Liderazgo juvenil"],
    },
  ]
}

export async function getContactInfo(): Promise<ContactInfo> {
  await new Promise(resolve => setTimeout(resolve, 50))
  
  return {
    email: "contacto@fundacionsonrisas.org",
    phone: "+502 1234 5678",
    address: "Ciudad de Guatemala, Guatemala",
    socialLinks: {
      instagram: "https://instagram.com/fundacionsonrisas",
      facebook: "https://facebook.com/fundacionsonrisas",
      twitter: "https://twitter.com/fundsonrisas",
    },
  }
}

export async function getDonationOptions(): Promise<DonationOption[]> {
  await new Promise(resolve => setTimeout(resolve, 50))
  
  return [
    { amount: 25, impact: "Alimentación para 1 niño por 1 mes" },
    { amount: 50, impact: "Materiales escolares para 2 niños" },
    { amount: 100, impact: "Beca escolar mensual completa" },
    { amount: 250, impact: "Atención médica para 5 niños" },
  ]
}

export async function getCauses(): Promise<Cause[]> {
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return [
    {
      id: "1",
      title: "Educación para niñas en zonas rurales",
      category: "Educación",
      description: "Brindamos acceso a educación de calidad para niñas en comunidades remotas donde las oportunidades son limitadas.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop",
      goal: 100000,
      raised: 72000,
    },
    {
      id: "2",
      title: "Nutrición y alimentación escolar",
      category: "Salud y Nutrición",
      description: "Programa de alimentación que asegura comidas nutritivas diarias para niños en edad escolar.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
      goal: 120000,
      raised: 92000,
    },
    {
      id: "3",
      title: "Apoyo a familias vulnerables",
      category: "Desarrollo Comunitario",
      description: "Fortalecemos a familias con recursos y capacitación para mejorar su calidad de vida.",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop",
      goal: 80000,
      raised: 45000,
    },
    {
      id: "4",
      title: "Atención médica preventiva",
      category: "Salud",
      description: "Servicios de salud preventiva y vacunación para comunidades sin acceso a centros médicos.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      goal: 150000,
      raised: 98000,
    },
  ]
}

// Función para obtener todos los datos de la página
export async function getHomePageData() {
  const [stories, stats, programs, contactInfo, donationOptions, causes] = await Promise.all([
    getStories(),
    getStats(),
    getPrograms(),
    getContactInfo(),
    getDonationOptions(),
    getCauses(),
  ])

  return {
    stories,
    stats,
    programs,
    contactInfo,
    donationOptions,
    causes,
  }
}
