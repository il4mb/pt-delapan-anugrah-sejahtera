'use client';

import { Card, CardContent, Box, Typography, useTheme, alpha } from '@mui/material';
import { SVGProps } from 'react';
import { motion } from 'motion/react';
import { cardHoverVariant } from '@/utils/animations';
import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    color?: string;
    details?: string;
}

export const ServiceCard = motion(Card);

export default function ServiceCardComponent({
    title,
    description,
    image,
    color,
    details,
}: ServiceCardProps) {
    const theme = useTheme();
    const bgColor = color || theme.palette.primary.main;

    return (
        <ServiceCard
            initial="initial"
            whileHover="hover"
            variants={cardHoverVariant}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: `1px solid ${theme.palette.divider}`,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden',
            }}>
            <Box
                component={"img"}
                src={image}
                alt={title}
                sx={{
                    width: '100%',
                    height: 120,
                    objectFit: 'contain',
                    padding: 2,
                    backgroundColor: alpha(bgColor, 0.1),
                }}
            />
            {/* <Box
                sx={{
                    height: 120,
                    background: `linear-gradient(135deg, ${bgColor}20, ${bgColor}10)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '48px',
                    borderBottom: `3px solid ${bgColor}`,
                }}
            >
                {icon}
            </Box> */}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: 'text.primary',
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {description}
                </Typography>
                {details && (
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'block',
                            mt: 2,
                            pt: 1.5,
                            borderTop: `1px solid ${theme.palette.divider}`,
                            color: 'text.secondary',
                            fontStyle: 'italic',
                        }}
                    >
                        {details}
                    </Typography>
                )}
            </CardContent>
        </ServiceCard>
    );
}
