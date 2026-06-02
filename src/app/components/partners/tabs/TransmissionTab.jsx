export default function TransmissionTab() {
    return (
        <div className="space-y-6">

            <label className="flex gap-2">
                <input type="checkbox" />
                Use Static IP Address
            </label>

            <label className="flex gap-2">
                <input type="checkbox" />
                Disable Payload Chunking
            </label>

            <label className="flex gap-2">
                <input type="checkbox" />
                Auto Retry Incomplete Messages
            </label>

            <label className="flex gap-2">
                <input type="checkbox" />
                Disable Downstream Processing For Failed Messages
            </label>

            <div>
                <label>Transmission Timeout</label>

                <select className="w-full border rounded-lg p-3">
                    <option>60 seconds</option>
                    <option>120 seconds</option>
                    <option>300 seconds</option>
                </select>
            </div>

            <hr />

            <h3 className="font-semibold">
                Message Retry Settings
            </h3>

            <div>
                <label>Retry Mode</label>

                <select className="w-full border rounded-lg p-3">
                    <option>Exponential Backoff</option>
                    <option>Fixed Delay</option>
                </select>
            </div>

            <div>
                <label>Max Auto Retry Count</label>

                <select className="w-full border rounded-lg p-3">
                    <option>10 retries</option>
                    <option>20 retries</option>
                    <option>30 retries</option>
                </select>
            </div>

            <hr />

            <h3 className="font-semibold">
                Content Type Overrides
            </h3>

            <button
                type="button"
                className="bg-blue-600 text-white px-3 py-2 rounded"
            >
                + Add Content Type Override
            </button>

            <hr />

            <h3 className="font-semibold">
                Header Profiles
            </h3>

            <button
                type="button"
                className="bg-blue-600 text-white px-3 py-2 rounded"
            >
                + Add Header Profile
            </button>

        </div>
    );
}