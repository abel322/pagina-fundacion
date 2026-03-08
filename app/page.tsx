import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { CausesSection } from "@/components/causes-section"
import { Impact } from "@/components/impact"
import { Donate } from "@/components/donate"
import { Footer } from "@/components/footer"
import { getHomePageData } from "@/lib/data"

// Force dynamic rendering - SSR on every request
export const dynamic = "force-dynamic"

export default async function HomePage() {
  // Fetch all data server-side
  const { stats, programs, donationOptions, causes } = await getHomePageData()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Programs programs={programs} />
      <CausesSection causes={causes} />
      <Impact stats={stats} />
      <Donate donationOptions={donationOptions} />
      <Footer />
    </main>
  )
}
