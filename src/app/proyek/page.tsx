'use client';

import { Container, Box, Typography, Grid, Button } from '@mui/material';
import Link from 'next/link';
import { PROJECTS } from '@/data/company';
import ProjectCard from '@/components/cards/ProjectCard';

export default function ProjectsPage() {
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
                        Proyek & Portfolio
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9 }}>
                        Prestasi dan pengalaman kami dalam menyelesaikan proyek-proyek besar dan kompleks
                    </Typography>
                </Container>
            </Box>

            {/* Projects Grid */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {PROJECTS.map((project) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
                            <ProjectCard {...project} />
                        </Grid>
                    ))}
                </Grid>

                {/* Project Statistics */}
                <Box
                    sx={{
                        py: 10,
                        px: 4,
                        backgroundColor: 'primary.main',
                        borderRadius: '12px',
                        color: 'white',
                        textAlign: 'center',
                    }}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Box>
                                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                                    100+
                                </Typography>
                                <Typography variant="subtitle1">Proyek Selesai</Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Box>
                                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                                    $500M+
                                </Typography>
                                <Typography variant="subtitle1">Total Nilai Proyek</Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Box>
                                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                                    20+
                                </Typography>
                                <Typography variant="subtitle1">Tahun Pengalaman</Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Box>
                                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                                    98%
                                </Typography>
                                <Typography variant="subtitle1">Kepuasan Klien</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* Call to Action */}
                <Box sx={{ textAlign: 'center', mt: 10 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                        Ingin Melihat Lebih Banyak Proyek?
                    </Typography>
                    <Button
                        component={Link}
                        href="/kontak"
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            px: 4,
                            py: 1.5,
                            textTransform: 'none',
                            fontSize: '16px',
                            fontWeight: 600,
                            borderRadius: '8px',
                        }}>
                        Hubungi Tim Kami
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
