'use client';

import {
    Container,
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Stack,
} from '@mui/material';
import { COMPANY_INFO, LEGALITY } from '@/data/company';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function LegalityPage() {
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
                        Legalitas & Sertifikasi
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9 }}>
                        Komitmen kami terhadap kepatuhan hukum dan standar internasional
                    </Typography>
                </Container>
            </Box>

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                {/* Legalitas Cards */}
                <Grid container spacing={3} sx={{ mb: 10 }}>
                    {LEGALITY.map((item) => (
                        <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    border: '2px solid',
                                    borderColor: 'divider',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    },
                                }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mb: 2 }}>
                                        <VerifiedIcon sx={{ color: 'success.main', fontSize: 28, mt: 0.5 }} />
                                        <Box sx={{ flex: 1 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                                                {item.title}
                                            </Typography>
                                            <Chip
                                                label={item.status}
                                                color="success"
                                                size="small"
                                                variant="outlined"
                                            />
                                        </Box>
                                    </Box>

                                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                                        {item.description}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Compliance & Commitment */}
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
                        Komitmen Kepatuhan Hukum & Standar Internasional
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                                    ✓ Kepatuhan Regulasi
                                </Typography>
                                <Typography variant="body2" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                                    PT. DELAPAN ANUGRAH SEJAHTERA berkomitmen penuh untuk mematuhi semua peraturan
                                    perundang-undangan yang berlaku di Indonesia hingga tingkat internasional. Setiap
                                    operasi bisnis kami dijalankan dengan transparansi penuh dan integritas tinggi.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                                    ✓ Sertifikasi & Audit
                                </Typography>
                                <Typography variant="body2" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                                    Kami secara rutin menjalani audit eksternal oleh lembaga sertifikasi terkemuka
                                    untuk memastikan standar operasional tetap memenuhi atau melampaui persyaratan
                                    internasional termasuk ISO 9001 dan standar keselamatan kerja global.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                                    ✓ Tanggung Jawab Lingkungan
                                </Typography>
                                <Typography variant="body2" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                                    Keberlanjutan lingkungan adalah bagian integral dari filosofi bisnis kami. Semua
                                    proyek dilaksanakan dengan mempertimbangkan dampak lingkungan dan mengikuti
                                    protokol perlindungan lingkungan yang ketat.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                                    ✓ Transparansi Korporat
                                </Typography>
                                <Typography variant="body2" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                                    Kami mempertahankan praktik tata kelola perusahaan yang transparan dengan laporan
                                    keuangan yang diaudit secara independen dan keterbukaan komunikasi dengan semua
                                    stakeholder.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Box sx={{
                mt: 10,
                py: 10,
                borderTop: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
            }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textAlign: 'center' }}>
                    Dokumen Legal Perusahaan
                </Typography>
                <Box sx={{ p: 4, textAlign: "center" }} >
                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                        Untuk mengakses dokumen legal perusahaan secara lengkap, silakan hubungi tim kami
                    </Typography>
                    <Stack spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Email: {COMPANY_INFO.email.join(', ')}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Telepon: {COMPANY_INFO.phone}
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}
