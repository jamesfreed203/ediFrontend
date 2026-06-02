'use client';

import { useParams } from 'next/navigation';

import PartnerForm from '@/app/components/partners/PartnerForm';
import SftpPartnerForm from '@/app/components/partners/SftpPartnerForm';

export default function CreatePartnerPage() {
    const { protocol } = useParams();

    if (protocol === 'as2') {
        return <PartnerForm />;
    }

    if (protocol === 'sftp') {
        return <SftpPartnerForm />;
    }

    return (
        <div className="text-red-500">
            Invalid protocol
        </div>
    );
}