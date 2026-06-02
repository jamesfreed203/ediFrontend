export default function SftpOtherOptionsTab() {
    return (
        <div>

            <label className="block mb-2">
                Description
            </label>

            <textarea
                rows={4}
                className="w-full border rounded-lg p-3"
                placeholder="Short description about trading partner"
            />

        </div>
    );
}