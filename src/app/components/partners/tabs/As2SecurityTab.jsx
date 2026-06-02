export default function As2SecurityTab() {
    return (
        <div className="space-y-6">

            <div>
                <h3 className="font-semibold mb-4">
                    Outgoing
                </h3>

                <label className="flex gap-2 mb-4">
                    <input type="checkbox" />
                    Encrypt Outgoing Messages
                </label>

                <div className="mb-4">
                    <label>Encryption Algorithm</label>

                    <select className="w-full border rounded-lg p-3">
                        <option>Triple DES (168 bit)</option>
                        <option>AES128</option>
                        <option>AES256</option>
                    </select>
                </div>

                <label className="flex gap-2 mb-4">
                    <input type="checkbox" />
                    Sign Outgoing Messages / MDNs
                </label>

                <div>
                    <label>Sign Digest Algorithm</label>

                    <select className="w-full border rounded-lg p-3">
                        <option>SHA-1</option>
                        <option>SHA-256</option>
                        <option>SHA-512</option>
                    </select>
                </div>
            </div>

            <label className="flex gap-2">
                <input type="checkbox" />
                Compress Messages
            </label>

            <hr />

            <div>
                <h3 className="font-semibold mb-4">
                    Incoming
                </h3>

                <label className="flex gap-2 mb-3">
                    <input type="checkbox" />
                    Reject Insecure Incoming Messages
                </label>

                <label className="flex gap-2">
                    <input type="checkbox" />
                    Send Error MDNs For Algorithm Mismatches
                </label>
            </div>

        </div>
    );
}