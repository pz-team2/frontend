import React from "react"

interface dataTable {

    columns: { key: string; label: string }[];
    data: { [key: string]: any }[];
}


export const Table: React.FC<dataTable> = ({ columns, data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full text-black">
                <thead className="text-black">
                    <tr className="border-gray-300">
                        {columns.map((col) => (
                            <th className="text-sm md:text-base p-2 md:p-4" key={col.key}>{col.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="border-gray-300">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-gray-300">
                            {columns.map((col) => (
                                <td className="text-sm md:text-base p-2 md:p-4" key={col.key}> {row[col.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
