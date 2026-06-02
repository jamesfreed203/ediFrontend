import MessagePage from '@/app/components/messages/MessagePage';

export default function QueuedPage() {
    return (
        <MessagePage
            title="Queued Messages"
            emptyMessage="No queued messages"
            columns={[
                'Recipient',
                'Subject',
                'Queued At'
            ]}
        />
    );
}