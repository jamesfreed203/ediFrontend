export default function OtherOptionsTab() {
    return (
        <div className="space-y-5">

            <div>
                <label>Description</label>

                <textarea
                    rows={4}
                    className="w-full border rounded-lg p-3"
                    placeholder="Short description about trading partner"
                />
            </div>

            <label className="flex gap-2">
                <input type="checkbox" />
                Permanently Delete Attachments After Successful MDN
            </label>

            <label className="flex gap-2">
                <input type="checkbox" />
                Set As Default Partner
            </label>

        </div>
    );
}