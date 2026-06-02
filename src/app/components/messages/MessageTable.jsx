'use client';

export default function MessageTable({
    columns,
    emptyMessage
}) {
    return (
        <>
            <div className="overflow-hidden rounded-xl border bg-white shadow-sm text-gray-500">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column}
                                    className="p-4 text-left"
                                >
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="py-20 text-center text-gray-500"
                            >
                                {emptyMessage}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}