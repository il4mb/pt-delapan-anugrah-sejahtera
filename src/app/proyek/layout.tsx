import { COMPANY_INFO } from '@/data/company';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Portofolio Proyek Jasa Konstruksi',
    description:
        `Lihat portofolio proyek jasa konstruksi ${COMPANY_INFO.name} untuk sektor gedung, jalan, jembatan, dan properti dengan standar kualitas tinggi.`,
    keywords: [
        'portofolio konstruksi',
        'portofolio konstruksi riau',
        'proyek jasa konstruksi',
        'proyek jasa konstruksi riau',
        'proyek infrastruktur indonesia',
        'proyek infrastruktur riau',
        'kontraktor berpengalaman',
    ],
    alternates: {
        canonical: '/proyek',
    },
    openGraph: {
        title: `Portofolio Proyek Konstruksi | ${COMPANY_INFO.name}`,
        description:
            `Kumpulan proyek konstruksi dan infrastruktur yang telah ditangani oleh tim profesional ${COMPANY_INFO.name}.`,
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