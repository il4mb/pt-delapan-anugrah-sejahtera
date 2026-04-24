'use client';

import { Box, Container, Typography, Button, Stack, useTheme, alpha } from '@mui/material';
import { motion } from 'motion/react';
import Link from 'next/link';
import { buttonHoverVariant } from '@/utils/animations';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function CTASection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background */}
      <MotionBox
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.warning.main}, transparent)`,
          top: '-100px',
          left: '-100px',
          zIndex: 0,
        }}
      />

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
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '28px', md: '42px' },
            }}
          >
            Siap Mewujudkan Proyek Impian Anda?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: alpha('#fff', 0.9),
              fontWeight: 400,
              mb: 4,
              fontSize: { xs: '16px', md: '18px' },
            }}
          >
            Tim profesional kami siap membantu Anda mewujudkan proyek dengan kualitas terbaik dan
            waktu yang efisien.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: "center" }}>
            <MotionButton
              component={Link}
              href="/kontak"
              variant="contained"
              color="warning"
              size="large"
              endIcon={<ArrowForwardIcon />}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverVariant}
              sx={{
                px: 4,
                py: 2,
                fontSize: '16px',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
              }}
            >
              Konsultasi Gratis Sekarang
            </MotionButton>

            <MotionButton
              component={Link}
              href="/layanan"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 2,
                fontSize: '16px',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                borderColor: 'white',
                color: 'white',
                borderWidth: 2,
                '&:hover': {
                  backgroundColor:  alpha('#fff', 0.1),
                  borderColor: 'white',
                },
              }}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverVariant}
            >
              Pelajari Layanan
            </MotionButton>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
}
