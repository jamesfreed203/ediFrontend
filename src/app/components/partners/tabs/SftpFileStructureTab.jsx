export default function SftpFileStructureTab() {
    return (
        <div>

            <label className="flex gap-2 mb-4">
                <input type="checkbox" />
                Remove Subdirectory With Random Message ID
            </label>

            <label className="flex gap-2 mb-6">
                <input type="checkbox" />
                Add Custom Subdirectory
            </label>

            <h3 className="font-semibold mb-3">
                Internal Directories
            </h3>

            <div className="bg-gray-100 rounded p-3 mb-2">
                <strong>Inbox:</strong><br />
                SFTP/partners/&lt;partner-id&gt;/inbox/&lt;message-id&gt;/
            </div>

            <div className="bg-gray-100 rounded p-3 mb-2">
                <strong>Outbox:</strong><br />
                SFTP/partners/&lt;partner-id&gt;/outbox/&lt;message-id&gt;/
            </div>

            <div className="bg-gray-100 rounded p-3 mb-5">
                <strong>Failed:</strong><br />
                SFTP/partners/&lt;partner-id&gt;/failed/&lt;message-id&gt;/
            </div>

            <h3 className="font-semibold mb-3">
                External Partner Directories
            </h3>

            <div className="bg-gray-100 rounded p-3">
                <strong>SFTP Home Directory:</strong><br />
                SFTP/external/&lt;partner-id&gt;/
            </div>

        </div>
    );
}