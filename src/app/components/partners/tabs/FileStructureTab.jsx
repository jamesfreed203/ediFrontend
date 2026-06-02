export default function FileStructureTab() {
    return (
        <div>

            <div className="bg-gray-100 rounded-lg p-4 mb-3">
                <strong>Inbox:</strong>
                <br />
                AS2/files/station-id/partner-id/inbox/message-id/
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-3">
                <strong>Outbox:</strong>
                <br />
                AS2/files/station-id/partner-id/outbox/message-id/
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-5">
                <strong>Failed:</strong>
                <br />
                AS2/files/station-id/partner-id/failed/message-id/
            </div>

            <label className="flex gap-2 mb-4">
                <input type="checkbox" />
                Remove Random Message ID Subdirectory
            </label>

            <label className="flex gap-2">
                <input type="checkbox" />
                Add Custom Subdirectory
            </label>

        </div>
    );
}