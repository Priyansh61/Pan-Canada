import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TeamHero } from '@/components/team-hero'
import { Team } from '@/components/team'
import { ProjectCTA } from '@/components/project-cta'

export default function TeamsPage() {
  return (
    <main>
      <Navbar />
      <TeamHero />
      <Team/>
      <ProjectCTA />
      <Footer />
    </main>
  )
}

