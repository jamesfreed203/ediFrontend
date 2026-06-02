import MessagePage from '@/app/components/messages/MessagePage';

export default function InboxPage() {
    return (
        <MessagePage
            title="Received Messages"
            emptyMessage="No received messages to display"
            columns={[
                'Sender',
                'Subject',
                'MDN State',
                'Received At'
            ]}
        />
    );
}