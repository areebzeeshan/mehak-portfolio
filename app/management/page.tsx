import { MANAGEMENT } from "@/components/constants/constants";

export default function ManagementPage() {
  return (
    <div className="my-20 mx-4 sm:mx-8 md:mx-14 lg:mx-20">
      <h1 className="text-4xl font-bold mb-6">Management Experience</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Overview of my leadership and management roles and achievements.
      </p>
      <div className="space-y-6">
        <div className="space-y-4">
          {MANAGEMENT.map((milestone, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary mt-1.5"></div>
                {index !== MANAGEMENT.length - 1 && (
                  <div className="w-0.5 h-16 bg-border mt-2"></div>
                )}
              </div>
              <div className="pb-4">
                <p className="text-sm font-semibold text-primary">
                  {milestone.year}
                </p>
                <h4 className="text-lg font-semibold text-foreground">
                  {milestone.title}
                </h4>
                <p className="text-foreground/70">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
