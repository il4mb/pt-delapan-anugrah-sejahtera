'use client';

import { Container, Box, Typography, Grid, Button, Stack, Card, CardContent, Chip } from '@mui/material';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { WhatsApp } from '@mui/icons-material';

export default function ContactPage() {
    const whatsappNumber = COMPANY_INFO.whatsapp.replace(/\D/g, '');

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
                        Hubungi Kami
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9 }}>
                        Tim kami siap membantu Anda. Hubungi kami untuk konsultasi gratis
                    </Typography>
                </Container>
            </Box>

            {/* Contact Section */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Grid container spacing={6}>
                    {/* Contact Intro & Quick Actions */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={3}>
                            <Card
                                sx={{
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    background: 'linear-gradient(140deg, rgba(30, 60, 150, 0.08), rgba(21, 41, 96, 0.02))',
                                }}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                        Konsultasi Langsung
                                    </Typography>
                                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                                        Untuk saat ini kami fokus melayani lewat kanal langsung agar respon lebih cepat.
                                        Pilih cara yang paling nyaman untuk Anda.
                                    </Typography>
                                    <Stack spacing={1.5}>
                                        <Button
                                            component="a"
                                            href={`https://wa.me/${whatsappNumber}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="contained"
                                            color="success"
                                            startIcon={<WhatsApp />}
                                            sx={{ textTransform: 'none', py: 1.5, fontWeight: 600 }}
                                        >
                                            Chat via WhatsApp
                                        </Button>
                                        <Button
                                            component="a"
                                            href={`tel:${COMPANY_INFO.phone}`}
                                            variant="outlined"
                                            color="primary"
                                            startIcon={<PhoneIcon />}
                                            sx={{ textTransform: 'none', py: 1.5, fontWeight: 600 }}
                                        >
                                            Telepon Sekarang
                                        </Button>
                                        <Button
                                            component="a"
                                            href={`mailto:${COMPANY_INFO.email}`}
                                            variant="outlined"
                                            color="primary"
                                            startIcon={<EmailIcon />}
                                            sx={{ textTransform: 'none', py: 1.5, fontWeight: 600 }}
                                        >
                                            Kirim Email
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>

                            <Card sx={{ border: '1px solid', borderColor: 'divider' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Alur Konsultasi Singkat
                                    </Typography>
                                    <Stack spacing={2}>
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                                1. Ceritakan kebutuhan proyek
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Sampaikan lingkup pekerjaan, timeline, dan lokasi proyek Anda.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                                2. Diskusi teknis bersama tim
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Kami bantu rekomendasi layanan dan rencana eksekusi yang paling efisien.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                                3. Mulai kolaborasi
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Setelah sepakat, tim kami akan menyiapkan langkah implementasi secara cepat.
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>

                            <Card sx={{ border: '1px solid', borderColor: 'divider' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                        Keunggulan Layanan Kami
                                    </Typography>
                                    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                                        <Chip label="Respon Cepat" color="primary" variant="outlined" />
                                        <Chip label="Tim Berpengalaman" color="primary" variant="outlined" />
                                        <Chip label="Pendekatan Fleksibel" color="primary" variant="outlined" />
                                        <Chip label="Komunikasi Transparan" color="primary" variant="outlined" />
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>

                    {/* Contact Information */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={3}>
                            {/* Info Card - Alamat */}
                            <Card
                                sx={{
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    },
                                }}
                            >
                                <CardContent sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 3,
                                }}>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <LocationOnIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                                                Lokasi
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {COMPANY_INFO.location}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <PhoneIcon sx={{ color: 'warning.main', fontSize: 28 }} />
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                                                Telepon
                                            </Typography>
                                            <Typography
                                                component={Link}
                                                href={`tel:${COMPANY_INFO.phone}`}
                                                variant="body2"
                                                sx={{ textDecoration: 'none', color: 'primary.main' }}
                                            >
                                                {COMPANY_INFO.phone}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <EmailIcon sx={{ color: 'error.main', fontSize: 28 }} />
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                                                Email
                                            </Typography>
                                            <Typography
                                                component={Link}
                                                href={`mailto:${COMPANY_INFO.email}`}
                                                variant="body2"
                                                sx={{ textDecoration: 'none', color: 'primary.main', wordBreak: 'break-all' }}
                                            >
                                                {COMPANY_INFO.email}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <WhatsApp sx={{ color: 'success.main', fontSize: 28 }} />
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                                                WhatsApp
                                            </Typography>
                                            <Typography
                                                component="a"
                                                href={`https://wa.me/${whatsappNumber}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="body2"
                                                sx={{ textDecoration: 'none', color: 'success.main' }}
                                            >
                                                {COMPANY_INFO.whatsapp}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>

                            {/* Info Card - Jam Operasional */}
                            <Card
                                sx={{
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    background: 'linear-gradient(135deg, rgba(30, 60, 150, 0.05) 0%, rgba(255, 165, 0, 0.05) 100%)',
                                }}
                            >
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
                                                Jam Operasional
                                            </Typography>
                                            <Stack spacing={0.5}>
                                                <Typography variant="body2">Senin - Jumat: 08:00 - 17:00</Typography>
                                                <Typography variant="body2">Sabtu: 08:00 - 12:00</Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Minggu & Hari Libur Nasional: Tutup
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Map Section */}
                <Box sx={{ mt: 10, pt: 10, borderTop: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
                        Lokasi Kami di Peta
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            height: 400,
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid',
                            borderColor: 'divider',
                        }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1280597.5193202912!2d100.65763935460335!3d0.8292116938961662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d43af21bdbc66d%3A0x3039d80b220d1e0!2sSiak%20Regency%2C%20Riau!5e1!3m2!1sen!2sid!4v1777050030430!5m2!1sen!2sid"
                            style={{
                                border: 0,
                                width: '100%',
                                height: '100%',
                            }}
                            loading="lazy" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
