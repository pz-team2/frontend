import { useEffect, useState } from "react";
import api from "../../services/api";

interface Option {
    id: string;
    name: string;
}

interface SelectProps {
    judul: string;
    options?: Option[];
    apiOptions?: boolean;
    apiEndpoint?: string;
}

export const SelectInput: React.FC<SelectProps> = ({ judul, options = [], apiOptions = false, apiEndpoint }) => {
    const [dataOptions, setDataOptions] = useState<Option[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        if (apiOptions && apiEndpoint) {
            setLoading(true);
            try {
                const response = await api.get(apiEndpoint);
                setDataOptions(response.data.data);
            } catch (error) {
                console.error("Error fetching data from API:", error);
            } finally {
                setLoading(false);
            }
        } else {
            setDataOptions(options);
        }
    };

    useEffect(() => {
        fetchData();
    }, [apiOptions, apiEndpoint, options]);

    return (
        <div>
            <select className="select bg-slate-100 w-full max-w-xs border-0">
                <option value="" disabled>{judul}</option>
                {loading ? (
                    <option disabled>Loading...</option>
                ) : (
                    dataOptions.map(option => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                    ))
                )}
            </select>
        </div>
    );
};
