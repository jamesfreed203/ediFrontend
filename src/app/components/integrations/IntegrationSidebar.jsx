'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
    Database,
    FolderSync,
    Webhook,
    FileText,
    Globe,
} from 'lucide-react';

export default function IntegrationSidebar() {
    const pathname = usePathname();

    const items = [
        {
            label: 'S3',
            href: '/integrations/s3',
            icon: <Database size={18} />,
        },
        {
            label: 'SFTP',
            href: '/integrations/sftp',
            icon: <FolderSync size={18} />,
        },
        {
            label: 'Webhooks',
            href: '/integrations/webhooks',
            icon: <Webhook size={18} />,
        },
        {
            label: 'EDI Generator',
            href: '/integrations/edi-generator',
            icon: <FileText size={18} />,
        },
        {
            label: 'REST API',
            href: '/integrations/rest-api',
            icon: <Globe size={18} />,
        },
    ];

    return (
        <div className="w-64 bg-white border rounded-xl p-4 h-fit text-gray-500">
            <h3 className="font-semibold mb-4">
                Integrations
            </h3>

            <div className="space-y-1">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                            pathname === item.href
                                ? 'bg-blue-50 text-blue-600'
                                : 'hover:bg-gray-50'
                        }`}
                    >
                        {item.icon}
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}