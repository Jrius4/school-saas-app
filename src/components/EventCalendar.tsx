"use client"

import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

import React, { useState } from "react"
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


const events = [
    {
        id: 1,
        title: "Math Test",
        date: "2024-09-01",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        date: "2024-10-06",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        date: "2024-09-01",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor",
        date: "2024-10-06",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
        id: 5,
        title: "Lorem ipsum dolor",
        date: "2024-10-06",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
        id: 6,
        title: "Lorem ipsum dolor",
        date: "2024-10-06",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur",
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded-md w-full'>
            <Calendar onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-2 '>Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map((event) => (
                    <div key={event.id} className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaYellow">
                        {/* <div className="w-5 h-5 bg-blue-500 rounded-full"></div> */}
                        <div className='flex items-center justify-between'>
                            <h2 className="text-sm font-semibold text-gray-600">{event.title}</h2>
                            <p className="text-xs text-gray-400">{event.time}</p>
                        </div>
                        <div>
                            <p className="text-sm mt-2 text-gray-500">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar