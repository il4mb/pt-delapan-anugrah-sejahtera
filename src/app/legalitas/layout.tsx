import { COMPANY_INFO } from '@/data/company';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Legalitas, Perizinan, dan Sertifikasi Perusahaan Konstruksi',
    description:
        `Lihat dokumen legalitas, izin usaha, dan sertifikasi ${COMPANY_INFO.name} sebagai perusahaan jasa konstruksi yang patuh regulasi dan standar kualitas.`,
    keywords: [
        'legalitas perusahaan konstruksi',
        'legalitas kontraktor riau',
        'izin usaha konstruksi',
        'izin usaha konstruksi riau',
        'sertifikasi konstruksi',
        'sertifikasi kontraktor riau',
        'kontraktor legal indonesia',
    ],
    alternates: {
        canonical: '/legalitas',
    },
    openGraph: {
        title: `Legalitas & Sertifikasi Perusahaan Konstruksi | ${COMPANY_INFO.name}`,
        description:
            'Transparansi legalitas dan sertifikasi perusahaan untuk memastikan layanan konstruksi yang aman dan terpercaya.',
        url: `${COMPANY_INFO.website}/legalitas`,
        type: 'website',
    },
};

type LegalityLayoutProps = {
    children: ReactNode;
};

export default function LegalityLayout({ children }: Readonly<LegalityLayoutProps>) {
    return children;
}
