'use client';

import { useMemo, useState } from 'react';
import {
    Container,
    Box,
    Typography,
    Grid,
    TextField,
    Button,
    Stack,
    Card,
    CardContent,
} from '@mui/material';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { WhatsApp } from '@mui/icons-material';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Open email client with pre-filled content
        const subject = `Pesan dari ${formData.name} - PT DAS`;
        const body = `Nama: ${formData.name}\nEmail: ${formData.email}\nNo. Telepon: ${formData.phone}\n\nPesan:\n${formData.message}`;
        window.location.href = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

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
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
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
                    {/* Contact Form */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                                Kirim Pesan Kepada Kami
                            </Typography>

                            <Box component="form" onSubmit={handleSubmit} noValidate>
                                <Stack spacing={3}>
                                    <TextField
                                        fullWidth
                                        label="Nama Lengkap"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        variant="outlined"
                                        required
                                        size="medium"
                                    />

                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        variant="outlined"
                                        required
                                    />

                                    <TextField
                                        fullWidth
                                        label="Nomor Telepon"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        variant="outlined"
                                        required
                                    />

                                    <TextField
                                        fullWidth
                                        label="Pesan"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        variant="outlined"
                                        multiline
                                        rows={6}
                                        required
                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        sx={{
                                            py: 2,
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            fontSize: '16px',
                                        }}
                                    >
                                        Kirim Pesan
                                    </Button>

                                    {submitted && (
                                        <Box
                                            sx={{
                                                p: 2,
                                                backgroundColor: 'success.light',
                                                borderRadius: '8px',
                                                color: 'success.dark',
                                            }}
                                        >
                                            <Typography variant="body2">
                                                ✓ Terima kasih! Pesan Anda telah dikirim. Tim kami akan menghubungi Anda
                                                segera.
                                            </Typography>
                                        </Box>
                                    )}
                                </Stack>
                            </Box>
                        </Box>
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
                                <CardContent>
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
                                </CardContent>
                            </Card>

                            {/* Info Card - Telepon */}
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
                                <CardContent>
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
                                </CardContent>
                            </Card>

                            {/* Info Card - Email */}
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
                                <CardContent>
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
                                </CardContent>
                            </Card>

                            {/* Info Card - WhatsApp */}
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
                                <CardContent>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <WhatsApp sx={{ color: 'success.main', fontSize: 28 }} />
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                                                WhatsApp
                                            </Typography>
                                            <Typography
                                                component="a"
                                                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`}
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
