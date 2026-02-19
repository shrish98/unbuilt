"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
    const { user, isLoaded } = useUser();

    useEffect(() => {
        if (isLoaded && user) {
            const syncUser = async () => {
                const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
                const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

                console.log("Supabase Config Check:", {
                    url: supabaseUrl,
                    keyLength: supabaseKey ? supabaseKey.length : 0
                });

                console.log("Checking user in Supabase...", user.id);
                try {
                    const { data, error: selectError } = await supabase.from("users").select("id").eq("id", user.id).single();

                    if (selectError && selectError.code !== "PGRST116") { // PGRST116 is "Row not found"
                        console.error("Error checking user:", selectError);
                    }

                    if (!data) {
                        const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();
                        console.log("User not found, inserting...", { id: user.id, email: user.primaryEmailAddress?.emailAddress });

                        const { error: insertError } = await supabase.from("users").insert({
                            id: user.id,
                            email: user.primaryEmailAddress?.emailAddress,
                            name: name,
                        });

                        if (insertError) {
                            console.error("Error inserting user:", insertError);
                        } else {
                            console.log("User inserted successfully!");
                        }
                    } else {
                        console.log("User already exists in Supabase.");
                    }
                } catch (err) {
                    console.error("Unexpected error syncing user:", err);
                }
            };
            syncUser();
        }
    }, [isLoaded, user]);

    return (
        <div className="min-h-screen bg-[#03030d] text-white">
            <header className="border-b border-white/5 px-6 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold">VidMax Dashboard</h1>
                <UserButton />
            </header>
            <main className="p-8 max-w-6xl mx-auto">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Welcome to your workspace!</h2>
                    <p className="text-white/60 mb-8">Start creating your AI videos here.</p>
                    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold shadow-lg shadow-violet-500/20 hover:from-violet-500 hover:to-fuchsia-500 transition-all">
                        Create First Video
                    </button>
                </div>
            </main>
        </div>
    );
}
