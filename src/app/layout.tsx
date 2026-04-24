import Theme from "@/theme/Theme";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FloatingWhatsAppButton from "@/components/buttons/FloatingWhatsAppButton";

export const metadata: Metadata = {
    title: "PT. DELAPAN ANUGRAH SEJAHTERA | Company Profile",
    description: "Perusahaan profesional bidang konstruksi, pertambangan, perdagangan, real estate, dan jasa bisnis di Indonesia. Solusi bisnis terpercaya untuk masa depan Indonesia.",
    keywords: "konstruksi, pertambangan, real estate, trader, jasa konstruksi, infrastruktur",
    openGraph: {
        title: "PT. DELAPAN ANUGRAH SEJAHTERA",
        description: "Solusi Konstruksi & Bisnis Terpercaya untuk Masa Depan Indonesia",
        type: "website",
    },
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="id">
            <body>
                <Theme>
                    <Navbar />
                    {children}
                    <FloatingWhatsAppButton />
                    <Footer />
                </Theme>
            </body>
        </html>
    );
}
