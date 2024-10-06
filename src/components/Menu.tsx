import Image from "next/image";
import Link from "next/link";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/teacher.png",
                label: "Teachers",
                href: "/teachers",
                visible: ["admin", "teacher",]
            },
            {
                icon: "/student.png",
                label: "Students",
                href: "/students",
                visible: ["admin", "teacher",]
            },
            {
                icon: "/parent.png",
                label: "Parents",
                href: "/parents",
                visible: ["admin", "teacher",]
            },
            {
                icon: "/class.png",
                label: "Classes",
                href: "/classes",
                visible: ["admin", "teacher",]
            },
            {
                icon: "/lesson.png",
                label: "Lessons",
                href: "/lessons",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/attendance.png",
                label: "Attendance",
                href: "/classes",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/calendar.png",
                label: "Events",
                href: "/events",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/message.png",
                label: "Messages",
                href: "/messages",
                visible: ["admin", "teacher", "student", "parent"]
            },
        ]
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"]
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
