'use client';

import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import { STATISTICS } from '@/data/company';

const MotionBox = motion.create(Box);

export default function StatisticsSection() {
    const theme = useTheme();

    return (
        <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
            <Container maxWidth="lg">
                <Stack
                    direction={"row"}
                    sx={{
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 4,
                    }}>
                    {STATISTICS.map((stat, idx) => (
                        <MotionBox
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                width: 250
                            }}>
                            <Stack
                                sx={{
                                    // textAlign: 'center',
                                    // p: 3,
                                    // borderRadius: '12px',
                                    // backgroundColor: 'background.default',
                                    // transition: 'all 0.3s ease',
                                    // '&:hover': {
                                    //     boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    //     transform: 'translateY(-5px)',
                                    // },
                                }}

                                spacing={1}>
                                <Box sx={{ fontSize: '48px', mb: 2 }}>{stat.icon}</Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 700,
                                        color: 'primary.main',
                                        mb: 1,
                                    }}>
                                    {stat.number}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 1,
                                        color: 'text.primary',
                                    }}>
                                    {stat.label}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {stat.description}
                                </Typography>
                            </Stack>
                        </MotionBox>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
