import { useState, useEffect } from "react";
import { IOrganizer, getOrganizerByIdApi, updateOrganizer } from "../../../Redux/features/organizer/organizerApi";
import { Input } from "../../../components/Fragments/Input";

interface EditOrganizerProps {
    organizerId: string;
    onClose: () => void;
    onUpdateSuccess: (updatedOrganizer: IOrganizer) => void;
}

const UpdateOrganizer: React.FC<EditOrganizerProps> = ({ organizerId, onClose, onUpdateSuccess }) => {
    const [organizerName, setOrganizerName] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [phoneNumber, setphoneNumber] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [saving, setSaving] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    // Ambil detail organizer berdasarkan ID
    useEffect(() => {
        const fetchOrganizerDetails = async () => {
            try {
                const response = await getOrganizerByIdApi(organizerId);
                if (response?.success) {
                    setOrganizerName(response.data.organizerName);
                    setEmail(response.data.email);
                    setStatus(response.data.status);
                    setUsername(response.data.username);
                    setphoneNumber(response.data.phoneNumber);
                } else {
                    setError("Gagal mengambil data organizer.");
                }
            } catch (err) {
                setError("Terjadi kesalahan saat mengambil data.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrganizerDetails();
    }, [organizerId]);

    const handleUpdate = async () => {
        setSaving(true);
        setError("");
        try {
            const updatedData = await updateOrganizer(organizerId, { organizerName, email, status, phoneNumber, username });
            if (updatedData?.success) {
                onUpdateSuccess(updatedData.data);
                onClose();
            } else {
                setError("Gagal memperbarui data.");
            }
        } catch (err) {
            setError("Terjadi kesalahan saat memperbarui data.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg p-6 w-96">
                    <h2 className="text-xl font-bold mb-4">Loading...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
                <h2 className="text-xl font-bold mb-4 text-black text-center">Edit Organizer</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <div className="mb-4 text-black">
                    <Input label={"Nama Organizer"} type={"text"} name={"title"} title={"Masukan Nama Organizer"} variant={'bg-slate-100'} value={organizerName} onChange={(e) => setOrganizerName(e.target.value)} />
                </div>
                <div className="mb-4 text-black">
                    <Input label={"Email"} type={"email"} name={"title"} title={"Masukan Email"} variant={'bg-slate-100'} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4 text-black">
                    <Input label={"Username"} type={"text"} name={"title"} title={"Masukan Event"} variant={'bg-slate-100'} value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-4 text-black">
                    <Input label={"Phone Number"} type={"number"} name={"title"} title={"Masukan Event"} variant={'bg-slate-100'} value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
                </div>
                <span className="mt-3 mb-2 text-black">Status</span>
                <div className="mt-4 mb-7">
                    <select className="select text-black bg-slate-100 w-full max-w-xs border-0" name="status" onChange={(e) => setStatus(e.target.value)} value={status}>
                        <option disabled>Pilih Status Event:</option>
                        <option value="Aktif">Aktif</option>
                        <option value="Tidak Aktif">Tidak Aktif</option>
                    </select>
                </div>


                <div className="flex justify-end gap-2">
                    <button
                        className="btn bg-secondary border-0 text-white"
                        onClick={onClose}
                        disabled={saving}
                    >
                        Batal
                    </button>
                    <button
                        className={`btn ${saving ? "btn-disabled" : "bg-primary text-white border-0"}`}
                        onClick={handleUpdate}
                        disabled={saving}
                    >
                        {saving ? "Menyimpan..." : "Simpan"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateOrganizer;
