import { UserButton } from "@clerk/nextjs";

export function Header() {
    return (
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-end px-8 shadow-sm flex-shrink-0">
            <div className="flex items-center gap-4">
                <UserButton appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }} />
            </div>
        </header>
    );
}
