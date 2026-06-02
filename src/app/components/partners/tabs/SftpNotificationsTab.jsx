export default function SftpNotificationsTab() {
    return (
        <div className="space-y-4">

            <label className="flex gap-2">
                <input type="checkbox" />
                Enable Email Notifications for Incoming SFTP Messages
            </label>

            <label className="flex gap-2">
                <input type="checkbox" />
                Enable Email Notifications for Outgoing SFTP Messages
            </label>

            <label className="flex gap-2">
                <input type="checkbox" />
                Enable Email Notifications for SFTP Message Send Failures
            </label>

        </div>
    );
}