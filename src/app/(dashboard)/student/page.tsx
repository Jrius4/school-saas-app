import Announcements from "@/components/Announcements";
import EventCalendar from "@/components/EventCalendar";

const StudentPage = () => {
    return (<div className='p-4 flex gap-4 flex-col xl:flex-row'>
        {/* LEFT */}
        <div className="w-full xl:w-2/3">

        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {/* EVENTS CALENDAR */}
            <EventCalendar />
            {/* ANNOUNCEMENTS */}
            <Announcements />
        </div>
    </div>)
}

export default StudentPage;