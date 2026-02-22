import { CreateForm } from "@/components/dashboard/create/CreateForm";

export default function CreateDashboardPage() {
    return (
        <div className="w-full flex-1 p-6 md:p-8">
            <div className="mx-auto max-w-3xl space-y-8">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Create New Series</h2>
                    <p className="text-muted-foreground">
                        Configure your video series step by step.
                    </p>
                </div>
                <CreateForm />
            </div>
        </div>
    );
}
