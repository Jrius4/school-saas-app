"use client"
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
    return (
        <div>Event Calendar</div>
    )
}

export default EventCalendar