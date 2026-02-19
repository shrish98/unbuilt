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
        <div className="w-full">
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-3xl mx-auto shadow-sm mt-8">
                <h2 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">Welcome to your workspace!</h2>
                <p className="text-lg text-slate-600 mb-8">Start creating your stunning AI videos here.</p>
                <button className="px-8 py-4 rounded-xl bg-blue-600 font-semibold text-white shadow-md hover:bg-blue-700 transition-all text-lg">
                    Create First Video
                </button>
            </div>
        </div>
    );
}
