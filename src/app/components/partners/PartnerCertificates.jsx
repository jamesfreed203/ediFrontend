export default function PartnerCertificates() {
    return (
        <div className="border rounded-xl mt-6 p-5">

            <h3 className="font-semibold mb-4">
                Certificates
            </h3>

            <div className="mb-4">
                <label>
                    Encryption Certificate
                </label>

                <select className="w-full border rounded-lg p-3">
                    <option>
                        No certificates available
                    </option>
                </select>
            </div>

            <label className="flex gap-2 mb-3">
                <input type="checkbox" />

                Use Different Certificate For
                Signature Verification
            </label>

            <label className="flex gap-2">
                <input type="checkbox" />

                Add HTTPS (TLS/SSL) Certificate
            </label>

        </div>
    );
}