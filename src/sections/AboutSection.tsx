'use client';

import { Box, Container, Grid, Typography, Button, Stack, useTheme, alpha } from '@mui/material';
import { motion } from 'motion/react';
import { ABOUT_COMPANY, COMPANY_ADVANTAGES } from '@/data/company';
import Link from 'next/link';

const MotionBox = motion.create(Box);

export default function AboutSection() {
    const theme = useTheme();

    return (
        <Box sx={{ py: 10, backgroundColor: 'background.paper', maxWidth: '100vw', overflowX: 'hidden' }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} sx={{ alignItems: "center" }}>
                    {/* Left Side - Image/Content */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <MotionBox
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    aspectRatio: '1/1',
                                    borderRadius: '12px',
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/2151589535.jpg"
                                    alt="Company Profile"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'left bottom',
                                        
                                    }}
                                />
                            </Box>
                        </MotionBox>
                    </Grid>

                    {/* Right Side - Content */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <MotionBox
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'warning.main',
                                    fontWeight: 700,
                                    letterSpacing: '2px',
                                }}>
                                TENTANG KAMI
                            </Typography>
                            <Typography variant="h3" sx={{ fontWeight: 700, my: 2 }}>
                                {ABOUT_COMPANY.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                                {ABOUT_COMPANY.description}
                            </Typography>

                            {/* Vision & Mission */}
                            <Stack spacing={2.5} sx={{ mb: 3 }}>
                                <Box>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
                                        Visi Kami
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {ABOUT_COMPANY.vision}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
                                        Misi Kami
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {ABOUT_COMPANY.mission}
                                    </Typography>
                                </Box>
                            </Stack>

                            {/* Values */}
                            <Box sx={{ mb: 3, p: 2, borderRadius: '8px', backgroundColor: alpha(theme.palette.primary.main, 0.05) }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
                                    Nilai-Nilai Kami
                                </Typography>
                                <Grid container spacing={2}>
                                    {ABOUT_COMPANY.values.map((value, idx) => (
                                        <Grid size={{ xs: 6 }} key={idx}>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Box
                                                    component={"img"}
                                                    src={value.image}
                                                    alt={value.title}
                                                    sx={{ width: 25, height: 25 }}
                                                />
                                                <Box>
                                                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                                        {value.title}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {value.description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            {/* CTA */}
                            <Button
                                component={Link}
                                href="/tentang-kami"
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    textTransform: 'none',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    borderRadius: '8px',
                                }}>
                                Pelajari Lebih Lanjut →
                            </Button>
                        </MotionBox>
                    </Grid>
                </Grid>

                {/* Advantages Section */}
                <Box sx={{ mt: 10 }}>
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                            Keunggulan Kami
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
                            Alasan mengapa klien memilih PT. DELAPAN ANUGRAH SEJAHTERA sebagai mitra terpercaya mereka
                        </Typography>
                    </MotionBox>

                    <Grid container spacing={3}>
                        {COMPANY_ADVANTAGES.map((advantage, idx) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                                <MotionBox
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}>
                                    <Box sx={{
                                        p: 3,
                                        borderRadius: '8px',
                                        backgroundColor: 'background.default',
                                        border: `1px solid ${theme.palette.divider}`,
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                            borderColor: 'primary.main',
                                        },
                                    }}>
                                        <Box
                                            component="img"
                                            src={advantage.image}
                                            alt={advantage.title}
                                            sx={{ width: 50, height: 50, mb: 2, objectFit: 'contain' }}
                                        />
                                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                            {advantage.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {advantage.description}
                                        </Typography>
                                    </Box>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
