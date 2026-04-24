'use client';

import { Container, Box, Typography, Grid, Stack } from '@mui/material';
import { ABOUT_COMPANY, COMPANY_ADVANTAGES } from '@/data/company';
import { Target } from 'lucide-react';

export default function AboutPage() {
    return (
        <Box>
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
                        Tentang PT. DELAPAN ANUGRAH SEJAHTERA
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9 }}>
                        Perjalanan kami menuju menjadi perusahaan terpercaya di industri konstruksi dan bisnis
                    </Typography>
                </Container>
            </Box>

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                {/* Sejarah & Deskripsi */}
                <Grid container spacing={6} sx={{ mb: 10 }}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                                Sejarah Perusahaan
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                                {ABOUT_COMPANY.description}
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                                Dengan pengalaman lebih dari 20 tahun di industri, PT. DELAPAN ANUGRAH SEJAHTERA
                                terus berkembang dan berinovasi untuk memberikan solusi terbaik bagi semua klien
                                kami. Komitmen kami adalah kesuksesan Anda.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                p: 3,
                                backgroundColor: 'background.paper',
                                borderRadius: '8px',
                                border: '1px solid',
                                borderColor: 'divider',
                            }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                                Informasi Cepat
                            </Typography>
                            <Stack spacing={2}>
                                <Box>
                                    <Typography variant="overline" sx={{ color: 'primary.main' }}>
                                        Tahun Berdiri
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        2003
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="overline" sx={{ color: 'primary.main' }}>
                                        Proyek Selesai
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        100+
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="overline" sx={{ color: 'primary.main' }}>
                                        Tim Profesional
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        200+
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>

                {/* Visi & Misi */}
                <Grid container spacing={4} sx={{ mb: 10 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                p: 4,
                                backgroundColor: 'background.paper',
                                borderRadius: '8px',
                                border: '2px solid',
                                borderColor: 'primary.main',
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                                <Box
                                    component={"img"}
                                    src="/goal.png"
                                    alt="Vision Icon"
                                    sx={{ width: 32, height: 32 }}
                                />
                                <Box component="span" sx={{ ml: 1 }}>
                                    Visi Kami
                                </Box>
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                                {ABOUT_COMPANY.vision}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                p: 4,
                                backgroundColor: 'background.paper',
                                borderRadius: '8px',
                                border: '2px solid',
                                borderColor: 'warning.main',
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'warning.main' }}>
                                <Box
                                    component={"img"}
                                    src="/graph.png"
                                    alt="Mission Icon"
                                    sx={{ width: 32, height: 32 }}
                                />
                                <Box component="span" sx={{ ml: 1 }}>
                                    Misi Kami
                                </Box>
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                                {ABOUT_COMPANY.mission}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Nilai-Nilai */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
                        Nilai-Nilai Perusahaan
                    </Typography>
                    <Grid container spacing={3}>
                        {ABOUT_COMPANY.values.map((value, idx) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                                <Box
                                    sx={{
                                        "--grayscale": '100%',
                                        p: 3,
                                        backgroundColor: 'background.paper',
                                        borderRadius: '8px',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                            transform: 'translateY(-5px)',
                                            "--grayscale": '0%',
                                        },
                                    }}>
                                    <Box
                                        component={"img"}
                                        alt={`${value.title} Icon`}
                                        src={value.image}
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            filter: 'grayscale(var(--grayscale))',
                                            transition: 'filter 0.3s ease',
                                            mb: 2
                                        }} />
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        {value.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {value.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Keunggulan */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
                        Keunggulan Kompetitif Kami
                    </Typography>
                    <Grid container spacing={3}>
                        {COMPANY_ADVANTAGES.map((advantage, idx) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                                <Box
                                    sx={{
                                        p: 3,
                                        backgroundColor: 'background.paper',
                                        borderRadius: '8px',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                    }}>
                                    <Box
                                        component={"img"}
                                        alt={`${advantage.title} Icon`}
                                        src={advantage.image}
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            objectFit: 'contain',
                                            mb: 2
                                        }} />
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        {advantage.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {advantage.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
