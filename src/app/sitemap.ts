import { COMPANY_INFO } from '@/data/company';
import type { MetadataRoute } from 'next';

const siteUrl = COMPANY_INFO.website.replace(/\/+$/, ''); // Remove trailing slash if exists

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return [
        {
            url: `${siteUrl}/`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${siteUrl}/layanan`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${siteUrl}/proyek`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${siteUrl}/tentang-kami`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/legalitas`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/kontak`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
