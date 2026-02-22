"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Skull, Zap, Lightbulb, HeartPulse, Cpu, DollarSign, CheckCircle2, Target } from "lucide-react";

const availableNiches = [
    { id: "scary-stories", title: "Scary Stories", description: "Chilling tales and urban legends.", icon: Skull, color: "text-red-500" },
    { id: "motivational", title: "Motivational", description: "Boost productivity and mindset.", icon: Zap, color: "text-yellow-500" },
    { id: "interesting-facts", title: "Interesting Facts", description: "Mind-blowing trivia tidbits.", icon: Lightbulb, color: "text-blue-500" },
    { id: "health-fitness", title: "Health & Fitness", description: "Quick tips for better lifestyle.", icon: HeartPulse, color: "text-green-500" },
    { id: "tech-news", title: "Tech News", description: "Latest updates from tech world.", icon: Cpu, color: "text-purple-500" },
    { id: "finance-tips", title: "Finance Tips", description: "Smart money management advice.", icon: DollarSign, color: "text-green-600" },
];

export function Step1Niche({
    selectedNiche,
    onSelect
}: {
    selectedNiche: string | null;
    onSelect: (niche: string) => void;
}) {
    return (
        <div className="space-y-4">
            <Tabs defaultValue="available" className="w-full">
                <TabsList className="bg-slate-900 text-slate-400 p-1 w-full max-w-sm grid grid-cols-2 rounded-xl mb-6">
                    <TabsTrigger value="available" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900">Available Niche</TabsTrigger>
                    <TabsTrigger value="custom" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900">Custom Niche</TabsTrigger>
                </TabsList>

                <TabsContent value="available">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {availableNiches.map((niche) => {
                            const isSelected = selectedNiche === niche.id;
                            const Icon = niche.icon;
                            return (
                                <div
                                    key={niche.id}
                                    className={cn(
                                        "cursor-pointer transition-all border rounded-xl p-5 flex flex-col justify-between min-h-[160px] relative hover:shadow-sm",
                                        isSelected ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-slate-200 bg-white hover:border-primary"
                                    )}
                                    onClick={() => onSelect(niche.id)}
                                >
                                    {isSelected && (
                                        <div className="absolute top-4 right-4 text-primary">
                                            <CheckCircle2 className="w-5 h-5 fill-primary text-white" />
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <Icon className={cn("w-6 h-6", niche.color)} strokeWidth={2} />
                                    </div>

                                    <div className="space-y-1 mt-auto">
                                        <h3 className="font-semibold text-[15px]">{niche.title}</h3>
                                        <p className="text-sm text-muted-foreground">{niche.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </TabsContent>

                <TabsContent value="custom">
                    <div className="min-h-[300px] border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4 bg-muted/20">
                        <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Custom Niche</h3>
                        <p className="text-sm text-muted-foreground max-w-sm">
                            Tell us exactly what kind of content you want to create and let AI handle the rest.
                        </p>
                        <div className="w-full max-w-md mt-6">
                            <input
                                type="text"
                                placeholder="e.g. Vintage Camera Restoration"
                                className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all"
                                onChange={(e) => onSelect(e.target.value ? `custom-${e.target.value}` : "")}
                                value={selectedNiche?.startsWith("custom-") ? selectedNiche.replace("custom-", "") : ""}
                            />
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
