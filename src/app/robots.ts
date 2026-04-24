import { COMPANY_INFO } from '@/data/company';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${COMPANY_INFO.website}/sitemap.xml`,
        host: `${COMPANY_INFO.website}`,
    };
}
