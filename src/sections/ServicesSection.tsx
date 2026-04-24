'use client';

import { Box, Container, Grid, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import Link from 'next/link';
import ServiceCardComponent from '@/components/cards/ServiceCard';
import { SERVICES } from '@/data/company';

const MotionBox = motion.create(Box);
const MotionContainer = motion.create(Container);

export default function ServicesSection() {
    const theme = useTheme();
    const displayServices = SERVICES.slice(0, 6);

    return (
        <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
            <Container maxWidth="lg">
                {/* Section Header */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    sx={{ textAlign: 'center', mb: 8 }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'warning.main',
                            fontWeight: 700,
                            letterSpacing: '2px',
                        }}
                    >
                        LAYANAN KAMI
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            my: 2,
                            color: 'text.primary',
                        }}
                    >
                        Solusi Bisnis Terpadu
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: '600px',
                            mx: 'auto',
                        }}
                    >
                        Kami menyediakan berbagai layanan konstruksi dan bisnis untuk memenuhi kebutuhan
                        Anda dengan standar kualitas tertinggi
                    </Typography>
                </MotionBox>

                {/* Services Grid */}
                <Grid container spacing={3} sx={{ mb: 6 }}>
                    {displayServices.map((service, idx) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
                            <MotionBox
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}>
                                <ServiceCardComponent {...service} />
                            </MotionBox>
                        </Grid>
                    ))}
                </Grid>

                {/* CTA Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <MotionBox
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            component={Link}
                            href="/layanan"
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{
                                px: 4,
                                py: 1.8,
                                fontSize: '16px',
                                fontWeight: 600,
                                textTransform: 'none',
                                borderRadius: '8px',
                            }}
                        >
                            Lihat Semua Layanan →
                        </Button>
                    </MotionBox>
                </Box>
            </Container>
        </Box>
    );
}
