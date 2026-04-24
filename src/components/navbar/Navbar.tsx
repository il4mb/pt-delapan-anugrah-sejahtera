'use client';

import { useState } from 'react';
import {
    AppBar,
    Box,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Button,
    useScrollTrigger,
    alpha,
    Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';
import { useTheme } from '@mui/material/styles';
import { Logo } from '@/icons/Logo';
import DarkModeToggle from '../buttons/DarkModeToggle';

const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Proyek', href: '/proyek' },
    { label: 'Legalitas', href: '/legalitas' },
    { label: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box>
                    <Logo width={40} height={40} color={theme.palette.primary.main} />
                    <Typography sx={{ fontWeight: 700, fontSize: '12px' }}>
                        {COMPANY_INFO.name}
                    </Typography>
                </Box>
                <IconButton onClick={handleDrawerToggle} size="small">
                    <CloseIcon />
                </IconButton>
            </Box>
            <List sx={{ flex: 1 }}>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton
                            component={Link}
                            href={item.href}
                            sx={{
                                color: 'text.primary',
                                '&:hover': {
                                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                    color: 'primary.main',
                                },
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3, py: 1.5 }}
                component={Link}
                href="/kontak">
                Hubungi Kami
            </Button>
        </Box>
    );

    return (
        <>
            <AppBar
                elevation={trigger ? 2 : 0}
                sx={(theme) => ({
                    maxWidth: '100vw',
                    backgroundColor: trigger
                        ? theme.palette.background.paper
                        : 'transparent',
                    transition: 'all 0.3s ease-in-out',
                    backdropFilter: 'blur(10px)',
                    borderBottom: trigger ? `1px solid ${theme.palette.divider}` : 'none',
                    color: trigger ? 'text.primary' : 'primary.contrastText',
                    ...theme.applyStyles("dark", {
                        backgroundColor: trigger
                            ? theme.palette.background.paper
                            : "transparent",
                    })
                })}>
                <Container maxWidth="lg">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5 }}>
                        {/* Logo */}
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: 1 }}>
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 700,
                                        color: 'white',
                                        fontSize: '20px',
                                    }}>
                                    <Logo width={40} height={40} color={trigger ? theme.palette.primary.main : 'white'} />
                                </Box>
                                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: 700,
                                            color: trigger ? 'primary.main' : 'white',
                                            lineHeight: 1,
                                        }}>
                                        PT Delapan Anugrah Sejahtera
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: trigger ? 'text.secondary' : 'rgba(255,255,255,0.8)',
                                            display: 'block',
                                            fontSize: '10px',
                                        }}>
                                        Profesional & Terpercaya
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    component={Link}
                                    href={item.href}
                                    sx={{
                                        color: trigger ? 'text.primary' : 'white',
                                        textTransform: 'none',
                                        fontSize: '15px',
                                        position: 'relative',
                                        fontWeight: 500,
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -2,
                                            left: 0,
                                            width: 0,
                                            height: 2,
                                            backgroundColor: 'warning.main',
                                            transition: 'width 0.3s ease-in-out',
                                        },
                                        '&:hover::after': {
                                            width: '100%',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <Stack
                                direction="row"
                                spacing={1}>
                                <Button
                                    variant="contained"
                                    color="warning"
                                    sx={{
                                        ml: 2,
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        px: 3,
                                    }}
                                    component={Link}
                                    href="/kontak">
                                    Hubungi Kami
                                </Button>
                                <DarkModeToggle />
                            </Stack>
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                anchor="right"
                open={mobileOpen}
                slotProps={{
                    paper: {
                        sx: {
                            maxWidth: '1000dvw',
                            width: '100%',
                        }
                    }
                }}
                onClose={handleDrawerToggle}>
                {drawer}
            </Drawer>
        </>
    );
}
