'use client';

import { Container, Box, Typography, Grid } from '@mui/material';
import { SERVICES } from '@/data/company';
import ServiceCardComponent from '@/components/cards/ServiceCard';

export default function ServicesPage() {
    return (
        <Box sx={{ mb: 10 }}>
            {/* Hero Section */}
            <Box
                sx={{
                    pt: 16,
                    pb: 12,
                    background: 'linear-gradient(135deg, #1e3c96 0%, #152960 100%)',
                    color: 'white',
                }}>
                <Container maxWidth="lg">
                    <Typography component="h1" variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                        Layanan Kami
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9 }}>
                        Solusi bisnis lengkap untuk memenuhi kebutuhan Anda di berbagai sektor utama
                    </Typography>
                </Container>
            </Box>

            {/* Services Grid */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Grid container spacing={3}>
                    {SERVICES.map((service, idx) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
                            <ServiceCardComponent {...service} />
                        </Grid>
                    ))}
                </Grid>

                {/* Service Categories Info */}
                <Box sx={{ mt: 10, pt: 10, borderTop: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
                        Kategori Layanan Utama
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                                    Infrastruktur & Konstruksi
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: 'text.secondary' }}>
                                    Kami berspesialisasi dalam proyek konstruksi besar-besaran meliputi gedung, jalan,
                                    jembatan, dan infrastruktur sipil lainnya dengan menggunakan teknologi terkini dan
                                    tim ahli yang berpengalaman puluhan tahun.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'warning.main' }}>
                                    Pengembangan Properti & Real Estate
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                                    Portofolio real estate kami mencakup pengembangan perumahan premium, komersial,
                                    warehouse, dan properti investasi dengan fokus pada kualitas dan lokasi strategis
                                    untuk nilai maksimal bagi klien.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'success.main' }}>
                                    Pertambangan & Sumber Daya Alam
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                                    Operasi pertambangan dan ekstraksi sumber daya alam kami dijalankan dengan standar
                                    keselamatan internasional dan komitmen penuh terhadap keberlanjutan lingkungan
                                    serta tanggung jawab sosial korporat.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'error.main' }}>
                                    Jasa & Layanan Pendukung
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                                    Dari layanan keamanan profesional, cleaning service berkala, hingga konsultasi
                                    teknik spesifik, kami menyediakan solusi pendukung lengkap untuk kesuksesan
                                    operasional Anda.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
