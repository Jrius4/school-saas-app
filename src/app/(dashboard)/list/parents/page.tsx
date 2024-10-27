"use client"

import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, parentsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
type Parent = {
    id: number;
    name: string;
    email: string;
    phone: string;
    class: string;
    address: string;
    students: string[],
};
const columns = [
    {
        header: "info", accessor: 'info',

    },
    {
        header: "Students", accessor: 'students', className: "hidden md:table-cell"
    },


    {
        header: "Phone", accessor: 'phone', className: "hidden md:table-cell"
    },
    {
        header: "Address", accessor: 'address', className: "hidden md:table-cell"
    },
    {
        header: "Action", accessor: 'action'
    }
];

const renderRow = (item: Parent) => (
    <tr key={`${item.id}-student`} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
        <td className="flex items-center gap-4 p-4">
            {/* <Image src={item.photo} alt="" width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover" /> */}
            <div className="flex flex-col">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-xs text-gray-500">{item?.email}</p>
            </div>
        </td>


        <td className="hidden md:table-cell">
            {item.students.join(", ")}
        </td>
        <td className="hidden md:table-cell">
            {item.phone}
        </td>
        <td className="hidden md:table-cell">
            {item.address}
        </td>
        <td>
            <div className="flex items-center gap-2">
                <Link href={`/list/parents/${item.id}`} >
                    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky" title="view" ><Image src="/view.png" alt="" width={16} height={16} /></button>
                </Link>
                {
                    role === "admin" && (

                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple" title="delete" ><Image src="/delete.png" alt="" width={16} height={16} /></button>

                    )
                }
            </div>
        </td>
    </tr>
);
function ParentListPage() {
    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button title="filter" className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"><Image src="/filter.png" alt="" width={14} height={14} /></button>
                        <button title="filter" className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"><Image src="/sort.png" alt="" width={14} height={14} /></button>
                        <button title="filter" className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"><Image src="/add.png" alt="" width={14} height={14} /></button>
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={parentsData} />

            {/* PAGINATION */}

            <Pagination />

        </div>
    )
}

export default ParentListPage;