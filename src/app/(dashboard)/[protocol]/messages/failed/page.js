import MessagePage from '@/app/components/messages/MessagePage';

export default function FailedPage() {
    return (
        <MessagePage
            title="Failed Messages"
            emptyMessage="No failed messages"
            columns={[
                'Recipient',
                'Subject',
                'Queued At'
            ]}
        />
    );
}