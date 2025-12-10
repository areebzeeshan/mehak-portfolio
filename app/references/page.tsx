export default function ReferencesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">References</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Professional references and letters of recommendation.
      </p>
      <div className="grid gap-6">
        <div className="border rounded-lg p-6 hover:bg-accent/50 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Reference Name</h2>
          <p className="text-muted-foreground">Position, Company</p>
          <p className="mt-2">Contact information and relationship.</p>
        </div>
      </div>
    </div>
  );
}
