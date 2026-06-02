'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import PartnerCard from '@/app/components/partners/PartnerCard';
import PartnerToolbar from '@/app/components/partners/PartnerToolbar';

export default function PartnersPage() {
    const { protocol } = useParams();

    const partners = [
        {
            id: 1,
            name: 'Mock Partner - MFT Gateway',
            identifier: 'mock-mftg',
            url: 'https://as2.mftgateway.com/receiver',
            incoming: 0,
            outgoing: 0,
        },
    ];

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Partners
                    </h1>

                    <p className="text-gray-500 mt-1">
                        {protocol?.toUpperCase()}
                    </p>
                </div>

                <Link
                    href={`/${protocol}/partners/create`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    + New {protocol?.toUpperCase()} Partner
                </Link>
            </div>

            <PartnerToolbar />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
                {partners.map((partner) => (
                    <PartnerCard
                        key={partner.id}
                        partner={partner}
                    />
                ))}
            </div>
        </div>
    );
}