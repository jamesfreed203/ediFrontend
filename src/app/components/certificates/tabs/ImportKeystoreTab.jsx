export default function ImportKeystoreTab() {
    return (
        <div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                Import public/private key pair
                from existing keystore.
            </div>

            <div className="mb-5">
                <label>
                    Certificate Type
                </label>

                <select className="w-full border rounded-lg p-3">
                    <option>
                        Station Keypair
                    </option>
                </select>
            </div>

            <div className="mb-5">
                <label>
                    Keystore
                </label>

                <input
                    type="file"
                    className="w-full border rounded-lg p-3"
                />
            </div>

            <div className="mb-6">
                <label>
                    Keystore Password
                </label>

                <input
                    type="password"
                    className="w-full border rounded-lg p-3"
                />
            </div>

            <button className="bg-blue-600 text-white px-5 py-2 rounded">
                Import
            </button>

        </div>
    );
}