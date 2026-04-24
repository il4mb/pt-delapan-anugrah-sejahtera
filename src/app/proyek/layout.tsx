import { COMPANY_INFO } from '@/data/company';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Portofolio Proyek Jasa Konstruksi',
    description:
        'Lihat portofolio proyek jasa konstruksi PT DAS untuk sektor gedung, jalan, jembatan, dan properti dengan standar kualitas tinggi.',
    keywords: [
        'portofolio konstruksi',
        'proyek jasa konstruksi',
        'proyek infrastruktur indonesia',
        'kontraktor berpengalaman',
    ],
    alternates: {
        canonical: '/proyek',
    },
    openGraph: {
        title: 'Portofolio Proyek Konstruksi | PT DAS',
        description:
            'Kumpulan proyek konstruksi dan infrastruktur yang telah ditangani oleh tim profesional PT DAS.',
        url: `${COMPANY_INFO.website}/proyek`,
        type: 'website',
    },
};

export interface layoutProps {
    children?: ReactNode;
}
export default function layout({ children }: layoutProps) {
    return (
        <>{children}</>
    );
}