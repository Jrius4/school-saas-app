import Image from "next/image";
import Link from "next/link";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/"
            },
            {
                icon: "/teacher.png",
                label: "Teachers",
                href: "/teachers"
            },
            {
                icon: "/student.png",
                label: "Students",
                href: "/students"
            },
            {
                icon: "/parent.png",
                label: "Parents",
                href: "/parents"
            },
            {
                icon: "/class.png",
                label: "Classes",
                href: "/classes"
            },
            {
                icon: "/lesson.png",
                label: "Lessons",
                href: "/lessons"
            },
            {
                icon: "/attendance.png",
                label: "Attendance",
                href: "/classes"
            },
            {
                icon: "/calendar.png",
                label: "Events",
                href: "/events"
            },
            {
                icon: "/message.png",
                label: "Messages",
                href: "/messages"
            },
        ]
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile"
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/teachers"
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/logout"
            },
        ]
    }
]
const Menu = () => {
    return (
        <div className="mt-4 text-sm">
            {
                menuItems.map(i => (
                    <div className='flex flex-col gap-2' key={i.title}>
                        <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
                        {i.items.map(j => (
                            <Link href={j.href} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2" key={j.label} >
                                <Image src={j.icon} alt="" width={20} height={20} /> <span className="hidden lg:block">{j.label}</span>
                            </Link>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default Menu;
