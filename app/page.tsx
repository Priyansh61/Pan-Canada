import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Specialization } from '@/components/specialization'
import { Industries } from '@/components/industries'
import { WorkFocus } from '@/components/work-focus'
import { Team } from '@/components/team'
import { Stats } from '@/components/stats'
import { ProjectCTA } from '@/components/project-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Specialization />
      <Industries />
      <WorkFocus />
      <Team />
      <Stats />
      <ProjectCTA />
      <Footer />
    </main>
  )
}

