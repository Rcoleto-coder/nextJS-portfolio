import Navbar from './components/Navbar';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0F172A] ">
      <Navbar />
      {/* margin top 24px so the nav bar does not overlaps the Header */}
      <section className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </section>
    </main>
  )
}
