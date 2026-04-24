import { COMPANY_INFO } from '@/data/company';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: `Kontak Jasa Konstruksi ${COMPANY_INFO.name}`,
    description:
        `Hubungi ${COMPANY_INFO.name} untuk konsultasi jasa konstruksi, infrastruktur, dan proyek properti. Tersedia kontak WhatsApp, telepon, email, dan lokasi kantor.`,
    keywords: [
        'kontak jasa konstruksi',
        'kontak jasa konstruksi riau',
        'konsultasi konstruksi',
        'konsultasi konstruksi riau',
        'whatsapp kontraktor',
        'kontraktor riau',
        'kontak pt das',
    ],
    alternates: {
        canonical: '/kontak',
    },
    openGraph: {
        title: `Kontak ${COMPANY_INFO.name} | Konsultasi Jasa Konstruksi`,
        description:
            'Konsultasi langsung untuk kebutuhan proyek konstruksi dan infrastruktur melalui WhatsApp, telepon, atau email.',
        url: `${COMPANY_INFO.website}/kontak`,
        type: 'website',
    },
};

type ContactLayoutProps = {
    children: ReactNode;
};

export default function ContactLayout({ children }: Readonly<ContactLayoutProps>) {
    return children;
}
