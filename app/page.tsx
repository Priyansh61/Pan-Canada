import Head from 'next/head';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Specialization } from '@/components/specialization';
import { Industries } from '@/components/industries';
import { WorkFocus } from '@/components/work-focus';
import { Team } from '@/components/team';
import { Stats } from '@/components/stats';
import { ProjectCTA } from '@/components/project-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        {/* Site Meta Information */}
        <title>Pan Canada Group | Expert Solutions for Your Industry</title>
        <meta name="description" content="Pan Canada Group provides innovative solutions across various industries. Discover our specialization, work focus, and team expertise today." />
        <meta name="keywords" content="Pan Canada Group, industries, solutions, expertise, Canada, specialization, work focus, team, stats" />
        <meta name="author" content="Pan Canada Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Pan Canada Group | Expert Solutions for Your Industry" />
        <meta property="og:description" content="Pan Canada Group provides innovative solutions across various industries. Discover our specialization, work focus, and team expertise today." />
        <meta property="og:image" content="/icon.ico" />
        <meta property="og:url" content="https://www.pancanadagroup.ca" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pan Canada Group | Expert Solutions for Your Industry" />
        <meta name="twitter:description" content="Pan Canada Group provides innovative solutions across various industries. Discover our specialization, work focus, and team expertise today." />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />

        {/* Site Icon */}
        <link rel="icon" href="/icon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      
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
    </>
  );
}
