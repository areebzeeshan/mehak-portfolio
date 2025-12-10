export default function ManagementPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Management Experience</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Overview of my leadership and management roles and achievements.
      </p>
      <div className="grid gap-6">
        <div className="border rounded-lg p-6 hover:bg-accent/50 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Role/Position</h2>
          <p className="text-muted-foreground">Company/Organization, Duration</p>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li>Key responsibility or achievement</li>
            <li>Another key point</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
