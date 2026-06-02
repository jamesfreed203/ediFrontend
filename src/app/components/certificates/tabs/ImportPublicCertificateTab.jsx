export default function ImportPublicCertificateTab() {
    return (
        <div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                Import public certificate to trust store.
            </div>

            <div className="mb-5">
                <label>
                    Certificate Type
                </label>

                <select className="w-full border rounded-lg p-3">
                    <option>
                        Encrypt/Sign Certificate
                    </option>
                </select>
            </div>

            <div className="mb-6">
                <label>
                    Public Certificate
                </label>

                <input
                    type="file"
                    className="w-full border rounded-lg p-3"
                />
            </div>

            <button className="bg-blue-600 text-white px-5 py-2 rounded">
                Import
            </button>

        </div>
    );
}