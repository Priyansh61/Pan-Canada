import { Navbar } from '@/components/navbar'
import { AboutHero } from '@/components/about-hero'
import { AboutStats } from '@/components/about-stats'
import { AboutStory } from '@/components/about-story'
import { WhyChooseUs } from '@/components/why-choose-us'
import { AboutMission } from '@/components/about-mission'
import { AboutFeatures } from '@/components/about-features'
import { Footer } from '@/components/footer'
import { Team } from '@/components/team'
import { ProjectCTA } from '@/components/project-cta'

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <WhyChooseUs />
      <AboutMission />
      <AboutFeatures />
      <Team />
      <ProjectCTA />
      <Footer />
    </main>
  )
}

