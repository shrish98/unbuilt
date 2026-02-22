"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Step1Niche } from "@/components/dashboard/create/Step1Niche";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Define the global form state type
type FormData = {
    niche: string | null;
    language: string | null;
    voice: string | null;
    caption: string | null;
    style: string | null;
    duration: string | null;
};

export function CreateForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        niche: null,
        language: null,
        voice: null,
        caption: null,
        style: null,
        duration: null,
    });
    const totalSteps = 6;

    // Handle form data updates
    const updateFormData = (key: keyof FormData, value: string | null) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    // Handle step progression
    const nextStep = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    // Validate if the current step is complete to enable the Next button
    const isNextDisabled = () => {
        if (step === 1 && !formData.niche) return true;
        // add validation for other steps
        return false;
    };

    return (
        <div className="space-y-8 pb-12 w-full max-w-4xl mx-auto">
            {/* Progress Bar Top Section */}
            <div className="space-y-4">
                <div className="text-sm font-bold text-primary uppercase tracking-wider">
                    STEP {step} OF {totalSteps}
                </div>
                <div className="flex gap-2 w-full">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 w-full rounded-full transition-colors duration-300 ${i < step ? "bg-primary" : "bg-muted"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Form Steps Container */}
            <div className="mt-8 min-h-[450px]">
                {step === 1 && (
                    <Step1Niche
                        selectedNiche={formData.niche}
                        onSelect={(niche) => updateFormData("niche", niche)}
                    />
                )}
                {step === 2 && (
                    <div className="text-center py-20 text-muted-foreground">
                        <h3 className="text-xl text-foreground font-semibold mb-2">Step 2: Language & Voice Selection</h3>
                        <p>Coming soon...</p>
                    </div>
                )}
                {step > 2 && (
                    <div className="text-center py-20 text-muted-foreground">
                        <h3 className="text-xl text-foreground font-semibold mb-2">Step {step}</h3>
                        <p>Coming soon...</p>
                    </div>
                )}
            </div>

            {/* Main Navigation Footer */}
            <div className="flex items-center justify-between pt-6 mt-8">
                <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`gap-2 ${step === 1 ? "invisible" : ""}`}
                >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                </Button>

                {step < totalSteps ? (
                    <Button
                        onClick={nextStep}
                        disabled={isNextDisabled()}
                        className="gap-2 rounded-full px-6 bg-blue-700 hover:bg-blue-800"
                    >
                        Continue
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                ) : (
                    <Button
                        onClick={() => console.log("Submit Form", formData)}
                        disabled={isNextDisabled()}
                        className="gap-2 rounded-full px-6 bg-blue-700 hover:bg-blue-800"
                    >
                        Generate Series
                    </Button>
                )}
            </div>
        </div>
    );
}
