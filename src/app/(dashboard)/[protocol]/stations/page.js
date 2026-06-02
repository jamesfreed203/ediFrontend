'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import StationCard from '@/app/components/stations/StationCard';
import StationToolbar from '@/app/components/stations/StationToolbar';

export default function StationsPage() {
    const { protocol } = useParams();

    const stations = [
        {
            id: 1,
            name: 'Mock Station - shopperon-ecom',
            identifier: 'mock-shopperon-ecom',
            email: 'kanuj23@gmail.com',
            incoming: 0,
            outgoing: 0,
        },
    ];

    return (
        <div>
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Stations
                    </h1>

                    <p className="text-gray-500 mt-1">
                        {protocol?.toUpperCase()}
                    </p>
                </div>

                <Link
                    href={`/${protocol}/stations/create`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    + New Station
                </Link>
            </div>

            <StationToolbar />

            {/* Station Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
                {stations.map((station) => (
                    <StationCard
                        key={station.id}
                        station={station}
                    />
                ))}
            </div>
        </div>
    );
}