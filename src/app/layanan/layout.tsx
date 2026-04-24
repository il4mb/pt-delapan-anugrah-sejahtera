import { COMPANY_INFO } from '@/data/company';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Layanan Jasa Konstruksi, Infrastruktur, dan Properti',
    description:
        `Layanan ${COMPANY_INFO.name} mencakup jasa konstruksi gedung, jalan, jembatan, infrastruktur sipil, real estate, pertambangan, dan layanan pendukung bisnis.`,
    keywords: [
        'jasa konstruksi',
        'jasa konstruksi riau',
        'layanan konstruksi',
        'layanan konstruksi riau',
        'jasa infrastruktur',
        'kontraktor gedung',
        'kontraktor pekanbaru',
        'kontraktor jalan',
        'jasa konstruksi siak',
        'jasa real estate',
    ],
    alternates: {
        canonical: '/layanan',
    },
    openGraph: {
        title: `Layanan Jasa Konstruksi dan Infrastruktur | ${COMPANY_INFO.name}`,
        description:
            'Temukan layanan konstruksi dan infrastruktur terpadu untuk proyek korporat, pemerintah, dan industri.',
        url: `${COMPANY_INFO.website}/layanan`,
        type: 'website',
    },
};

type ServicesLayoutProps = {
    children: ReactNode;
};

export default function ServicesLayout({ children }: Readonly<ServicesLayoutProps>) {
    return children;
}
