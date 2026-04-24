'use client';

import { Box, Container, Grid, Typography, Avatar, Rating, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '@/data/company';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const MotionBox = motion(Box);

export default function TestimonialsSection() {
    const theme = useTheme();

    return (
        <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
            <Container maxWidth="lg">
                {/* Section Header */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'warning.main',
                            fontWeight: 700,
                            letterSpacing: '2px',
                        }}>
                        TESTIMONIAL
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700, my: 2 }}>
                        Apa Kata Klien Kami
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{ maxWidth: '600px', mx: 'auto' }}>
                        Kepuasan klien adalah prioritas utama kami. Dengarkan pengalaman mereka bekerja sama
                        dengan kami
                    </Typography>
                </MotionBox>

                {/* Testimonials Grid */}
                <Grid container spacing={4}>
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <Grid size={{ xs: 12, md: 4 }} key={testimonial.id}>
                            <MotionBox
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}>
                                <Box sx={{
                                    p: 3.5,
                                    borderRadius: '12px',
                                    backgroundColor: 'background.paper',
                                    border: `1px solid ${theme.palette.divider}`,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                                        borderColor: 'primary.main',
                                        transform: 'translateY(-5px)',
                                    },
                                }}>
                                    {/* Quote Icon */}
                                    <FormatQuoteIcon
                                        sx={{
                                            fontSize: '32px',
                                            color: 'warning.main',
                                            opacity: 0.5,
                                            mb: 1,
                                        }}
                                    />

                                    {/* Message */}
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 3,
                                            flex: 1,
                                            fontStyle: 'italic',
                                            color: 'text.primary',
                                            lineHeight: 1.7,
                                        }}>
                                        "{testimonial.message}"
                                    </Typography>

                                    {/* Rating */}
                                    <Box sx={{ mb: 2 }}>
                                        <Rating value={testimonial.rating} readOnly size="small" />
                                    </Box>

                                    {/* Author Info */}
                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', borderTop: `1px solid ${theme.palette.divider}`, pt: 2 }}>
                                        <Avatar
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            sx={{ width: 48, height: 48 }}
                                        />
                                        <Box sx={{ flex: 1 }}>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                                {testimonial.name}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {testimonial.position}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                                                {testimonial.company}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </MotionBox>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
