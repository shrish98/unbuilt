"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Video,
    BookOpen,
    CreditCard,
    Settings,
    ArrowUpCircle,
    User,
    PlusCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuOptions = [
    { name: "Series", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Videoz", icon: Video, href: "/dashboard/videoz" },
    { name: "Guides", icon: BookOpen, href: "/dashboard/guides" },
    { name: "Billing", icon: CreditCard, href: "/dashboard/billing" },
    { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

const footerOptions = [
    { name: "Upgrade", icon: ArrowUpCircle, href: "/dashboard/upgrade" },
    { name: "Profile Setting", icon: User, href: "/dashboard/profile" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-72 h-screen bg-white border-r border-slate-200 flex flex-col p-6 shadow-sm flex-shrink-0">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Image src="/logo.avif" alt="VidMax Logo" width={40} height={40} className="rounded-lg object-contain" />
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">VidMax</h1>
            </div>

            {/* Create Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md mb-8 group">
                <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                <span className="text-lg">Create New Series</span>
            </button>

            {/* Navigation */}
            <div className="flex-1 space-y-2">
                {menuOptions.map((option) => {
                    const isActive = pathname === option.href || (pathname.startsWith(option.href) && option.href !== "/dashboard");
                    const Icon = option.icon;
                    return (
                        <Link
                            key={option.name}
                            href={option.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-lg",
                                isActive
                                    ? "bg-blue-50 text-blue-700"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            )}
                        >
                            <Icon className={cn("w-6 h-6", isActive ? "text-blue-600" : "text-slate-500")} />
                            {option.name}
                        </Link>
                    );
                })}
            </div>

            {/* Footer Navigation */}
            <div className="mt-auto pt-6 border-t border-slate-200 space-y-2">
                {footerOptions.map((option) => {
                    const isActive = pathname === option.href;
                    const Icon = option.icon;
                    return (
                        <Link
                            key={option.name}
                            href={option.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-lg",
                                isActive
                                    ? "bg-blue-50 text-blue-700"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            )}
                        >
                            <Icon className={cn("w-6 h-6", isActive ? "text-blue-600" : "text-slate-500")} />
                            {option.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
