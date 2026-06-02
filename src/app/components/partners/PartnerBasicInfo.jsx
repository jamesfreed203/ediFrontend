export default function PartnerBasicInfo() {
    return (
        <div className="space-y-5">

            <div>
                <label>Name *</label>

                <input
                    className="w-full border rounded-lg p-3"
                    placeholder="Name"
                />
            </div>

            <div>
                <label>AS2 Identifier *</label>

                <input
                    className="w-full border rounded-lg p-3"
                    placeholder="AS2 Identifier"
                />
            </div>

            <div>
                <label className="flex gap-2">
                    <input type="checkbox" />
                    Station Link
                </label>
            </div>

            <div>
                <label>URL *</label>

                <input
                    className="w-full border rounded-lg p-3"
                    placeholder="https://partner.com/receiver"
                />
            </div>

            <div>
                <label>Message Subject</label>

                <input
                    className="w-full border rounded-lg p-3"
                    placeholder="AS2 message from MFT Gateway"
                />
            </div>

        </div>
    );
}