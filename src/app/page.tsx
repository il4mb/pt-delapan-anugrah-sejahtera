'use client';

import HeroSection from '@/sections/HeroSection';
import StatisticsSection from '@/sections/StatisticsSection';
import ServicesSection from '@/sections/ServicesSection';
import AboutSection from '@/sections/AboutSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import CTASection from '@/sections/CTASection';
import { COMPANY_INFO } from '@/data/company';

export default function Home() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: COMPANY_INFO.name,
        alternateName: COMPANY_INFO.shortName,
        url: COMPANY_INFO.website,
        logo: `${COMPANY_INFO.website}/logo.png`,
        description: COMPANY_INFO.description,
        email: COMPANY_INFO.email,
        telephone: COMPANY_INFO.phone,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Siak',
            addressRegion: 'Riau',
            addressCountry: 'ID',
        },
        sameAs: [`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`],
    };

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: COMPANY_INFO.name,
        url: COMPANY_INFO.website,
        image: `${COMPANY_INFO.website}/logo.png`,
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        areaServed: 'Indonesia',
        address: {
            '@type': 'PostalAddress',
            streetAddress: COMPANY_INFO.location,
            addressCountry: 'ID',
        },
        priceRange: '$$$',
        serviceType: ['Jasa Konstruksi', 'Jasa Infrastruktur', 'Kontraktor Gedung', 'Kontraktor Jalan dan Jembatan'],
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <HeroSection />
            <StatisticsSection />
            <ServicesSection />
            <AboutSection />
            <TestimonialsSection />
            <CTASection />
        </main>
    );
}
