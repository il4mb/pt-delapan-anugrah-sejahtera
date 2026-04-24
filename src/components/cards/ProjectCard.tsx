'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  useTheme,
  Chip,
} from '@mui/material';
import { motion } from 'motion/react';
import { cardHoverVariant } from '@/utils/animations';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  year: number;
  value: string;
  status: string;
}

const ProjectCardMotion = motion(Card);

export default function ProjectCard({
  title,
  category,
  image,
  description,
  year,
  value,
  status,
}: ProjectCardProps) {
  const theme = useTheme();
  const statusColor =
    status === 'Selesai'
      ? 'success'
      : status === 'Dalam Proses'
        ? 'warning'
        : 'default';

  return (
    <ProjectCardMotion
      initial="initial"
      whileHover="hover"
      variants={cardHoverVariant}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', height: 200 }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{
            transition: 'transform 0.5s ease',
            '@media (hover: hover)': {
              '&:hover': {
                transform: 'scale(1.1)',
              },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Chip
            label={status}
            color={statusColor as any}
            size="small"
            variant="filled"
          />
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="overline" sx={{ color: 'primary.main' }}>
          {category}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 1,
            pt: 2,
            borderTop: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              TAHUN
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {year}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              NILAI PROYEK
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'warning.main' }}>
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </ProjectCardMotion>
  );
}
