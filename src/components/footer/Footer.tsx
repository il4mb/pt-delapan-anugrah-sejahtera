'use client';

import {
    Box,
    Container,
    Grid,
    Typography,
    Link as MuiLink,
    Stack,
    Divider,
    useTheme,
} from '@mui/material';
import { COMPANY_INFO } from '@/data/company';
import FacebookIcon from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Logo } from '@/icons/Logo';

const footerLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Proyek', href: '/proyek' },
    { label: 'Legalitas', href: '/legalitas' },
    { label: 'Kontak', href: '/kontak' },
];

const socialLinks = [
    { icon: FacebookIcon, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: LinkedInIcon, href: '#' },
    { icon: InstagramIcon, href: '#' },
];

export default function Footer() {
    const theme = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.primary.dark,
                color: 'white',
                py: 8,
            }}>
            <Container maxWidth="lg">
                {/* Main Footer Content */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {/* Company Info */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box sx={{ mb: 3 }}>
                            <Box
                                sx={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: '8px',
                                    background: `linear-gradient(135deg, ${theme.palette.grey[500]}, ${theme.palette.grey[700]})`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    color: 'white',
                                    fontSize: '24px',
                                    mb: 2,
                                }}>
                                <Logo width={24} height={24} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                {COMPANY_INFO.name}
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                                {COMPANY_INFO.description}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                {socialLinks.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <MuiLink
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 40,
                                                height: 40,
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                color: 'white',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: theme.palette.warning.main,
                                                    transform: 'translateY(-3px)',
                                                },
                                            }}
                                        >
                                            <Icon sx={{ fontSize: 20 }} />
                                        </MuiLink>
                                    );
                                })}
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Quick Links */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5 }}>
                            Menu Cepat
                        </Typography>
                        <Stack spacing={1.5}>
                            {footerLinks.map((link) => (
                                <MuiLink
                                    key={link.label}
                                    component={Link}
                                    href={link.href}
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: theme.palette.warning.main,
                                        },
                                    }}
                                >
                                    {link.label}
                                </MuiLink>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Services */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5 }}>
                            LAYANAN UTAMA
                        </Typography>
                        <Stack spacing={1.5}>
                            {[
                                'Konstruksi Gedung',
                                'Infrastruktur Sipil',
                                'Real Estate',
                                'Pertambangan',
                                'Trading Supply',
                                'Konsultasi Teknik',
                            ].map((service) => (
                                <MuiLink
                                    key={service}
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: theme.palette.warning.main,
                                        },
                                    }}
                                >
                                    {service}
                                </MuiLink>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact Info */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5 }}>
                            Hubungi Kami
                        </Typography>
                        <Stack spacing={2.5}>
                            <Box sx={{ display: 'flex', gap: 1.5 }}>
                                <LocationOnIcon sx={{ fontSize: 20, mt: 0.5, flexShrink: 0 }} />
                                <Box>
                                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                                        Lokasi
                                    </Typography>
                                    <Typography variant="body2">
                                        {COMPANY_INFO.location}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1.5 }}>
                                <PhoneIcon sx={{ fontSize: 20, mt: 0.5, flexShrink: 0 }} />
                                <Box>
                                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                                        Telepon
                                    </Typography>
                                    <MuiLink
                                        href={`tel:${COMPANY_INFO.phone}`}
                                        sx={{ color: 'white', textDecoration: 'none', display: 'block' }}
                                    >
                                        <Typography variant="body2">{COMPANY_INFO.phone}</Typography>
                                    </MuiLink>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1.5 }}>
                                <EmailIcon sx={{ fontSize: 20, mt: 0.5, flexShrink: 0 }} />
                                <Box>
                                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                                        Email
                                    </Typography>
                                    <MuiLink
                                        href={`mailto:${COMPANY_INFO.email}`}
                                        sx={{ color: 'white', textDecoration: 'none', display: 'block' }}
                                    >
                                        <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
                                            {COMPANY_INFO.email}
                                        </Typography>
                                    </MuiLink>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', my: 4 }} />

                {/* Bottom Footer */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        &copy; {currentYear} {COMPANY_INFO.name}. Semua hak dilindungi.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                        <MuiLink
                            sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                textDecoration: 'none',
                                fontSize: '14px',
                                '&:hover': { color: 'white' },
                            }}
                        >
                            Kebijakan Privasi
                        </MuiLink>
                        <MuiLink
                            sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                textDecoration: 'none',
                                fontSize: '14px',
                                '&:hover': { color: 'white' },
                            }}
                        >
                            Syarat & Ketentuan
                        </MuiLink>
                        <MuiLink
                            sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                textDecoration: 'none',
                                fontSize: '14px',
                                '&:hover': { color: 'white' },
                            }}
                        >
                            Hubungi Kami
                        </MuiLink>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
