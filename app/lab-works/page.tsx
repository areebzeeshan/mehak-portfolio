export default function LabWorksPage() {
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold mb-6">Lab Works</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A collection of my laboratory works, experiments, and research projects.
      </p>
      <div className="grid gap-6">
        <div className="border rounded-lg p-6 hover:bg-accent/50 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Lab Work Title</h2>
          <p className="text-muted-foreground">Description of the lab work and key findings.</p>
        </div>
      </div>
    </div>
  );
}
