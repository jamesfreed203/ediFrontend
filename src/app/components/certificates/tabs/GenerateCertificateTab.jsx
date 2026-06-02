export default function GenerateCertificateTab() {
    return (
        <div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                Generate new self-signed certificate.
            </div>

            <div className="grid md:grid-cols-2 gap-5">

                <div>
                    <label>Certificate Type</label>

                    <select className="w-full border rounded-lg p-3">
                        <option>
                            Station Keypair
                        </option>
                    </select>
                </div>

                <div>
                    <label>Common Name [CN]</label>

                    <input
                        className="w-full border rounded-lg p-3"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label>Organization Unit [OU]</label>

                    <input
                        className="w-full border rounded-lg p-3"
                    />
                </div>

                <div>
                    <label>Organization [O]</label>

                    <input
                        className="w-full border rounded-lg p-3"
                    />
                </div>

                <div>
                    <label>City [L]</label>

                    <input
                        className="w-full border rounded-lg p-3"
                    />
                </div>

                <div>
                    <label>State [ST]</label>

                    <input
                        className="w-full border rounded-lg p-3"
                    />
                </div>

                <div>
                    <label>Country [C]</label>

                    <input
                        className="w-full border rounded-lg p-3"
                        placeholder="United States"
                    />
                </div>

                <div>
                    <label>Key Length</label>

                    <select className="w-full border rounded-lg p-3">
                        <option>2048</option>
                        <option>4096</option>
                    </select>
                </div>

                <div>
                    <label>Validity</label>

                    <select className="w-full border rounded-lg p-3">
                        <option>1 Year</option>
                        <option>5 Years</option>
                        <option>10 Years</option>
                    </select>
                </div>

                <div>
                    <label>Certificate Password</label>

                    <input
                        type="password"
                        className="w-full border rounded-lg p-3"
                    />
                </div>

            </div>

            <div className="mt-6">
                <button className="bg-blue-600 text-white px-5 py-2 rounded">
                    Create
                </button>
            </div>

        </div>
    );
}