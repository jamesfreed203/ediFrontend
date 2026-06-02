import MessagePage from '@/app/components/messages/MessagePage';

export default function SentPage() {
    return (
        <MessagePage
            title="Sent Messages"
            emptyMessage="No sent messages to display"
            columns={[
                'Recipient',
                'Subject',
                'MDN State',
                'Sent At'
            ]}
        />
    );
}