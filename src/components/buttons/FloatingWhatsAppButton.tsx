'use client';

import { motion } from 'motion/react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { COMPANY_INFO } from '@/data/company';

const MotionDiv = motion.div;

export default function FloatingWhatsAppButton() {
  const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}?text=Halo%20PT%20DAS%2C%20saya%20tertarik%20dengan%20layanan%20Anda`;

  return (
    <MotionDiv
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open(whatsappLink, '_blank')}
      title="Chat via WhatsApp"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '20px',
        width: 60,
        height: 60,
        borderRadius: '50%',
        backgroundColor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        zIndex: 999,
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: 'none',
        padding: 0,
      }}
    >
      <WhatsAppIcon style={{ fontSize: 30, color: 'white' }} />
    </MotionDiv>
  );
}
