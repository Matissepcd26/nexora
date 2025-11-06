import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Stats } from '@/components/stats'
import { CTA } from '@/components/cta'
import { Navigation } from '@/components/navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <CTA />
    </main>
  )
}
