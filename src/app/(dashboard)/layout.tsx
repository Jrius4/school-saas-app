import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Kazibwe Dev School Management Dashboard - SAAS",
    description: "Next.js School Management System",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div
            className={`${inter.className} antialiased h-screen flex`}
        >
            {/* LEFT */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-400"></div>
            {/* RIGHT */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-yellow-300">{children}</div>
        </div>

    );
}
