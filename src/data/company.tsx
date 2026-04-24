import { BadgeCheck, Factory, Star, UserStar } from "lucide-react";

// Company Information
export const COMPANY_INFO = {
    name: 'PT. DELAPAN ANUGRAH SEJAHTERA',
    shortName: 'PT DAS',
    description: 'Solusi Konstruksi & Bisnis Terpercaya untuk Masa Depan Indonesia',
    tagline: 'Profesional, Terpercaya, Inovatif',
    location: 'Kabupaten Siak, Riau, Indonesia',
    phone: '+62 (0)761 123 456',
    whatsapp: '+62 812 3456 7890',
    email: 'info@ptdas.co.id',
    website: 'https://ptdas.co.id',
};

export const HERO_SECTION = {
    mainHeadline: 'Solusi Konstruksi & Bisnis Terpercaya untuk Masa Depan Indonesia',
    subheadline: 'Multi-sektor konstruksi, perdagangan, dan jasa bisnis dengan standar internasional',
    primaryCTA: 'Hubungi Kami',
    secondaryCTA: 'Lihat Layanan',
};

export const STATISTICS = [
    {
        icon: <Factory size={50} />,
        number: '15+',
        label: 'Sektor Usaha',
        description: 'Diversifikasi bisnis yang komprehensif',
    },
    {
        icon: <UserStar size={50} />,
        number: '200+',
        label: 'Tim Profesional',
        description: 'Ahli berpengalaman di bidangnya',
    },
    {
        icon: <BadgeCheck size={50} />,
        number: '100+',
        label: 'Proyek Selesai',
        description: 'Dengan track record terbaik',
    },
    {
        icon: <Star size={50} />,
        number: '20+',
        label: 'Tahun Pengalaman',
        description: 'Kepercayaan industri yang terbukti',
    },
];

export const ABOUT_COMPANY = {
    title: 'Tentang PT. DELAPAN ANUGRAH SEJAHTERA',
    description: `PT. DELAPAN ANUGRAH SEJAHTERA adalah perusahaan profesional yang berkomitmen untuk menyediakan 
solusi bisnis terpadu di berbagai sektor. Dengan pengalaman lebih dari 20 tahun, kami telah membangun 
reputasi sebagai mitra terpercaya bagi klien korporat dan pemerintah.`,
    mission:
        'Menjadi perusahaan pilihan utama dalam memberikan solusi konstruksi, perdagangan, dan jasa bisnis berkualitas tinggi dengan integritas penuh.',
    vision:
        'Menjadi pemimpin industri yang diakui secara nasional dengan standar kinerja internasional dan kontribusi positif terhadap pembangunan Indonesia.',
    values: [
        {
            image: '/collaborate.png',
            title: 'Integritas',
            description: 'Kejujuran dan etos kerja yang tinggi dalam setiap aspek bisnis',
        },
        {
            image: '/person-badge.png',
            title: 'Profesionalisme',
            description: 'Keahlian dan dedikasi dalam menjalankan setiap proyek',
        },
        {
            image: '/lean.png',
            title: 'Inovasi',
            description: 'Terus berkembang dengan teknologi dan metode terkini',
        },
        {
            image: '/upcycling.png',
            title: 'Keberlanjutan',
            description: 'Komitmen terhadap lingkungan dan tanggung jawab sosial',
        },
    ],
};

export const SERVICES = [
    {
        id: 1,
        title: 'Konstruksi Gedung',
        description: 'Pembangunan gedung komersial dan residensial dengan standar internasional',
        image: "/building-project.png",
        color: '#1e3c96',
        details: 'Gedung Perkantoran, Gedung Komersial, Gedung Residensial, Gedung Publik',
    },
    {
        id: 2,
        title: 'Konstruksi Jalan & Jembatan',
        description: 'Infrastruktur jalan dan jembatan yang kokoh dan tahan lama',
        image: '/road.png',
        color: '#2d5fb8',
        details: 'Jalan Raya, Jembatan, Underpass, Flyover',
    },
    {
        id: 3,
        title: 'Infrastruktur Sipil',
        description: 'Proyek infrastruktur besar skala nasional dan regional',
        image: '/blueprint.png',
        color: '#3d6fce',
        details: 'Bendungan, Kanal, Sistem Drainase, Infrastruktur Publik',
    },
    {
        id: 4,
        title: 'Pengolahan Air & Limbah',
        description: 'Sistem pengolahan air bersih dan limbah yang ramah lingkungan',
        image: '/water-tank.png',
        color: '#4d7fde',
        details: 'PDAM, IPAL, Treatment Air, Sistem Sanitasi',
    },
    {
        id: 5,
        title: 'Real Estate & Properti',
        description: 'Pengembangan proyek perumahan dan properti komersial',
        image: '/home-design.png',
        color: '#ff9500',
        details: 'Perumahan, Warehouse, Ruko, Apartemen',
    },
    {
        id: 6,
        title: 'Pertambangan & Penggalian',
        description: 'Operasi pertambangan dan ekstraksi sumber daya alam',
        image: '/wall-building.png',
        color: '#ffa500',
        details: 'Penggalian Pasir, Batu, Tanah, Logam Mulia',
    },
    {
        id: 7,
        title: 'Perdagangan & Supply',
        description: 'Distribusi material konstruksi dan kebutuhan industri',
        image: '/warehouse.png',
        color: '#ffb500',
        details: 'Material Bangunan, Semen, Baja, Peralatan Konstruksi',
    },
    {
        id: 8,
        title: 'Pertanian & Perkebunan',
        description: 'Pengelolaan lahan pertanian dan perkebunan berkelanjutan',
        image: '/plant-pot.png',
        color: '#ffc500',
        details: 'Kelapa Sawit, Karet, Kakao, Pertanian Organik',
    },
    {
        id: 9,
        title: 'Rental Alat Konstruksi',
        description: 'Sewa peralatan konstruksi modern dengan harga kompetitif',
        image: '/excavator.png',
        color: '#21bf73',
        details: 'Excavator, Dozer, Dump Truck, Tower Crane',
    },
    {
        id: 10,
        title: 'Mekanikal & Elektrikal',
        description: 'Instalasi sistem MEP dengan teknologi terkini',
        image: '/wave-power.png',
        color: '#1abc9c',
        details: 'HVAC, Instalasi Listrik, Plumbing, Fire Suppression',
    },
    {
        id: 11,
        title: 'Interior & Exterior Design',
        description: 'Desain dan finishing interior serta eksterior bangunan',
        image: '/home-renovation.png',
        color: '#9b59b6',
        details: 'Desain Interior, Renovasi, Finishing, Dekorasi',
    },
    {
        id: 12,
        title: 'Keamanan & Jasa Pendukung',
        description: 'Layanan keamanan dan jasa pendukung usaha profesional',
        image: '/home-repair.png',
        color: '#e74c3c',
        details: 'Security, Cleaning Service, Maintenance, Konsultasi',
    },
];

export const PROJECTS = [
    {
        id: 1,
        title: 'Gedung Perkantoran Pusat Niaga',
        category: 'Konstruksi Gedung',
        image: 'https://via.placeholder.com/600x400?text=Gedung+Perkantoran',
        description: 'Pembangunan gedung perkantoran 20 lantai di pusat kota',
        year: 2022,
        value: '$5.2M',
        status: 'Selesai',
    },
    {
        id: 2,
        title: 'Jalan Tol Lintas Provinsi',
        category: 'Konstruksi Jalan',
        image: 'https://via.placeholder.com/600x400?text=Jalan+Tol',
        description: 'Konstruksi jalan tol 45 km dengan 5 jembatan layang',
        year: 2023,
        value: '$28.5M',
        status: 'Selesai',
    },
    {
        id: 3,
        title: 'Perumahan Premium Terintegrasi',
        category: 'Real Estate',
        image: 'https://via.placeholder.com/600x400?text=Perumahan+Premium',
        description: 'Pengembangan perumahan 500 unit dengan fasilitas lengkap',
        year: 2022,
        value: '$15.8M',
        status: 'Selesai',
    },
    {
        id: 4,
        title: 'IPAL Sistem Biotop Regional',
        category: 'Pengolahan Air',
        image: 'https://via.placeholder.com/600x400?text=IPAL+Pengolahan+Air',
        description: 'Instalasi IPAL dengan kapasitas 1000 m³/hari',
        year: 2023,
        value: '$3.2M',
        status: 'Dalam Proses',
    },
    {
        id: 5,
        title: 'Warehouse Distribusi Logistik',
        category: 'Real Estate',
        image: 'https://via.placeholder.com/600x400?text=Warehouse+Logistik',
        description: 'Warehouse modern 10,000 m² dengan sistem otomasi',
        year: 2021,
        value: '$4.5M',
        status: 'Selesai',
    },
    {
        id: 6,
        title: 'Jembatan Penyeberangan Strategis',
        category: 'Konstruksi Jembatan',
        image: 'https://via.placeholder.com/600x400?text=Jembatan+Penyeberangan',
        description: 'Jembatan dengan bentang 250 meter menggunakan teknologi modern',
        year: 2023,
        value: '$8.7M',
        status: 'Selesai',
    },
];

export const LEGALITY = [
    {
        id: 1,
        title: 'Akta Pendirian PT',
        description: 'Akte Pendirian PT. DELAPAN ANUGRAH SEJAHTERA',
        document: 'Akta No. 123/2003',
        status: 'Terdaftar',
    },
    {
        id: 2,
        title: 'NPWP Perusahaan',
        description: 'Nomor Pokok Wajib Pajak',
        document: 'NPWP: 12.345.678.9-012.345',
        status: 'Aktif',
    },
    {
        id: 3,
        title: 'Sertifikat Usaha Kecil Menengah',
        description: 'Sertifikat KUMKM dari Kementerian UMKM',
        document: 'No. KUMKM/2023/12345',
        status: 'Terdaftar',
    },
    {
        id: 4,
        title: 'Izin Konstruksi',
        description: 'Izin Lingkungan & Izin Usaha Konstruksi',
        document: 'IUK No. 456/2023',
        status: 'Aktif',
    },
    {
        id: 5,
        title: 'Izin Perdagangan',
        description: 'Izin Usaha Perdagangan Besar & Eceran',
        document: 'IUT No. 789/2023',
        status: 'Aktif',
    },
    {
        id: 6,
        title: 'Sertifikat ISO',
        description: 'Sertifikasi ISO 9001:2015 - Quality Management',
        document: 'ISO Cert: QMS-2023-12345',
        status: 'Terdaftar',
    },
];

export const COMPANY_ADVANTAGES = [
    {
        title: 'Tim Profesional',
        description: 'Tenaga kerja berpengalaman dengan sertifikasi nasional dan internasional',
        image: '/together.png',
    },
    {
        title: 'Teknologi Modern',
        description: 'Peralatan dan teknologi konstruksi terkini untuk efisiensi maksimal',
        image: '/tool-box.png',
    },
    {
        title: 'Track Record Proven',
        description: '100+ proyek selesai dengan rating kepuasan klien 98%',
        image: '/verified.png',
    },
    {
        title: 'Standar Kualitas',
        description: 'Sertifikasi ISO 9001:2015 dan compliance dengan standar internasional',
        image: '/iso-cert.png',
    },
    {
        title: 'Komitmen Lingkungan',
        description: 'Praktik ramah lingkungan dan pembangunan berkelanjutan',
        image: '/green-tea.png',
    },
    {
        title: 'Layanan Purna Jual',
        description: 'Dukungan penuh dan maintenance berkala setelah proyek selesai',
        image: '/schedule.png',
    },
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: 'Ir. Budi Santoso',
        position: 'Direktur Utama PT. Maju Jaya',
        company: 'PT. Maju Jaya',
        message:
            'PT DAS telah menjadi partner terpercaya kami selama bertahun-tahun. Profesionalisme dan komitmen mereka dalam menyelesaikan proyek sangat luar biasa.',
        rating: 5,
        image: 'https://via.placeholder.com/100?text=Client+1',
    },
    {
        id: 2,
        name: 'Siti Nurhaliza',
        position: 'Project Manager',
        company: 'PT. Bangun Indonesia',
        message:
            'Kerjasama dengan PT DAS sangat memuaskan. Mereka selalu tepat waktu dan memperhatikan detail dalam setiap aspek pekerjaan.',
        rating: 5,
        image: 'https://via.placeholder.com/100?text=Client+2',
    },
    {
        id: 3,
        name: 'Ahmad Wijaya',
        position: 'VP Operations',
        company: 'PT. Logistik Nusantara',
        message:
            'Kualitas hasil kerja PT DAS tidak diragukan lagi. Kami rekomendasikan mereka sebagai kontraktor terbaik untuk proyek-proyek krusial.',
        rating: 5,
        image: 'https://via.placeholder.com/100?text=Client+3',
    },
];
