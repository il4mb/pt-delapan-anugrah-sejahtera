import { COMPANY_INFO } from '@/data/company';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Layanan Jasa Konstruksi, Infrastruktur, dan Properti',
    description:
        'Layanan PT DAS mencakup jasa konstruksi gedung, jalan, jembatan, infrastruktur sipil, real estate, pertambangan, dan layanan pendukung bisnis.',
    keywords: [
        'jasa konstruksi',
        'layanan konstruksi',
        'jasa infrastruktur',
        'kontraktor gedung',
        'kontraktor jalan',
        'jasa real estate',
    ],
    alternates: {
        canonical: '/layanan',
    },
    openGraph: {
        title: 'Layanan Jasa Konstruksi dan Infrastruktur | PT DAS',
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
