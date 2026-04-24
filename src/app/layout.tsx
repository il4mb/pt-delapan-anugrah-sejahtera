import Theme from "@/theme/Theme";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FloatingWhatsAppButton from "@/components/buttons/FloatingWhatsAppButton";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
    metadataBase: new URL(COMPANY_INFO.website),
    title: {
        default: `${COMPANY_INFO.name} | Jasa Konstruksi & Infrastruktur Indonesia`,
        template: `%s | ${COMPANY_INFO.shortName}`,
    },
    description:
        `${COMPANY_INFO.name} adalah perusahaan jasa konstruksi, infrastruktur, real estate, dan layanan bisnis di Indonesia. Solusi profesional, legal, dan berpengalaman untuk proyek Anda.`,
    keywords: [
        "jasa konstruksi",
        "kontraktor indonesia",
        "jasa konstruksi riau",
        "kontraktor riau",
        "jasa konstruksi pekanbaru",
        "jasa konstruksi siak",
        "kontraktor sipil",
        "jasa infrastruktur",
        "konstruksi gedung",
        "konstruksi jalan dan jembatan",
        "real estate indonesia",
        "jasa pertambangan",
        "pt delapan anugrah sejahtera",
    ],
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    openGraph: {
        title: `${COMPANY_INFO.name} | Jasa Konstruksi & Infrastruktur`,
        description:
            "Perusahaan jasa konstruksi terpercaya untuk proyek gedung, jalan, jembatan, infrastruktur, dan real estate di Indonesia.",
        url: COMPANY_INFO.website,
        siteName: COMPANY_INFO.name,
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `${COMPANY_INFO.name} | Jasa Konstruksi Indonesia`,
        description:
            "Jasa konstruksi profesional untuk kebutuhan proyek korporat, pemerintah, dan industri di Indonesia.",
    },
    category: "construction",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="id">
            <head>
                <meta name="apple-mobile-web-app-title" content="DELAPAN ANUGRAH SEJAHTERA, PT." />
            </head>
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
