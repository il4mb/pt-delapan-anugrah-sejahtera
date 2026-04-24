'use client';

import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import { STATISTICS } from '@/data/company';
import { containerVariant, numberVariant } from '@/utils/animations';

const MotionBox = motion(Box);

export default function StatisticsSection() {
    const theme = useTheme();

    return (
        <Box sx={{ py: 8, backgroundColor: theme.palette.primary.dark }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {STATISTICS.map((stat, idx) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                            <MotionBox
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                sx={{
                                    textAlign: 'center',
                                    p: 3,
                                    borderRadius: '12px',
                                    backgroundColor: 'background.default',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        transform: 'translateY(-5px)',
                                    },
                                }}>
                                <Box sx={{ fontSize: '48px', mb: 2 }}>{stat.icon}</Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 700,
                                        color: 'primary.main',
                                        mb: 1,
                                    }}
                                >
                                    {stat.number}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 1,
                                        color: 'text.primary',
                                    }}
                                >
                                    {stat.label}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {stat.description}
                                </Typography>
                            </MotionBox>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
