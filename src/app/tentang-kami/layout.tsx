import { COMPANY_INFO } from '@/data/company';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Tentang Kami: Perusahaan Jasa Konstruksi Berpengalaman',
    description:
        `Pelajari profil ${COMPANY_INFO.name}, visi, misi, nilai perusahaan, dan keunggulan kami sebagai mitra jasa konstruksi dan infrastruktur di Indonesia.`,
    keywords: [
        'tentang perusahaan konstruksi',
        'perusahaan konstruksi riau',
        'profil kontraktor',
        'profil kontraktor riau',
        'pt das',
        'perusahaan jasa konstruksi riau',
        'perusahaan jasa konstruksi indonesia',
    ],
    alternates: {
        canonical: '/tentang-kami',
    },
    openGraph: {
        title: `Profil ${COMPANY_INFO.name} | Perusahaan Jasa Konstruksi Indonesia`,
        description:
            `Kenali sejarah, kompetensi tim, dan komitmen kualitas ${COMPANY_INFO.name} sebagai perusahaan konstruksi terpercaya.`,
        url: `${COMPANY_INFO.website}/tentang-kami`,
        type: 'website',
    },
};

type AboutLayoutProps = {
    children: ReactNode;
};

export default function AboutLayout({ children }: Readonly<AboutLayoutProps>) {
    return children;
}
