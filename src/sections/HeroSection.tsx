'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  alpha,
} from '@mui/material';
import { motion } from 'motion/react';
import Link from 'next/link';
import { HERO_SECTION } from '@/data/company';
import { fadeUpVariant } from '@/utils/animations';

const MotionBox = motion(Box);

export default function HeroSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${alpha(theme.palette.warning.main, 0.1)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
        pb: 6,
      }}
    >
      {/* Animated Background Elements */}
      <MotionBox
        animate={{
          y: [0, -30, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.warning.main}, transparent)`,
          top: '-100px',
          right: '-100px',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={3} sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
          {/* Main Headline */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '32px', sm: '42px', md: '56px', lg: '64px' },
                lineHeight: 1.2,
                letterSpacing: '-1px',
              }}
            >
              {HERO_SECTION.mainHeadline}
            </Typography>
          </MotionBox>

          {/* Subheadline */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: alpha('#fff', 0.9),
                fontWeight: 400,
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                lineHeight: 1.6,
              }}
            >
              {HERO_SECTION.subheadline}
            </Typography>
          </MotionBox>

          {/* CTA Buttons */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              pt: 2,
            }}
          >
            <Button
              component={Link}
              href="/kontak"
              variant="contained"
              color="warning"
              size="large"
              sx={{
                px: 4,
                py: 1.8,
                fontSize: '16px',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              {HERO_SECTION.primaryCTA}
            </Button>

            <Button
              component={Link}
              href="/layanan"
              variant="outlined"
              sx={{
                px: 4,
                py: 1.8,
                fontSize: '16px',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                borderColor: 'white',
                color: 'white',
                borderWidth: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: theme.palette.warning.main,
                  backgroundColor: alpha(theme.palette.warning.main, 0.1),
                  transform: 'scale(1.05)',
                },
              }}
            >
              {HERO_SECTION.secondaryCTA}
            </Button>
          </MotionBox>
        </Stack>
      </Container>

      {/* Scroll Indicator */}
      <MotionBox
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 50,
            border: `2px solid white`,
            borderRadius: '15px',
            position: 'relative',
          }}
        >
          <MotionBox
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            sx={{
              width: 2,
              height: 10,
              backgroundColor: 'white',
              borderRadius: '1px',
              position: 'absolute',
              left: '50%',
              top: 8,
              transform: 'translateX(-50%)',
            }}
          />
        </Box>
      </MotionBox>
    </Box>
  );
}
