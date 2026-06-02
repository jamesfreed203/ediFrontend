import MessagePage from '@/app/components/messages/MessagePage';

export default function IncompletePage() {
    return (
        <MessagePage
            title="Incomplete Messages"
            emptyMessage="No incomplete messages"
            columns={[
                'Recipient',
                'Subject',
                'Queued At'
            ]}
        />
    );
}