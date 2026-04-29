import { BadgeCheck, Factory, Star, UserStar } from "lucide-react";

const foundedDate = new Date('2018-03-06');
const currentDate = new Date();
const ageInYears = currentDate.getFullYear() - foundedDate.getFullYear() - (currentDate.getMonth() < foundedDate.getMonth() || (currentDate.getMonth() === foundedDate.getMonth() && currentDate.getDate() < foundedDate.getDate()) ? 1 : 0);

// Company Information
export const COMPANY_INFO = {
    name: 'PT. DELAPAN ANUGRAH SEJAHTERA',
    shortName: 'PT DAS',
    description: 'Solusi Konstruksi & Bisnis Terpercaya untuk Masa Depan Indonesia',
    tagline: 'Profesional, Terpercaya, Inovatif',
    location: 'Kabupaten Siak, Riau, Indonesia',
    phone: '+62 822 8801 4636',
    whatsapp: '+62 822 8801 4636',
    email:[
        'admin@delapan-anugrah-sejahtera.com',
        'ptdelapananugrahsejahtera@gmail.com',
        'delapananugerahsejahtera@gmail.com'
    ],
    website: 'https://delapan-anugrah-sejahtera.com',
    foundAt: foundedDate.toISOString().split('T')[0], // Format: YYYY-MM-DD
    ageInYears: ageInYears
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
        number: `${ageInYears}+`,
        label: 'Tahun Pengalaman',
        description: 'Kepercayaan industri yang terbukti',
    },
];

export const ABOUT_COMPANY = {
    title: 'Tentang PT. DELAPAN ANUGRAH SEJAHTERA',
    description: `PT. DELAPAN ANUGRAH SEJAHTERA adalah perusahaan profesional yang berkomitmen untuk menyediakan 
solusi bisnis terpadu di berbagai sektor. Dengan pengalaman lebih dari ${ageInYears} tahun, kami telah membangun 
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
        title: 'Pengecoran Jalan Beton dengan Ready Mix',
        category: 'Konstruksi Jalan',
        image: '/projects/01.jpeg',
        description: 'Proses pengecoran jalan menggunakan truk mixer beton ready mix yang dikerjakan bersama tim lapangan. Pekerjaan dilakukan dengan perataan permukaan beton untuk menghasilkan jalan yang kuat, rata, dan tahan lama.',
        status: 'Selesai',
    },
    {
        id: 2,
        title: 'Interior Ruangan dengan Finishing Custom Furniture',
        category: 'Interior Design',
        image: '/projects/02.jpeg',
        description: 'Tampilan interior ruangan dengan desain modern menggunakan finishing motif kayu pada dinding, rak display, dan pilar utama. Memberikan kesan elegan, rapi, serta cocok untuk area komersial maupun perkantoran.',
        status: 'Selesai',
    },
    {
        id: 3,
        title: 'Pekerjaan Drainase dan Pemasangan Tulangan Beton',
        category: 'Infrastruktur Sipil',
        image: '/projects/03.jpeg',
        description: 'Proses pembangunan saluran drainase dengan pemasangan bekisting dan tulangan besi sebagai persiapan pengecoran dinding saluran. Struktur dirancang kokoh untuk mendukung sistem aliran air yang optimal.',
        status: 'Selesai',
    },
    {
        id: 4,
        title: 'Pembangunan Kanopi Baja Ringan Area Parkir',
        category: 'Konstruksi Baja Ringan',
        image: '/projects/04.jpeg',
        description: 'Instalasi kanopi rangka baja ringan dengan atap metal untuk area parkir kendaraan. Desain kokoh dan modern memberikan perlindungan maksimal dari panas serta hujan.',
        year: 2023,
        value: '$3.2M',
        status: 'Selesai',
    },
    {
        id: 5,
        title: 'Pekerjaan Perawatan dan Renovasi Gedung Bertingkat',
        category: 'Renovasi Gedung',
        image: '/projects/05.jpeg',
        description: 'Kegiatan renovasi eksterior gedung menggunakan scaffolding untuk akses pekerjaan di ketinggian. Meliputi pengecatan, perbaikan dinding, dan perawatan fasad bangunan agar tampak lebih baik serta terawat.',
        year: 2021,
        value: '$4.5M',
        status: 'Selesai',
    },
    {
        id: 6,
        title: 'Pembangunan Struktur & Rangka Atap Baja',
        category: 'Konstruksi Baja Berat',
        image: '/projects/06.jpeg',
        description: 'Pembangunan struktur utama gedung dengan pilar beton dan pemasangan presisi rangka atap baja berat. Pekerjaan ini menggunakan crane dan tenaga ahli untuk menjamin kekuatan sambungan konstruksi sesuai standar industrial.',
        status: 'Selesai',
    },
    {
        id: 7,
        title: 'Instalasi Tangki Penyimpanan Industri',
        category: 'Instalasi Industri',
        image: '/projects/07.jpeg',
        description: 'Pemasangan tangki penyimpanan bahan baku industri dengan kapasitas besar. Proses melibatkan pengelasan, pengujian kebocoran, dan penyesuaian posisi untuk memastikan keamanan serta efisiensi operasional.',
        status: 'Selesai',
    },
    {
        id: 8,
        title: 'Renovasi Atap Baja Ringan',
        category: 'Renovasi Atap',
        image: '/projects/08.jpeg',
        description: 'Pekerjaan renovasi atap menggunakan rangka baja ringan dengan penggantian genteng metal. Proses ini meningkatkan daya tahan atap terhadap cuaca ekstrem serta memberikan tampilan yang lebih modern.',
        status: 'Selesai',
    },
    {
        id: 9,
        title: 'Pemasangan Signage Dekranasda Siak',
        category: 'Pemasangan Signage',
        image: '/projects/09.jpeg',
        description: 'Pemasangan signage besar untuk Dekranasda Kabupaten Siak dengan desain yang mencolok dan pemasangan yang presisi. Signage ini berfungsi sebagai identitas visual yang kuat untuk lokasi strategis di area publik.',
        status: 'Selesai',
    }
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
    // {
    //     id: 6,
    //     title: 'Sertifikat ISO',
    //     description: 'Sertifikasi ISO 9001:2015 - Quality Management',
    //     document: 'ISO Cert: QMS-2023-12345',
    //     status: 'Terdaftar',
    // },
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
