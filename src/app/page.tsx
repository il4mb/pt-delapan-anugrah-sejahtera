import HeroSection from '@/sections/HeroSection';
import StatisticsSection from '@/sections/StatisticsSection';
import ServicesSection from '@/sections/ServicesSection';
import AboutSection from '@/sections/AboutSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import CTASection from '@/sections/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
