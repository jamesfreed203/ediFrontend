export default function S3Page() {
    return (
        <div>
            <div className="mb-6 text-gray-500">
                <h1 className="text-3xl font-bold">
                    S3 Integration
                </h1>

                <p className="text-gray-500">
                    shopperon-ecom
                </p>
            </div>

            <div className="bg-white border rounded-xl p-6 max-w-4xl text-gray-500">

                <h2 className="text-xl font-semibold mb-4">
                    Directly access your S3 bucket
                    using AWS credentials
                </h2>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    Make sure not to include "/"
                    in partner/station identifiers.
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                    <strong>Important:</strong>
                    <ul className="list-disc ml-5 mt-2">
                        <li>
                            Credentials cannot be
                            recovered once lost.
                        </li>
                        <li>
                            New credentials replace
                            old credentials.
                        </li>
                    </ul>
                </div>

                <label className="flex items-center gap-2 mb-4">
                    <input type="checkbox" />
                    Read and understood terms
                </label>

                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
                    Enable S3
                </button>

            </div>
        </div>
    );
}