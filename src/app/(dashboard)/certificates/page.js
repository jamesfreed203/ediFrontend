import CertificateToolbar from '@/app/components/certificates/CertificateToolbar';
import CertificateTable from '@/app/components/certificates/CertificateTable';

export default function CertificatesPage() {
    const certificates = [
        {
            id: 1,
            commonName: 'MFT Gateway Mock',
            serialNumber: '25b59e42',
            expireOn: '14 Sep 2031',
            type: 'Partner',
            belongsTo: 'mock-mftg',
        },
        {
            id: 2,
            commonName: 'MFT Gateway Tenant Mock',
            serialNumber: '47ca8c26',
            expireOn: '14 Sep 2031',
            type: 'Station',
            belongsTo: 'mock-shopperon-ecom',
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-6 text-gray-500">
                <h1 className="text-3xl font-bold">
                    Certificates
                </h1>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    + New Certificate
                </button>
            </div>

            <CertificateToolbar />

            <CertificateTable
                certificates={certificates}
            />
        </div>
    );
}