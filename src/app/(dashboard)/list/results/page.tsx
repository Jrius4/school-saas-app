"use client"
// todo: stopped on results list
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, resultsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
type Result = {
    id: number;
    subject: string;
    class: string;
    student: string;
    teacher: string;
    date: string;
    type: string;
    score: number;
};
const columns = [
    {
        header: "info", accessor: 'info',

    },

    {
        header: "Class", accessor: 'class', className: "hidden md:table-cell"
    },
    {
        header: "Teacher", accessor: 'teacher', className: "hidden md:table-cell"
    },
    {
        header: "Student", accessor: 'student', className: "hidden md:table-cell"
    },
    {
        header: "Date", accessor: 'date', className: "hidden md:table-cell"
    },
    {
        header: "Type", accessor: 'type', className: "hidden md:table-cell"
    },
    {
        header: "Score", accessor: 'score', className: "hidden md:table-cell"
    },

    {
        header: "Action", accessor: 'action'
    }
];

const renderRow = (item: Result) => (
    <tr key={`${item.id}-exams`} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
        <td className="flex items-center gap-4 p-4">

            <div className="flex flex-col">
                <h3 className="font-semibold">{item.subject}</h3>
            </div>
        </td>
        <td className="hidden md:table-cell">
            {item.class}
        </td>
        <td className="hidden md:table-cell">
            {item.teacher}
        </td>
        <td className="hidden md:table-cell">
            {item.student}
        </td>
        <td className="hidden md:table-cell">
            {item.date}
        </td>
        <td className="hidden md:table-cell">
            {item.type}
        </td>
        <td className="hidden md:table-cell">
            {item.score}
        </td>
        <td>
            <div className="flex items-center gap-2">
                <Link href={`/list/exams/${item.id}`} >
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
function ResultListPage() {
    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
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
            <Table columns={columns} renderRow={renderRow} data={resultsData} />

            {/* PAGINATION */}

            <Pagination />

        </div>
    )
}

export default ResultListPage;