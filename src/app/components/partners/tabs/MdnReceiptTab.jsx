export default function MdnReceiptTab() {
    return (
        <div className="space-y-4">

            <label className="flex gap-2">
                <input type="checkbox" />
                Request MDN
            </label>

            <label className="flex gap-2 ml-5">
                <input type="checkbox" />
                Request Digitally Signed MDN
            </label>

            <label className="flex gap-2 ml-5">
                <input type="checkbox" />
                Remove Disposition Notification Options Header
            </label>

            <label className="flex gap-2 ml-5">
                <input type="checkbox" />
                Request Asynchronous MDN
            </label>

        </div>
    );
}