'use client';

import { useParams } from 'next/navigation';
import MessageToolbar from './MessageToolbar';
import MessageTable from './MessageTable';

export default function MessagePage({
    title,
    emptyMessage,
    columns
}) {
    const { protocol } = useParams();

    return (
        <div className="flex-1">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    {title}
                </h1>

                <p className="mt-1 text-gray-500">
                    {protocol?.toUpperCase()}
                </p>
            </div>

            <MessageToolbar />

            <MessageTable
                columns={columns}
                emptyMessage={emptyMessage}
            />
        </div>
    );
}