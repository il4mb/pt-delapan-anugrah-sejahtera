import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Proyek & Portfolio | PT. DELAPAN ANUGRAH SEJAHTERA',
    description: 'Lihat portfolio proyek kami yang telah diselesaikan di berbagai sektor konstruksi, infrastruktur, dan real estate.',
};

export interface layoutProps {
    children?: ReactNode;
}
export default function layout({ children }: layoutProps) {
    return (
        <>{children}</>
    );
}