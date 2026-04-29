'use client';

import { Box, Container, Typography, Button, Stack, useTheme, alpha } from '@mui/material';
import { motion } from 'motion/react';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion.create(Box);

export default function CTASection() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                pt: 15,
                pb: 20,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                position: 'relative',
                overflow: 'hidden',
            }}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    sx={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        mx: 'auto',
                    }}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: 'white',
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: '28px', md: '42px' },
                        }}>
                        Siap Mewujudkan Proyek Impian Anda?
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            color: alpha('#fff', 0.9),
                            fontWeight: 400,
                            mb: 4,
                            fontSize: { xs: '16px', md: '18px' },
                        }}>
                        Tim profesional kami siap membantu Anda mewujudkan proyek dengan kualitas terbaik dan
                        waktu yang efisien.
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: "center" }}>
                        <Button
                            component={Link}
                            href="/kontak"
                            variant="contained"
                            color="warning"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                px: 4,
                                py: 2,
                                fontSize: '16px',
                                fontWeight: 600,
                                textTransform: 'none',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                },
                            }}>
                            Konsultasi Gratis Sekarang
                        </Button>

                        <Button
                            component={Link}
                            href="/layanan"
                            variant="outlined"
                            size="large"
                            sx={(theme) => ({
                                px: 4,
                                py: 2,
                                fontSize: '16px',
                                fontWeight: 600,
                                textTransform: 'none',
                                borderRadius: '8px',
                                // borderColor: 'transparent',
                                backgroundColor: 'transparent',
                                color: 'white',
                                borderWidth: 2,
                                transition: 'all 0.3s ease',
                    
                                ...theme.applyStyles("dark", {
                                    backgroundColor: 'transparent',
                                })
                            })}
                        >
                            Pelajari Layanan
                        </Button>
                    </Stack>
                </MotionBox>
            </Container>
        </Box>
    );
}
