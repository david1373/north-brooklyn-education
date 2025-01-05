import { HeroSection } from './components/HeroSection'
import { PhilosophySection } from './components/PhilosophySection'
import { ServicesSection } from './components/ServicesSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { ConsultationSection } from './components/ConsultationSection'
import { NewsletterSection } from './components/NewsletterSection'
import { PartnersSection } from './components/PartnersSection'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBF0]">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <TestimonialsSection />
      <ConsultationSection />
      <NewsletterSection />
      <PartnersSection />
      <Footer />
    </main>
  )
}

