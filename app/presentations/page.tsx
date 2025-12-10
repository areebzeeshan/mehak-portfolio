export default function PresentationsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Presentations</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Slides and materials from my talks and presentations.
      </p>
      <div className="grid gap-6">
        <div className="border rounded-lg p-6 hover:bg-accent/50 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Presentation Title</h2>
          <p className="text-muted-foreground">Event name, Date</p>
          <p className="mt-2">Brief description of the presentation topic.</p>
        </div>
      </div>
    </div>
  );
}
