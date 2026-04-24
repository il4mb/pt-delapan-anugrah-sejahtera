import { COMPANY_INFO } from '@/data/company';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Tentang Kami: Perusahaan Jasa Konstruksi Berpengalaman',
    description:
        'Pelajari profil PT DAS, visi, misi, nilai perusahaan, dan keunggulan kami sebagai mitra jasa konstruksi dan infrastruktur di Indonesia.',
    keywords: [
        'tentang perusahaan konstruksi',
        'profil kontraktor',
        'pt das',
        'perusahaan jasa konstruksi indonesia',
    ],
    alternates: {
        canonical: '/tentang-kami',
    },
    openGraph: {
        title: 'Profil PT DAS | Perusahaan Jasa Konstruksi Indonesia',
        description:
            'Kenali sejarah, kompetensi tim, dan komitmen kualitas PT DAS sebagai perusahaan konstruksi terpercaya.',
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
