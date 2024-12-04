import { Navbar } from '@/components/navbar'
import { ServicesHero } from '@/components/services-hero'
import { ServicesList } from '@/components/services-list'
import { Footer } from '@/components/footer'
import { ProjectCTA } from '@/components/project-cta'
import { ServicesVision } from '@/components/services-vision'

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
     <ServicesVision />

      <ServicesHero />
      <ServicesList />
      <ProjectCTA />
      <Footer />
    </main>
  )
}

